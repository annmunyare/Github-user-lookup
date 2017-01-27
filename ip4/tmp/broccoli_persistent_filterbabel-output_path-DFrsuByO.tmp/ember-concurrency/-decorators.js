define('ember-concurrency/-decorators', ['exports'], function (exports) {
  'use strict';

  var modifierNames = ['restartable', 'drop', 'enqueue', 'maxConcurrency', 'cancelOn'];
  var decorators = {};

  function makeDecorator(modifierName, methodName) {
    var fn = function fn() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return function (taskProperty) {
        return taskProperty[methodName].apply(taskProperty, args);
      };
    };
    decorators[modifierName] = fn;
  }

  for (var i = 0; i < modifierNames.length; ++i) {
    var modifierName = modifierNames[i];
    makeDecorator(modifierName, modifierName);
  }

  makeDecorator('performOn', 'on');

  var restartable = decorators.restartable;
  exports.restartable = restartable;

  var drop = decorators.drop;
  exports.drop = drop;

  var enqueue = decorators.enqueue;
  exports.enqueue = enqueue;

  var maxConcurrency = decorators.maxConcurrency;
  exports.maxConcurrency = maxConcurrency;

  var cancelOn = decorators.cancelOn;
  exports.cancelOn = cancelOn;

  var performOn = decorators.performOn;
  exports.performOn = performOn;
});