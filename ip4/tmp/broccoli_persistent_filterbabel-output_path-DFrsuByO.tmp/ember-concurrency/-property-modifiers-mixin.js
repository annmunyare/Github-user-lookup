define('ember-concurrency/-property-modifiers-mixin', ['exports', 'ember', 'ember-concurrency/-scheduler', 'ember-concurrency/-buffer-policy'], function (exports, _ember, _emberConcurrencyScheduler, _emberConcurrencyBufferPolicy) {
  'use strict';

  exports.resolveScheduler = resolveScheduler;

  var propertyModifiers = {
    // by default, task(...) expands to task(...).enqueue().maxConcurrency(Infinity)
    _bufferPolicy: _emberConcurrencyBufferPolicy.enqueueTasksPolicy,
    _maxConcurrency: Infinity,
    _taskGroupPath: null,
    _hasUsedModifier: false,
    _hasSetBufferPolicy: false,

    restartable: function restartable() {
      return setBufferPolicy(this, _emberConcurrencyBufferPolicy.cancelOngoingTasksPolicy);
    },

    enqueue: function enqueue() {
      return setBufferPolicy(this, _emberConcurrencyBufferPolicy.enqueueTasksPolicy);
    },

    drop: function drop() {
      return setBufferPolicy(this, _emberConcurrencyBufferPolicy.dropQueuedTasksPolicy);
    },

    keepLatest: function keepLatest() {
      return setBufferPolicy(this, _emberConcurrencyBufferPolicy.dropButKeepLatestPolicy);
    },

    maxConcurrency: function maxConcurrency(n) {
      this._hasUsedModifier = true;
      this._maxConcurrency = n;
      assertModifiersNotMixedWithGroup(this);
      return this;
    },

    group: function group(taskGroupPath) {
      this._taskGroupPath = taskGroupPath;
      assertModifiersNotMixedWithGroup(this);
      return this;
    }
  };

  exports.propertyModifiers = propertyModifiers;

  function setBufferPolicy(obj, policy) {
    obj._hasSetBufferPolicy = true;
    obj._hasUsedModifier = true;
    obj._bufferPolicy = policy;
    assertModifiersNotMixedWithGroup(obj);

    if (obj._maxConcurrency === Infinity) {
      obj._maxConcurrency = 1;
    }

    return obj;
  }

  function assertModifiersNotMixedWithGroup(obj) {
    _ember['default'].assert('ember-concurrency does not currently support using both .group() with other task modifiers (e.g. drop(), enqueue(), restartable())', !obj._hasUsedModifier || !obj._taskGroupPath);
  }

  function resolveScheduler(propertyObj, obj, TaskGroup) {
    if (propertyObj._taskGroupPath) {
      var taskGroup = obj.get(propertyObj._taskGroupPath);
      _ember['default'].assert('Expected path \'' + propertyObj._taskGroupPath + '\' to resolve to a TaskGroup object, but instead was ' + taskGroup, taskGroup instanceof TaskGroup);
      return taskGroup._scheduler;
    } else {
      return _emberConcurrencyScheduler['default'].create({
        bufferPolicy: propertyObj._bufferPolicy,
        maxConcurrency: propertyObj._maxConcurrency
      });
    }
  }
});