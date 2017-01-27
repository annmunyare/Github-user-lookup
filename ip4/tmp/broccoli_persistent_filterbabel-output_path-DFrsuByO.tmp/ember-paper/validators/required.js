define('ember-paper/validators/required', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.required = required;

  /**
   * @module ember-paper
   */

  var isEmpty = _ember['default'].isEmpty;

  function required(value, required) {
    return required === true && !isEmpty(value) || required !== true;
  }

  exports['default'] = {
    param: 'required',
    message: 'This is required.',
    // required can be a boolean or 'style' for just required asterisk styling.
    validate: required
  };
});