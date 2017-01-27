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
export { restartable };
var drop = decorators.drop;
export { drop };
var enqueue = decorators.enqueue;
export { enqueue };
var maxConcurrency = decorators.maxConcurrency;
export { maxConcurrency };
var cancelOn = decorators.cancelOn;
export { cancelOn };
var performOn = decorators.performOn;
export { performOn };