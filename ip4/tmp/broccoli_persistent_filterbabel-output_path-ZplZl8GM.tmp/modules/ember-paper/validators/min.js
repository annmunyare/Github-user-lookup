export { min };
/**
 * @module ember-paper
 */
import Ember from 'ember';

var isEmpty = Ember.isEmpty;

function min(value, min) {
  return isEmpty(min) || isEmpty(value) || parseFloat(value) >= parseFloat(min);
}

export default {
  param: 'min',
  message: 'Must be at least %@.',
  validate: min
};