define('ember-concurrency/-task-property', ['exports', 'ember', 'ember-concurrency/-task-instance', 'ember-concurrency/-task-state-mixin', 'ember-concurrency/-task-group', 'ember-concurrency/-property-modifiers-mixin', 'ember-concurrency/utils', 'ember-concurrency/-encapsulated-task'], function (exports, _ember, _emberConcurrencyTaskInstance, _emberConcurrencyTaskStateMixin, _emberConcurrencyTaskGroup, _emberConcurrencyPropertyModifiersMixin, _emberConcurrencyUtils, _emberConcurrencyEncapsulatedTask) {
  'use strict';

  var _slice = Array.prototype.slice;
  exports.TaskProperty = TaskProperty;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }

  var getOwner = _ember['default'].getOwner;

  /**
    The `Task` object lives on a host Ember object (e.g.
    a Component, Route, or Controller). You call the
    {@linkcode Task#perform .perform()} method on this object
    to create run individual {@linkcode TaskInstance}s,
    and at any point, you can call the {@linkcode Task#cancelAll .cancelAll()}
    method on this object to cancel all running or enqueued
    {@linkcode TaskInstance}s.
  
  
    <style>
      .ignore-this--this-is-here-to-hide-constructor,
      #Task{ display: none }
    </style>
  
    @class Task
  */
  var Task = _ember['default'].Object.extend(_emberConcurrencyTaskStateMixin['default'], _defineProperty({
    /**
     * `true` if any current task instances are running.
     *
     * @memberof Task
     * @member {boolean} isRunning
     * @instance
     * @readOnly
     */

    /**
     * `true` if any future task instances are queued.
     *
     * @memberof Task
     * @member {boolean} isQueued
     * @instance
     * @readOnly
     */

    /**
     * `true` if the task is not in the running or queued state.
     *
     * @memberof Task
     * @member {boolean} isIdle
     * @instance
     * @readOnly
     */

    /**
     * The current state of the task: `"running"`, `"queued"` or `"idle"`.
     *
     * @memberof Task
     * @member {string} state
     * @instance
     * @readOnly
     */

    /**
     * The most recently started task instance.
     *
     * @memberof Task
     * @member {TaskInstance} last
     * @instance
     * @readOnly
     */

    /**
     * The most recent task instance that is currently running.
     *
     * @memberof Task
     * @member {TaskInstance} lastRunning
     * @instance
     * @readOnly
     */

    /**
     * The most recently performed task instance.
     *
     * @memberof Task
     * @member {TaskInstance} lastPerformed
     * @instance
     * @readOnly
     */

    /**
     * The most recent task instance that succeeded.
     *
     * @memberof Task
     * @member {TaskInstance} lastSuccessful
     * @instance
     * @readOnly
     */

    /**
     * The most recently completed task instance.
     *
     * @memberof Task
     * @member {TaskInstance} lastComplete
     * @instance
     * @readOnly
     */

    /**
     * The most recent task instance that errored.
     *
     * @memberof Task
     * @member {TaskInstance} lastErrored
     * @instance
     * @readOnly
     */

    /**
     * The most recently canceled task instance.
     *
     * @memberof Task
     * @member {TaskInstance} lastCanceled
     * @instance
     * @readOnly
     */

    /**
     * The most recent task instance that is incomplete.
     *
     * @memberof Task
     * @member {TaskInstance} lastIncomplete
     * @instance
     * @readOnly
     */

    fn: null,
    context: null,
    _observes: null,
    _curryArgs: null,

    init: function init() {
      this._super.apply(this, arguments);

      var self = this;
      this.perform = function () {
        if (this !== self) {
          console.warn('The use of ' + self._propertyName + '.perform within a template is deprecated and won\'t be supported in future versions of ember-concurrency. Please use the `perform` helper instead, e.g. {{perform ' + self._propertyName + '}}');
        }
        return self._perform.apply(self, arguments);
      };

      if (typeof this.fn === 'object') {
        var owner = getOwner(this.context);
        var ownerInjection = owner ? owner.ownerInjection() : {};
        this._taskInstanceFactory = _emberConcurrencyEncapsulatedTask['default'].extend(ownerInjection, this.fn);
      }

      (0, _emberConcurrencyUtils._cleanupOnDestroy)(this.context, this, 'cancelAll');
    },

    _curry: function _curry() {
      var task = this._clone();

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      task._curryArgs = [].concat(_toConsumableArray(this._curryArgs || []), args);
      return task;
    },

    _clone: function _clone() {
      return Task.create({
        fn: this.fn,
        context: this.context,
        _origin: this._origin,
        _taskGroupPath: this._taskGroupPath,
        _scheduler: this._scheduler,
        _propertyName: this._propertyName,
        _debugCallback: this._debugCallback
      });
    },

    /**
     * This property is true if this task is NOT running, i.e. the number
     * of currently running TaskInstances is zero.
     *
     * This property is useful for driving the state/style of buttons
     * and loading UI, among other things.
     *
     * @memberof Task
     * @instance
     * @readOnly
     */

    /**
     * This property is true if this task is running, i.e. the number
     * of currently running TaskInstances is greater than zero.
     *
     * This property is useful for driving the state/style of buttons
     * and loading UI, among other things.
     *
     * @memberof Task
     * @instance
     * @readOnly
     */

    /**
     * EXPERIMENTAL
     *
     * This value describes what would happen to the TaskInstance returned
     * from .perform() if .perform() were called right now.  Returns one of
     * the following values:
     *
     * - `succeed`: new TaskInstance will start running immediately
     * - `drop`: new TaskInstance will be dropped
     * - `enqueue`: new TaskInstance will be enqueued for later execution
     *
     * @memberof Task
     * @instance
     * @private
     * @readOnly
     */

    /**
     * EXPERIMENTAL
     *
     * Returns true if calling .perform() right now would immediately start running
     * the returned TaskInstance.
     *
     * @memberof Task
     * @instance
     * @private
     * @readOnly
     */

    /**
     * EXPERIMENTAL
     *
     * Returns true if calling .perform() right now would immediately cancel (drop)
     * the returned TaskInstance.
     *
     * @memberof Task
     * @instance
     * @private
     * @readOnly
     */

    /**
     * EXPERIMENTAL
     *
     * Returns true if calling .perform() right now would enqueue the TaskInstance
     * rather than execute immediately.
     *
     * @memberof Task
     * @instance
     * @private
     * @readOnly
     */

    /**
     * EXPERIMENTAL
     *
     * Returns true if calling .perform() right now would cause a previous task to be canceled
     *
     * @memberof Task
     * @instance
     * @private
     * @readOnly
     */

    /**
     * The current number of active running task instances. This
     * number will never exceed maxConcurrency.
     *
     * @memberof Task
     * @instance
     * @readOnly
     */

    /**
     * Creates a new {@linkcode TaskInstance} and attempts to run it right away.
     * If running this task instance would increase the task's concurrency
     * to a number greater than the task's maxConcurrency, this task
     * instance might be immediately canceled (dropped), or enqueued
     * to run at later time, after the currently running task(s) have finished.
     *
     * @method perform
     * @memberof Task
     * @param {*} arg* - args to pass to the task function
     * @instance
     */
    perform: null,

    /**
     * Cancels all running or queued `TaskInstance`s for this Task.
     * If you're trying to cancel a specific TaskInstance (rather
     * than all of the instances running under this task) call
     * `.cancel()` on the specific TaskInstance.
     *
     * @method cancelAll
     * @memberof Task
     * @instance
     */

    toString: function toString() {
      return '<Task:' + this._propertyName + '>';
    },

    _taskInstanceFactory: _emberConcurrencyTaskInstance['default'],

    _perform: function _perform() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      //let performsTask = this.get('_performs');
      //if (performsTask) {
      //args.unshift(performsTask);
      //}

      var fullArgs = this._curryArgs ? [].concat(_toConsumableArray(this._curryArgs), args) : args;
      var taskInstance = this._taskInstanceFactory.create({
        fn: this.fn,
        args: fullArgs,
        context: this.context,
        owner: this.context,
        task: this,
        _origin: this,
        _debugCallback: this._debugCallback
      });

      if (this.context.isDestroying) {
        taskInstance.cancel();
      }

      //if (this._debugCallback) {
      //this._debugCallback({
      //type: 'perform',
      //taskInstance,
      //task: this,
      //});
      //}

      this._scheduler.schedule(taskInstance);
      return taskInstance;
    },

    _getCompletionPromise: function _getCompletionPromise() {
      return this._scheduler.getCompletionPromise();
    }

  }, _emberConcurrencyUtils.INVOKE, function () {
    return this.perform.apply(this, arguments);
  }));

  exports.Task = Task;

  /**
    A {@link TaskProperty} is the Computed Property-like object returned
    from the {@linkcode task} function. You can call Task Modifier methods
    on this object to configure the behavior of the {@link Task}.
  
    See [Managing Task Concurrency](/#/docs/task-concurrency) for an
    overview of all the different task modifiers you can use and how
    they impact automatic cancelation / enqueueing of task instances.
  
    <style>
      .ignore-this--this-is-here-to-hide-constructor,
      #TaskProperty { display: none }
    </style>
  
    @class TaskProperty
  */

  function TaskProperty() {
    var _performsPath = undefined;

    var tp = this;
    _emberConcurrencyUtils._ComputedProperty.call(this, function (_propertyName) {
      return Task.create({
        fn: tp.taskFn,
        context: this,
        _origin: this,
        _taskGroupPath: tp._taskGroupPath,
        _scheduler: (0, _emberConcurrencyPropertyModifiersMixin.resolveScheduler)(tp, this, _emberConcurrencyTaskGroup.TaskGroup),
        //_performsPath,
        _propertyName: _propertyName,
        _debugCallback: tp._debugCallback
      });
    });

    for (var _len3 = arguments.length, decorators = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      decorators[_key3] = arguments[_key3];
    }

    this.taskFn = decorators.pop();
    this.eventNames = null;
    this.cancelEventNames = null;
    this._debugCallback = null;
    this._observes = null;

    for (var i = 0; i < decorators.length; ++i) {
      var decorator = decorators[i];
      if (typeof decorator === 'function') {
        applyDecorator(this, decorator);
      } else {
        _performsPath = decorator;
      }
    }
  }

  function applyDecorator(taskProperty, decorator) {
    var value = decorator(taskProperty);
    if (typeof value === 'function') {
      value(taskProperty);
    }
  }

  TaskProperty.prototype = Object.create(_emberConcurrencyUtils._ComputedProperty.prototype);
  (0, _emberConcurrencyUtils.objectAssign)(TaskProperty.prototype, _emberConcurrencyPropertyModifiersMixin.propertyModifiers, {
    constructor: TaskProperty,

    setup: function setup(proto, taskName) {
      if (this._maxConcurrency !== Infinity && !this._hasSetBufferPolicy) {
        _ember['default'].Logger.warn('The use of maxConcurrency() without a specified task modifier is deprecated and won\'t be supported in future versions of ember-concurrency. Please specify a task modifier instead, e.g. `' + taskName + ': task(...).enqueue().maxConcurrency(' + this._maxConcurrency + ')`');
      }

      registerOnPrototype(_ember['default'].addListener, proto, this.eventNames, taskName, '_perform', false);
      registerOnPrototype(_ember['default'].addListener, proto, this.cancelEventNames, taskName, 'cancelAll', false);
      registerOnPrototype(_ember['default'].addObserver, proto, this._observes, taskName, '_perform', true);
    },

    /**
     * Calling `task(...).on(eventName)` configures the task to be
     * automatically performed when the specified events fire. In
     * this way, it behaves like
     * [Ember.on](http://emberjs.com/api/classes/Ember.html#method_on).
     *
     * You can use `task(...).on('init')` to perform the task
     * when the host object is initialized.
     *
     * ```js
     * export default Ember.Component.extend({
     *   pollForUpdates: task(function * () {
     *     // ... this runs when the Component is first created
     *     // because we specified .on('init')
     *   }).on('init'),
     *
     *   handleFoo: task(function * (a, b, c) {
     *     // this gets performed automatically if the 'foo'
     *     // event fires on this Component,
     *     // e.g., if someone called component.trigger('foo')
     *   }).on('foo'),
     * });
     * ```
     *
     * [See the Writing Tasks Docs for more info](/#/docs/writing-tasks)
     *
     * @method on
     * @memberof TaskProperty
     * @param {String} eventNames*
     * @instance
     */
    on: function on() {
      this.eventNames = this.eventNames || [];
      this.eventNames.push.apply(this.eventNames, arguments);
      return this;
    },

    /**
     * This behaves like the {@linkcode TaskProperty#on task(...).on() modifier},
     * but instead will cause the task to be canceled if any of the
     * specified events fire on the parent object.
     *
     * [See the Live Example](/#/docs/examples/route-tasks/1)
     *
     * @method cancelOn
     * @memberof TaskProperty
     * @param {String} eventNames*
     * @instance
     */
    cancelOn: function cancelOn() {
      this.cancelEventNames = this.cancelEventNames || [];
      this.cancelEventNames.push.apply(this.cancelEventNames, arguments);
      return this;
    },

    observes: function observes() {
      for (var _len4 = arguments.length, properties = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        properties[_key4] = arguments[_key4];
      }

      this._observes = properties;
      return this;
    },

    /**
     * Configures the task to cancel old currently task instances
     * to make room for a new one to perform. Sets default
     * maxConcurrency to 1.
     *
     * [See the Live Example](/#/docs/examples/route-tasks/1)
     *
     * @method restartable
     * @memberof TaskProperty
     * @instance
     */

    /**
     * Configures the task to run task instances one-at-a-time in
     * the order they were `.perform()`ed. Sets default
     * maxConcurrency to 1.
     *
     * @method enqueue
     * @memberof TaskProperty
     * @instance
     */

    /**
     * Configures the task to immediately cancel (i.e. drop) any
     * task instances performed when the task is already running
     * at maxConcurrency. Sets default maxConcurrency to 1.
     *
     * @method drop
     * @memberof TaskProperty
     * @instance
     */

    /**
     * Configures the task to drop all but the most recently
     * performed {@linkcode TaskInstance }.
     *
     * @method keepLatest
     * @memberof TaskProperty
     * @instance
     */

    /**
     * Sets the maximum number of task instances that are allowed
     * to run at the same time. By default, with no task modifiers
     * applied, this number is Infinity (there is no limit
     * to the number of tasks that can run at the same time).
     * {@linkcode TaskProperty#restartable .restartable()},
     * {@linkcode TaskProperty#enqueue .enqueue()}, and
     * {@linkcode TaskProperty#drop .drop()} set the default
     * maxConcurrency to 1, but you can override this value
     * to set the maximum number of concurrently running tasks
     * to a number greater than 1.
     *
     * [See the AJAX Throttling example](/#/docs/examples/ajax-throttling)
     *
     * The example below uses a task with `maxConcurrency(3)` to limit
     * the number of concurrent AJAX requests (for anyone using this task)
     * to 3.
     *
     * ```js
     * doSomeAjax: task(function * (url) {
     *   return Ember.$.getJSON(url).promise();
     * }).maxConcurrency(3),
     *
     * elsewhere() {
     *   this.get('doSomeAjax').perform("http://www.example.com/json");
     * },
     * ```
     *
     * @method maxConcurrency
     * @memberof TaskProperty
     * @param {Number} n The maximum number of concurrently running tasks
     * @instance
     */

    _debug: function _debug(cb) {
      this._debugCallback = cb || defaultDebugCallback;
      return this;
    }
  });

  function defaultDebugCallback(payload) {
    console.log(payload);
  }

  function registerOnPrototype(addListenerOrObserver, proto, names, taskName, taskMethod, once) {
    if (names) {
      for (var i = 0; i < names.length; ++i) {
        var _name = names[i];
        addListenerOrObserver(proto, _name, null, makeTaskCallback(taskName, taskMethod, once));
      }
    }
  }

  function makeTaskCallback(taskName, method, once) {
    return function () {
      var task = this.get(taskName);

      if (once) {
        var _Ember$run;

        (_Ember$run = _ember['default'].run).scheduleOnce.apply(_Ember$run, ['actions', task, method].concat(_slice.call(arguments)));
      } else {
        task[method].apply(task, arguments);
      }
    };
  }
});