export { subscribe };
import Ember from 'ember';
import { Task } from './-task-property';
import { _getRunningTaskInstance } from './-task-instance';
import { yieldableSymbol, createObservable } from './utils';
import { enqueueTasksPolicy, dropQueuedTasksPolicy, cancelOngoingTasksPolicy } from './-buffer-policy';

var computed = Ember.computed;
var oneWay = computed.oneWay;

var loopTaskAttrs = {
  _makeTask: null,
  _taskHasStarted: false,
  _bufferPolicy: enqueueTasksPolicy,
  _maxConcurrency: Infinity,
  _taskInstance: null,
  _origin: null,

  _subscriptionCompleted: false,
  _innerTask: computed(function () {
    var _this = this;

    this._taskHasStarted = true;

    var task = undefined;
    if (this._fnOrTask instanceof Task) {
      task = this._fnOrTask;
    } else {
      task = Task.create({
        fn: this._fnOrTask,
        context: this._taskInstance.context,
        _bufferPolicy: this._bufferPolicy,
        _maxConcurrency: this._maxConcurrency,
        _propertyName: this._taskInstance.get('name') + ':inner subscribe() task'
      });
    }

    this._subscription = this._observable.subscribe(function (v) {
      task.perform(v);
    }, function () {
      throw new Error("not implemented");
    }, function () {
      task._getCompletionPromise().then(function () {
        _this._teardown();
      });
    });

    return task;
  }),

  toString: function toString() {
    return '<LoopTask:' + Ember.guidFor(this) + '> of ' + this._origin;
  },

  init: function init() {
    var _this2 = this;

    this._super.apply(this, arguments);
    this._onCompleteDefer = Ember.RSVP.defer();
    Ember.run.schedule('actions', null, function () {
      Ember.assert('You must `yield` calls to subscribe(), e.g. `yield subscribe()`: ' + _this2, _this2._taskHasStarted);
    });
  },

  concurrency: oneWay('_innerTask.concurrency'),
  nextPerformState: oneWay('_innerTask.nextPerformState'),
  performWillSucceed: oneWay('_innerTask.performWillSucceed'),
  performWillDrop: oneWay('_innerTask.performWillDrop'),
  performWillEnqueue: oneWay('_innerTask.performWillEnqueue'),
  performWillCancelPrevious: oneWay('_innerTask.performWillCancelPrevious'),
  isIdle: oneWay('_innerTask.isIdle'),
  isRunning: oneWay('_innerTask.isRunning'),

  cancelAll: function cancelAll() {
    this.get('_innerTask').cancelAll();
  },

  maxConcurrency: function maxConcurrency(n) {
    this._maxConcurrency = n;
    return this;
  },

  restartable: bufferPolicySetter('restartable', cancelOngoingTasksPolicy),
  enqueue: bufferPolicySetter('enqueue', enqueueTasksPolicy),
  drop: bufferPolicySetter('drop', dropQueuedTasksPolicy),

  _onCompleteDefer: null,
  _teardown: function _teardown() {
    if (this._subscription) {
      this._subscription.dispose();
      this._subscription = null;
      this._onCompleteDefer.resolve();
    }
  },

  _setDefaultMaxConcurrency: function _setDefaultMaxConcurrency(n) {
    if (this._maxConcurrency === Infinity) {
      this._maxConcurrency = n;
    }
  },

  _assertNotStarted: function _assertNotStarted(methodName) {
    if (this._taskHasStarted) {
      Ember.assert(methodName + '() cannot be called at this time; iteration has already started', false);
    }
  }
};

loopTaskAttrs[yieldableSymbol] = function () {
  var _this3 = this;

  return createObservable(function (publish) {
    // this is the observable that gets yielded by
    // the task calling `subscribe()`. By calling `publish`
    // here, we're signaling that this loop task is done
    // and that the parent task should proceed.

    _this3._onCompleteDefer.promise.then(publish);
    _this3.get('_innerTask');
    return function () {
      _this3._teardown();
    };
  });
};

var LoopTask = Ember.Object.extend(loopTaskAttrs);

export { LoopTask };
function bufferPolicySetter(name, bufferPolicy) {
  return function () {
    this._assertNotStarted(name);
    this._setDefaultMaxConcurrency(1);
    this._bufferPolicy = bufferPolicy;
    return this;
  };
}

function subscribe(observable, fnOrTask) {
  var taskInstance = _getRunningTaskInstance();
  Ember.assert("subscribe() can only be called from within a task function (e.g. function * () { yield subscribe(...) })", taskInstance);

  return LoopTask.create({
    _taskInstance: taskInstance,
    _fnOrTask: fnOrTask,
    _observable: observable,
    _origin: taskInstance
  });
}