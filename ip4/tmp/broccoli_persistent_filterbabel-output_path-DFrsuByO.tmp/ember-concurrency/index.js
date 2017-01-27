define('ember-concurrency/index', ['exports', 'ember', 'ember-concurrency/utils', 'ember-concurrency/-task-property', 'ember-concurrency/-task-instance', 'ember-concurrency/-task-group', 'ember-concurrency/-evented-observable', 'ember-concurrency/-subscribe', 'ember-concurrency/-yieldables', 'ember-concurrency/-decorators'], function (exports, _ember, _emberConcurrencyUtils, _emberConcurrencyTaskProperty, _emberConcurrencyTaskInstance, _emberConcurrencyTaskGroup, _emberConcurrencyEventedObservable, _emberConcurrencySubscribe, _emberConcurrencyYieldables, _emberConcurrencyDecorators) {
  'use strict';

  var _bind = Function.prototype.bind;
  exports.task = task;
  exports.taskGroup = taskGroup;
  exports.interval = interval;
  exports.timeout = timeout;
  exports.events = events;

  var testGenFn = regeneratorRuntime.mark(function testGenFn() {
    return regeneratorRuntime.wrap(function testGenFn$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
        case 'end':
          return context$1$0.stop();
      }
    }, testGenFn, this);
  });
  var testIter = testGenFn();
  _ember['default'].assert('ember-concurrency requires that you set babel.includePolyfill to true in your ember-cli-build.js (or Brocfile.js) to ensure that the generator function* syntax is properly transpiled, e.g.:\n\n  var app = new EmberApp({\n    babel: {\n      includePolyfill: true,\n    }\n  });', (0, _emberConcurrencyUtils.isGeneratorIterator)(testIter));

  /**
   * A Task is a cancelable, restartable, asynchronous operation that
   * is driven by a generator function. Tasks are automatically canceled
   * when the object they live on is destroyed (e.g. a Component
   * is unrendered).
   *
   * To define a task, use the `task(...)` function, and pass in
   * a generator function, which will be invoked when the task
   * is performed. The reason generator functions are used is
   * that they (like the proposed ES7 async-await syntax) can
   * be used to elegantly express asynchronous, cancelable
   * operations.
   *
   * The following Component defines a task called `myTask` that,
   * when performed, prints a message to the console, sleeps for 1 second,
   * prints a final message to the console, and then completes.
   *
   * ```js
   * import { task, timeout } from 'ember-concurrency';
   * export default Component.extend({
   *   myTask: task(function * () {
   *     console.log("Pausing for a second...");
   *     yield timeout(1000);
   *     console.log("Done!");
   *   })
   * });
   * ```
   *
   * ```hbs
   * <button {{action myTask.perform}}>Perform Task</button>
   * ```
   *
   * By default, tasks have no concurrency constraints
   * (multiple instances of a task can be running at the same time)
   * but much of a power of tasks lies in proper usage of Task Modifiers
   * that you can apply to a task.
   *
   * @param {function} generatorFunction the generator function backing the task.
   * @returns {TaskProperty}
   */

  function task() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new (_bind.apply(_emberConcurrencyTaskProperty.TaskProperty, [null].concat(args)))();
  }

  function taskGroup() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return new (_bind.apply(_emberConcurrencyTaskGroup.TaskGroupProperty, [null].concat(args)))();
  }

  /**
   * @private
   */
  var _numIntervals = 0;

  exports._numIntervals = _numIntervals;

  /**
   * @private
   */

  function interval(ms) {
    return (0, _emberConcurrencyUtils.createObservable)(function (publish) {
      var intervalId = setInterval(publish, ms);
      exports._numIntervals = _numIntervals += 1;
      return function () {
        clearInterval(intervalId);
        exports._numIntervals = _numIntervals -= 1;
      };
    });
  }

  /**
   *
   * Yielding `timeout(ms)` will pause a task for the duration
   * of time passed in, in milliseconds.
   *
   * The task below, when performed, will print a message to the
   * console every second.
   *
   * ```js
   * export default Component.extend({
   *   myTask: task(function * () {
   *     while (true) {
   *       console.log("Hello!");
   *       yield timeout(1000);
   *     }
   *   })
   * });
   * ```
   *
   * @param {number} ms - the amount of time to sleep before resuming
   *   the task, in milliseconds
   */

  function timeout(ms) {
    var timerId = undefined;
    var promise = new _ember['default'].RSVP.Promise(function (r) {
      timerId = _ember['default'].run.later(r, ms);
    });
    promise.__ec_cancel__ = function () {
      _ember['default'].run.cancel(timerId);
    };
    return promise;
  }

  function events(obj, eventName) {
    return _emberConcurrencyEventedObservable['default'].create({ obj: obj, eventName: eventName });
  }

  exports.createObservable = _emberConcurrencyUtils.createObservable;
  exports.all = _emberConcurrencyYieldables.all;
  exports.allSettled = _emberConcurrencyYieldables.allSettled;
  exports.race = _emberConcurrencyYieldables.race;
  exports.subscribe = _emberConcurrencySubscribe.subscribe;
  exports.drop = _emberConcurrencyDecorators.drop;
  exports.restartable = _emberConcurrencyDecorators.restartable;
  exports.enqueue = _emberConcurrencyDecorators.enqueue;
  exports.maxConcurrency = _emberConcurrencyDecorators.maxConcurrency;
  exports.cancelOn = _emberConcurrencyDecorators.cancelOn;
  exports.performOn = _emberConcurrencyDecorators.performOn;
  exports.didCancel = _emberConcurrencyTaskInstance.didCancel;
});