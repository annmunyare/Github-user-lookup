define('ember-paper/validators/maxlength', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.maxlength = maxlength;

  /**
   * @module ember-paper
   */

  var isEmpty = _ember['default'].isEmpty;
  var isNone = _ember['default'].isNone;

  function maxlength(value, maxlength) {
    return isEmpty(maxlength) || isNone(value) || ('' + value).length <= parseInt(maxlength, 10);
  }

  exports['default'] = {
    param: 'maxlength',
    message: 'Must not exceed %@ characters.',
    validate: maxlength
  };
});