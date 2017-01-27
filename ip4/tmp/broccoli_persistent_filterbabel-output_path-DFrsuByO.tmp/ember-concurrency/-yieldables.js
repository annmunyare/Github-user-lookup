define('ember-concurrency/-yieldables', ['exports', 'ember', 'ember-concurrency/-task-instance'], function (exports, _ember, _emberConcurrencyTaskInstance) {
  'use strict';

  var RSVP = _ember['default'].RSVP;

  /**
   * A cancelation-aware variant of [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).
   * The normal version of a `Promise.all` just returns a regular, uncancelable
   * Promise. The `ember-concurrency` variant of `all()` has the following
   * additional behavior:
   *
   * - if the task that `yield`ed `all()` is canceled, any of the
   *   {@linkcode TaskInstance}s passed in to `all` will be canceled
   * - if any of the {@linkcode TaskInstance}s (or regular promises) passed in reject (or
   *   are canceled), all of the other unfinished `TaskInstance`s will
   *   be automatically canceled.
   *
   * [Check out the "Awaiting Multiple Child Tasks example"](/#/docs/examples/joining-tasks)
   *
   * @param {function} generatorFunction the generator function backing the task.
   * @returns {TaskProperty}
   */
  var all = taskAwareVariantOf(RSVP.Promise, 'all');

  exports.all = all;

  /**
   * A cancelation-aware variant of [RSVP.allSettled](http://emberjs.com/api/classes/RSVP.html#method_allSettled).
   * The normal version of a `RSVP.allSettled` just returns a regular, uncancelable
   * Promise. The `ember-concurrency` variant of `allSettled()` has the following
   * additional behavior:
   *
   * - if the task that `yield`ed `allSettled()` is canceled, any of the
   *   {@linkcode TaskInstance}s passed in to `allSettled` will be canceled
   *
   * @param {function} generatorFunction the generator function backing the task.
   * @returns {TaskProperty}
   */
  var allSettled = taskAwareVariantOf(RSVP, 'allSettled');

  exports.allSettled = allSettled;

  /**
   * A cancelation-aware variant of [Promise.race](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race).
   * The normal version of a `Promise.race` just returns a regular, uncancelable
   * Promise. The `ember-concurrency` variant of `race()` has the following
   * additional behavior:
   *
   * - if the task that `yield`ed `race()` is canceled, any of the
   *   {@linkcode TaskInstance}s passed in to `race` will be canceled
   * - once any of the tasks/promises passed in complete (either success, failure,
   *   or cancelation), any of the {@linkcode TaskInstance}s passed in will be canceled
   *
   * [Check out the "Awaiting Multiple Child Tasks example"](/#/docs/examples/joining-tasks)
   *
   * @param {function} generatorFunction the generator function backing the task.
   * @returns {TaskProperty}
   */
  var race = taskAwareVariantOf(RSVP.Promise, 'race');

  exports.race = race;

  function taskAwareVariantOf(obj, method) {
    return function (items) {
      var defer = _ember['default'].RSVP.defer();
      obj[method](items).then(defer.resolve, defer.reject);

      var hasCancelled = false;
      var cancelAll = function cancelAll() {
        if (hasCancelled) {
          return;
        }
        hasCancelled = true;
        items.forEach(function (it) {
          if (it instanceof _emberConcurrencyTaskInstance['default']) {
            it.cancel();
          }
        });
      };

      var promise = defer.promise['finally'](cancelAll);
      promise.__ec_cancel__ = cancelAll;
      return promise;
    };
  }
});