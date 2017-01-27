function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var saturateActiveQueue = function saturateActiveQueue(scheduler) {
  while (scheduler.activeTaskInstances.length < scheduler.maxConcurrency) {
    var taskInstance = scheduler.queuedTaskInstances.shift();
    if (!taskInstance) {
      break;
    }
    scheduler.activeTaskInstances.push(taskInstance);
  }
};

function numPerformSlots(scheduler) {
  return scheduler.maxConcurrency - scheduler.queuedTaskInstances.length - scheduler.activeTaskInstances.length;
}

var enqueueTasksPolicy = {
  requiresUnboundedConcurrency: true,
  schedule: function schedule(scheduler) {
    // [a,b,_] [c,d,e,f] becomes
    // [a,b,c] [d,e,f]
    saturateActiveQueue(scheduler);
  },
  getNextPerformStatus: function getNextPerformStatus(scheduler) {
    return numPerformSlots(scheduler) > 0 ? 'succeed' : 'enqueue';
  }
};

export { enqueueTasksPolicy };
var dropQueuedTasksPolicy = {
  schedule: function schedule(scheduler) {
    // [a,b,_] [c,d,e,f] becomes
    // [a,b,c] []
    saturateActiveQueue(scheduler);
    scheduler.spliceTaskInstances(scheduler.queuedTaskInstances, 0, scheduler.queuedTaskInstances.length);
  },
  getNextPerformStatus: function getNextPerformStatus(scheduler) {
    return numPerformSlots(scheduler) > 0 ? 'succeed' : 'drop';
  }
};

export { dropQueuedTasksPolicy };
var cancelOngoingTasksPolicy = {
  schedule: function schedule(scheduler) {
    // [a,b,_] [c,d,e,f] becomes
    // [d,e,f] []
    var activeTaskInstances = scheduler.activeTaskInstances;
    var queuedTaskInstances = scheduler.queuedTaskInstances;
    activeTaskInstances.push.apply(activeTaskInstances, _toConsumableArray(queuedTaskInstances));
    queuedTaskInstances.length = 0;

    var numToShift = Math.max(0, activeTaskInstances.length - scheduler.maxConcurrency);
    scheduler.spliceTaskInstances(activeTaskInstances, 0, numToShift);
  },
  getNextPerformStatus: function getNextPerformStatus(scheduler) {
    return numPerformSlots(scheduler) > 0 ? 'succeed' : 'cancel_previous';
  }
};

export { cancelOngoingTasksPolicy };
var dropButKeepLatestPolicy = {
  schedule: function schedule(scheduler) {
    // [a,b,_] [c,d,e,f] becomes
    // [d,e,f] []
    saturateActiveQueue(scheduler);
    scheduler.spliceTaskInstances(scheduler.queuedTaskInstances, 0, scheduler.queuedTaskInstances.length - 1);
  }
};
export { dropButKeepLatestPolicy };