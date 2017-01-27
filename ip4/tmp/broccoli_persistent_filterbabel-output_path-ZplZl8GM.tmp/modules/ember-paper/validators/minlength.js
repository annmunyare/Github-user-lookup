export { minlength };
/**
 * @module ember-paper
 */
import Ember from 'ember';

var isEmpty = Ember.isEmpty;
var isNone = Ember.isNone;

function minlength(value, minlength) {
  return isEmpty(minlength) || isNone(value) || ('' + value).length >= parseInt(minlength, 10);
}

export default {
  param: 'minlength',
  message: 'Must have at least %@ characters.',
  validate: minlength
};