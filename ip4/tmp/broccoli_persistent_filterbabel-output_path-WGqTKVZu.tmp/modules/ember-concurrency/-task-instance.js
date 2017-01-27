export { didCancel };
export { _getRunningTaskInstance };
import Ember from 'ember';
import { createObservable, yieldableSymbol } from './utils';

var TASK_CANCELATION_NAME = 'TaskCancelation';

/**
 * Returns true if the object passed to it is a TaskCancelation error.
 * If you call `someTask.perform().catch(...)` or otherwise treat
 * a {@linkcode TaskInstance} like a promise, you may need to
 * handle the cancelation of a TaskInstance differently from
 * other kinds of errors it might throw, and you can use this
 * convenience function to distinguish cancelation from errors.
 *
 * ```js
 * click() {
 *   this.get('myTask').perform().catch(e => {
 *     if (!didCancel(e)) { throw e; }
 *   });
 * }
 * ```
 *
 * @param {Object} error the caught error, which might be a TaskCancelation
 * @returns {Boolean}
 */

function didCancel(e) {
  return e && e.name === TASK_CANCELATION_NAME;
}

function forwardToInternalPromise(method) {
  return function () {
    var _defer$promise;

    this._userWillHandlePromise = true;
    return (_defer$promise = this._defer.promise)[method].apply(_defer$promise, arguments)['catch'](deferToLastRunLoopQueue);
  };
}

var CURRENT_TASK_INSTANCE = undefined;

function _getRunningTaskInstance() {
  return CURRENT_TASK_INSTANCE;
}

function spliceSlice(str, index, count, add) {
  return str.slice(0, index) + (add || "") + str.slice(index + count);
}

var run = Ember.run;

// this backports the Ember 2.0+ RSVP _onError 'after' microtask behavior to Ember < 2.0
function deferToLastRunLoopQueue(e) {
  return new Ember.RSVP.Promise(function (_, reject) {
    run.schedule(run.queues[run.queues.length - 1], function () {
      reject(e);
    });
  });
}

var SUCCESS = "success";
var ERROR = "error";
var CANCELATION = "cancel";

var RESUME_NEXT = "next";
var RESUME_THROW = "throw";
var RESUME_RETURN = "return";

/**
  A `TaskInstance` represent a single execution of a
  {@linkcode Task}. Every call to {@linkcode Task#perform} returns
  a `TaskInstance`.

  `TaskInstance`s are cancelable, either explicitly
  via {@linkcode TaskInstance#cancel} or {@linkcode Task#cancelAll},
  or automatically due to the host object being destroyed, or
  because concurrency policy enforced by a
  {@linkcode TaskProperty Task Modifier} canceled the task instance.

  <style>
    .ignore-this--this-is-here-to-hide-constructor,
    #TaskInstance { display: none }
  </style>

  @class TaskInstance
*/
var taskInstanceAttrs = {
  iterator: null,
  _disposable: null,
  _userWillHandlePromise: false,
  task: null,
  args: null,

  /**
   * If this TaskInstance runs to completion by returning a property
   * other than a rejecting promise, this property will be set
   * with that value.
   *
   * @memberof TaskInstance
   * @instance
   * @readOnly
   */
  value: null,

  /**
   * If this TaskInstance is canceled or throws an error (or yields
   * a promise that rejects), this property will be set with that error.
   * Otherwise, it is null.
   *
   * @memberof TaskInstance
   * @instance
   * @readOnly
   */
  error: null,

  /**
   * True if the task instance was canceled before it could run to completion.
   *
   * @memberof TaskInstance
   * @instance
   * @readOnly
   */
  isCanceled: false,

  /**
   * True if the task instance has started, else false.
   *
   * @memberof TaskInstance
   * @instance
   * @readOnly
   */
  hasStarted: false,

  /**
   * True if the task has run to completion.
   *
   * @memberof TaskInstance
   * @instance
   * @readOnly
   */
  isFinished: false,

  /**
   * True if the task is still running.
   *
   * @memberof TaskInstance
   * @instance
   * @readOnly
   */
  isRunning: Ember.computed.not('isFinished'),

  /**
   * Describes the state that the task instance is in. Can be used for debugging,
   * or potentially driving some UI state. Possible values are:
   *
   * - `"dropped"`: task instance was canceled before it started
   * - `"canceled"`: task instance was canceled before it could finish
   * - `"finished"`: task instance ran to completion (even if an exception was thrown)
   * - `"running"`: task instance is currently running (returns true even if
   *     is paused on a yielded promise)
   * - `"waiting"`: task instance hasn't begun running yet (usually
   *     because the task is using the {@linkcode TaskProperty#enqueue .enqueue()}
   *     task modifier)
   *
   * The animated timeline examples on the [Task Concurrency](/#/docs/task-concurrency)
   * docs page make use of this property.
   *
   * @memberof TaskInstance
   * @instance
   * @readOnly
   */
  state: Ember.computed('isDropped', 'isCanceled', 'hasStarted', 'isFinished', function () {
    if (this.get('isDropped')) {
      return 'dropped';
    } else if (this.get('isCanceled')) {
      return 'canceled';
    } else if (this.get('isFinished')) {
      return 'finished';
    } else if (this.get('hasStarted')) {
      return 'running';
    } else {
      return 'waiting';
    }
  }),

  /**
   * True if the TaskInstance was canceled before it could
   * ever start running. For example, calling
   * {@linkcode Task#perform .perform()} twice on a
   * task with the {@linkcode TaskProperty#drop .drop()} modifier applied
   * will result in the second task instance being dropped.
   *
   * @memberof TaskInstance
   * @instance
   * @readOnly
   */
  isDropped: Ember.computed('isCanceled', 'hasStarted', function () {
    return this.get('isCanceled') && !this.get('hasStarted');
  }),

  _index: 1,

  init: function init() {
    var _this = this;

    this._super.apply(this, arguments);
    this._defer = Ember.RSVP.defer();
    this._cancelationIgnorer = this._defer.promise['catch'](function (e) {
      if (_this._userWillHandlePromise) {
        return;
      }

      if (e && e.name === 'TaskCancelation') {
        // default behavior: swallow cancelations
      } else {
          return Ember.RSVP.reject(e);
        }
    });
    this.iterator = this._makeIterator();
  },

  _makeIterator: function _makeIterator() {
    return this.fn.apply(this.context, this.args);
  },

  _start: function _start() {
    if (this.hasStarted || this.isCanceled) {
      return this;
    }
    this.set('hasStarted', true);
    this._proceed(1, undefined);
    return this;
  },

  toString: function toString() {
    var taskString = "" + this.task;
    return spliceSlice(taskString, -1, 0, '.perform()');
  },

  /**
   * Cancels the task instance. Has no effect if the task instance has
   * already been canceled or has already finished running.
   *
   * @method cancel
   * @memberof TaskInstance
   * @instance
   */
  cancel: function cancel() {
    if (this.isCanceled || this.isFinished) {
      return;
    }

    if (this._debugCallback) {
      this._debugCallback({
        type: 'cancel',
        taskInstance: this,
        task: this.task
      });
    }

    var error = new Error("TaskCancelation");
    error.name = TASK_CANCELATION_NAME;
    error.taskInstance = this;

    this._finalize(error, CANCELATION);

    if (this.hasStarted) {
      // eagerly advance index so that pending promise resolutions
      // are ignored
      this._index++;
      this._proceed(this._index, error, RESUME_RETURN);
    }
  },

  /**
   * Returns a promise that resolves with the value returned
   * from the task's (generator) function, or rejects with
   * either the exception thrown from the task function, or
   * an error with a `.name` property with value `"TaskCancelation"`.
   *
   * @method then
   * @memberof TaskInstance
   * @instance
   * @return {Promise}
   */
  then: forwardToInternalPromise('then'),

  /**
   * @method catch
   * @memberof TaskInstance
   * @instance
   * @return {Promise}
   */
  'catch': forwardToInternalPromise('catch'),

  /**
   * @method finally
   * @memberof TaskInstance
   * @instance
   * @return {Promise}
   */
  'finally': forwardToInternalPromise('finally'),

  _defer: null,

  _proceed: function _proceed(index, nextValue, method) {
    this._dispose();
    Ember.run.once(this, this._takeStep, index, nextValue, method);
  },

  _hasResolved: false,

  _finalize: function _finalize(value, _completion) {
    var completion = _completion;

    if (didCancel(value)) {
      completion = CANCELATION;
    }

    this.set('isFinished', true);

    switch (completion) {
      case SUCCESS:
        this._defer.resolve(value);
        this.set('value', value);
        break;
      case ERROR:
        this.set('error', value);
        this._defer.reject(value);
        break;
      case CANCELATION:
        this.set('error', value);
        this.set('isCanceled', true);
        this._defer.reject(value);
        break;
    }

    this._dispose();
  },

  _dispose: function _dispose() {
    if (this._disposable) {
      this._disposable.dispose();
      this._disposable = null;
    }
  },

  _takeSafeStep: function _takeSafeStep(nextValue, iteratorMethod) {
    if (!this.hasStarted) {
      // calling .return/.throw on an unstarted generator iterator
      // doesn't do the intuitive thing, so watch out for it.

      if (iteratorMethod === 'return') {
        return { done: true, value: undefined };
      }
      if (iteratorMethod === 'throw') {
        return { done: true, value: undefined, error: true };
      }
    }

    try {
      CURRENT_TASK_INSTANCE = this;
      return this.iterator[iteratorMethod](nextValue);
    } catch (e) {
      return { value: e, error: true };
    } finally {
      CURRENT_TASK_INSTANCE = null;
    }
  },

  _takeStep: function _takeStep(index, nextValue, method) {
    var _this2 = this;

    if (index !== this._index) {
      return;
    }

    var _takeSafeStep2 = this._takeSafeStep(nextValue, method || RESUME_NEXT);

    var done = _takeSafeStep2.done;
    var value = _takeSafeStep2.value;
    var error = _takeSafeStep2.error;

    if (error) {
      this._finalize(value, ERROR);
      return;
    } else {
      if (done && value === undefined) {
        this.set('isFinished', true);
        this._finalize(value, SUCCESS);
        return;
      }
    }

    var observable = normalizeObservable(value);
    if (!observable) {
      this._proceedOrFinalize(done, index, value);
      return;
    }

    this._disposable = observable.subscribe(function (v) {
      _this2._proceedOrFinalize(done, index, v);
    }, function (error) {
      if (didCancel(error)) {
        _this2._proceed(index, error, RESUME_RETURN);
      } else {
        _this2._proceed(index, error, RESUME_THROW);
      }
    }, function () {
      // TODO: test, and figure out what it means to yield
      // something that completes without producing a value.
    });
  },

  _proceedOrFinalize: function _proceedOrFinalize(done, index, value) {
    if (done) {
      this._finalize(value, SUCCESS);
    } else {
      this._proceed(index, value);
    }
  }
};

taskInstanceAttrs[yieldableSymbol] = function () {
  var _this3 = this;

  return createObservable(function (publish) {
    _this3.then(publish, publish.error);
    return function () {
      _this3.cancel();
    };
  });
};

var TaskInstance = Ember.Object.extend(taskInstanceAttrs);

function normalizeObservable(value) {
  if (!value) {
    return null;
  }

  if (value[yieldableSymbol]) {
    return value[yieldableSymbol]();
  } else if (typeof value.then === 'function') {
    return createObservable(function (publish) {
      value.then(publish, publish.error);
      return value.__ec_cancel__;
    });
  } else if (typeof value.subscribe === 'function') {
    // TODO: check for scheduler interface for Rx rather than
    // creating another wrapping observable to schedule on run loop.
    return createObservable(function (publish) {
      return value.subscribe(publish, publish.error).dispose;
    });
  } else {
    return null;
  }
}

export default TaskInstance;