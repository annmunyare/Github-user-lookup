define('ember-power-select/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-helper'], function (exports, _emberHelper) {
  'use strict';

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  })();

  exports.emberPowerSelectTrueStringIfPresent = emberPowerSelectTrueStringIfPresent;

  function emberPowerSelectTrueStringIfPresent(_ref /* , hash*/) {
    var _ref2 = _slicedToArray(_ref, 1);

    var bool = _ref2[0];

    return bool ? 'true' : false;
  }

  exports['default'] = (0, _emberHelper.helper)(emberPowerSelectTrueStringIfPresent);
});