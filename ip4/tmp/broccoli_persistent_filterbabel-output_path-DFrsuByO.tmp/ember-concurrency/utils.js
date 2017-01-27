define('ember-concurrency/utils', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.isGeneratorIterator = isGeneratorIterator;
  exports.Arguments = Arguments;
  exports.createObservable = createObservable;
  exports._cleanupOnDestroy = _cleanupOnDestroy;

  function isGeneratorIterator(iter) {
    return iter && typeof iter.next === 'function' && typeof iter['return'] === 'function' && typeof iter['throw'] === 'function';
  }

  function Arguments(args, defer) {
    this.args = args;
    this.defer = defer;
  }

  Arguments.prototype.resolve = function (value) {
    if (this.defer) {
      this.defer.resolve(value);
    }
  };

  var objectAssign = Object.assign || function objectAssign(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };

  exports.objectAssign = objectAssign;

  function createObservable(fn) {
    return {
      subscribe: function subscribe(onNext, onError, onCompleted) {
        var isDisposed = false;
        var isComplete = false;
        var publish = function publish(v) {
          if (isDisposed || isComplete) {
            return;
          }
          joinAndSchedule(null, onNext, v);
        };
        publish.error = function (e) {
          if (isDisposed || isComplete) {
            return;
          }
          joinAndSchedule(function () {
            if (onError) {
              onError(e);
            }
            if (onCompleted) {
              onCompleted();
            }
          });
        };
        publish.complete = function () {
          if (isDisposed || isComplete) {
            return;
          }
          isComplete = true;
          joinAndSchedule(function () {
            if (onCompleted) {
              onCompleted();
            }
          });
        };

        // TODO: publish.complete?

        var maybeDisposer = fn(publish);
        var disposer = typeof maybeDisposer === 'function' ? maybeDisposer : function () {};

        return {
          dispose: function dispose() {
            if (isDisposed) {
              return;
            }
            isDisposed = true;
            disposer();
          }
        };
      }
    };
  }

  function joinAndSchedule() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _ember['default'].run.join(function () {
      var _Ember$run;

      (_Ember$run = _ember['default'].run).schedule.apply(_Ember$run, ['actions'].concat(args));
    });
  }

  function _cleanupOnDestroy(owner, object, cleanupMethodName) {
    // TODO: find a non-mutate-y, hacky way of doing this.

    if (!owner.willDestroy) {
      // we're running in non Ember object (possibly in a test mock)
      return;
    }

    if (!owner.willDestroy.__ember_processes_destroyers__) {
      (function () {
        var oldWillDestroy = owner.willDestroy;
        var disposers = [];

        owner.willDestroy = function () {
          for (var i = 0, l = disposers.length; i < l; i++) {
            disposers[i]();
          }
          oldWillDestroy.apply(owner, arguments);
        };
        owner.willDestroy.__ember_processes_destroyers__ = disposers;
      })();
    }

    owner.willDestroy.__ember_processes_destroyers__.push(function () {
      object[cleanupMethodName]();
    });
  }

  var INVOKE = "__invoke_symbol__";

  exports.INVOKE = INVOKE;

  var locations = ['ember-glimmer/helpers/action', 'ember-routing-htmlbars/keywords/closure-action', 'ember-routing/keywords/closure-action'];

  for (var i = 0; i < locations.length; i++) {
    if (locations[i] in _ember['default'].__loader.registry) {
      exports.INVOKE = INVOKE = _ember['default'].__loader.require(locations[i])['INVOKE'];
      break;
    }
  }

  // TODO: Symbol polyfill?
  var yieldableSymbol = "__ec_yieldable__";

  exports.yieldableSymbol = yieldableSymbol;

  var _ComputedProperty = _ember['default'].ComputedProperty;
  exports._ComputedProperty = _ComputedProperty;
});