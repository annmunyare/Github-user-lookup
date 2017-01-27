define('ember-concurrency/-task-group', ['exports', 'ember', 'ember-concurrency/utils', 'ember-concurrency/-task-state-mixin', 'ember-concurrency/-property-modifiers-mixin'], function (exports, _ember, _emberConcurrencyUtils, _emberConcurrencyTaskStateMixin, _emberConcurrencyPropertyModifiersMixin) {
  'use strict';

  exports.TaskGroupProperty = TaskGroupProperty;

  var computed = _ember['default'].computed;
  var TaskGroup = _ember['default'].Object.extend(_emberConcurrencyTaskStateMixin['default'], {
    toString: function toString() {
      return '<TaskGroup:' + this._propertyName + '>';
    },

    _numRunningOrNumQueued: computed.or('numRunning', 'numQueued'),
    isRunning: computed.bool('_numRunningOrNumQueued'),
    isQueued: false
  });

  exports.TaskGroup = TaskGroup;

  function TaskGroupProperty() {
    for (var _len = arguments.length, decorators = Array(_len), _key = 0; _key < _len; _key++) {
      decorators[_key] = arguments[_key];
    }

    var taskFn = decorators.pop();
    var tp = this;
    _emberConcurrencyUtils._ComputedProperty.call(this, function (_propertyName) {
      return TaskGroup.create({
        fn: taskFn,
        context: this,
        _origin: this,
        _taskGroupPath: tp._taskGroupPath,
        _scheduler: (0, _emberConcurrencyPropertyModifiersMixin.resolveScheduler)(tp, this, TaskGroup),
        _propertyName: _propertyName,
        _debugCallback: tp._debugCallback
      });
    });
  }

  TaskGroupProperty.prototype = Object.create(_emberConcurrencyUtils._ComputedProperty.prototype);
  (0, _emberConcurrencyUtils.objectAssign)(TaskGroupProperty.prototype, _emberConcurrencyPropertyModifiersMixin.propertyModifiers, {
    constructor: TaskGroupProperty
  });
});