export { TaskGroupProperty };
import Ember from 'ember';

import { objectAssign, _ComputedProperty } from './utils';
import TaskStateMixin from './-task-state-mixin';
import { propertyModifiers, resolveScheduler } from './-property-modifiers-mixin';

var computed = Ember.computed;
var TaskGroup = Ember.Object.extend(TaskStateMixin, {
  toString: function toString() {
    return '<TaskGroup:' + this._propertyName + '>';
  },

  _numRunningOrNumQueued: computed.or('numRunning', 'numQueued'),
  isRunning: computed.bool('_numRunningOrNumQueued'),
  isQueued: false
});

export { TaskGroup };

function TaskGroupProperty() {
  for (var _len = arguments.length, decorators = Array(_len), _key = 0; _key < _len; _key++) {
    decorators[_key] = arguments[_key];
  }

  var taskFn = decorators.pop();
  var tp = this;
  _ComputedProperty.call(this, function (_propertyName) {
    return TaskGroup.create({
      fn: taskFn,
      context: this,
      _origin: this,
      _taskGroupPath: tp._taskGroupPath,
      _scheduler: resolveScheduler(tp, this, TaskGroup),
      _propertyName: _propertyName,
      _debugCallback: tp._debugCallback
    });
  });
}

TaskGroupProperty.prototype = Object.create(_ComputedProperty.prototype);
objectAssign(TaskGroupProperty.prototype, propertyModifiers, {
  constructor: TaskGroupProperty
});