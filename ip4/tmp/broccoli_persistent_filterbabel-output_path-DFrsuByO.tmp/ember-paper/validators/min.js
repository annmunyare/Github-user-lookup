define('ember-paper/validators/min', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.min = min;

  /**
   * @module ember-paper
   */

  var isEmpty = _ember['default'].isEmpty;

  function min(value, min) {
    return isEmpty(min) || isEmpty(value) || parseFloat(value) >= parseFloat(min);
  }

  exports['default'] = {
    param: 'min',
    message: 'Must be at least %@.',
    validate: min
  };
});