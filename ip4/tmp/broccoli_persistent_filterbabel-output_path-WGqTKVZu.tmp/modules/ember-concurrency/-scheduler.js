import Ember from 'ember';

var Scheduler = Ember.Object.extend({
  lastPerformed: null,
  lastStarted: null,
  lastRunning: null,
  lastSuccessful: null,
  lastComplete: null,
  lastErrored: null,
  lastCanceled: null,
  lastIncomplete: null,

  boundHandleFulfill: null,
  boundHandleReject: null,

  init: function init() {
    this._super.apply(this, arguments);
    this.activeTaskInstances = Ember.A();
    this.queuedTaskInstances = Ember.A();
  },

  cancelAll: function cancelAll() {
    var seen = {};
    this.spliceTaskInstances(this.activeTaskInstances, 0, this.activeTaskInstances.length, seen);
    this.spliceTaskInstances(this.queuedTaskInstances, 0, this.queuedTaskInstances.length, seen);
    flushTaskCounts(seen);
  },

  spliceTaskInstances: function spliceTaskInstances(taskInstances, index, count, seen) {
    for (var i = index; i < index + count; ++i) {
      var taskInstance = taskInstances[i];
      taskInstance.cancel();
      if (seen) {
        seen[Ember.guidFor(taskInstance)] = taskInstance.task;
      }
    }
    taskInstances.splice(index, count);
  },

  schedule: function schedule(taskInstance) {
    this.set('lastPerformed', taskInstance);
    this.queuedTaskInstances.push(taskInstance);
    this._scheduleFlush();
    //this.notifyPropertyChange('nextPerformState');
  },

  _flushScheduled: false,
  _scheduleFlush: function _scheduleFlush() {
    this._flushScheduled = true;
    Ember.run.once(this, this._flushQueues);
  },

  _flushQueues: function _flushQueues() {
    var _this = this;

    this._flushScheduled = false;
    var seen = {};

    for (var i = 0; i < this.activeTaskInstances.length; ++i) {
      var task = this.activeTaskInstances[i].task;
      seen[Ember.guidFor(task)] = task;
    }

    this.activeTaskInstances = Ember.A(this.activeTaskInstances.filterBy('isFinished', false));
    this.bufferPolicy.schedule(this);

    var lastStarted = null;

    var _loop = function (i) {

      var taskInstance = _this.activeTaskInstances[i];
      if (!taskInstance.hasStarted) {
        // use internal promise so that it doesn't cancel error reporting
        taskInstance._start()._defer.promise.then(function () {
          _this.set('lastSuccessful', taskInstance);
          _this.set('lastComplete', taskInstance);
          _this._scheduleFlush();
        }, function (error) {
          if (error && error.name === 'TaskCancelation') {
            _this.set('lastCanceled', taskInstance);
          } else {
            _this.set('lastErrored', taskInstance);
          }
          _this.set('lastComplete', taskInstance);
          _this.set('lastIncomplete', taskInstance);
          _this._scheduleFlush();
        });
        _this.set('lastStarted', taskInstance);
        lastStarted = taskInstance;
      }
      var task = taskInstance.task;
      seen[Ember.guidFor(task)] = task;
      task._numRunning++;
    };

    for (var i = 0; i < this.activeTaskInstances.length; ++i) {
      _loop(i);
    }

    if (lastStarted) {
      this.set('lastStarted', lastStarted);
    }
    this.set('lastRunning', lastStarted);

    for (var i = 0; i < this.queuedTaskInstances.length; ++i) {
      var task = this.queuedTaskInstances[i].task;
      seen[Ember.guidFor(task)] = task;
      task._numQueued++;
    }

    flushTaskCounts(seen);

    var concurrency = this.activeTaskInstances.length;
    this.set('concurrency', concurrency);
    if (this.completionDefer && concurrency === 0) {
      this.completionDefer.resolve();
      this.completionDefer = null;
    }
  },

  completionDefer: null,
  getCompletionPromise: function getCompletionPromise() {
    var _this2 = this;

    return new Ember.RSVP.Promise(function (r) {
      Ember.run.schedule('actions', null, function () {
        var defer = Ember.RSVP.defer();
        if (!_this2._flushScheduled && _this2.activeTaskInstances.length === 0 && _this2.queuedTaskInstances.length === 0) {
          defer.resolve();
        } else {
          _this2.completionDefer = defer;
        }
        defer.promise.then(r);
      });
    });
  }
});

function flushTaskCounts(tasks) {
  for (var guid in tasks) {
    updateTaskChainCounts(tasks[guid]);
  }
}

function updateTaskChainCounts(_task) {
  var task = _task;
  var numRunning = task._numRunning;
  var numQueued = task._numQueued;
  while (task) {
    task.set('numRunning', numRunning);
    task.set('numQueued', numQueued);
    task._numRunning = task._numQueued = 0;
    task = task.get('group');
  }
}

export default Scheduler;