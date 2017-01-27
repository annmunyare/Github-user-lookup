export { max };
/**
 * @module ember-paper
 */
import Ember from 'ember';

var isEmpty = Ember.isEmpty;

function max(value, max) {
  return isEmpty(max) || isEmpty(value) || parseFloat(value) <= parseFloat(max);
}

export default {
  param: 'max',
  message: 'Must be less than %@.',
  validate: max
};