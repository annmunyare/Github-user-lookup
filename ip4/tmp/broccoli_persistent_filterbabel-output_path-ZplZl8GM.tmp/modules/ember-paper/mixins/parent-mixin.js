/**
 * @module ember-paper
 */
import Ember from 'ember';

var Mixin = Ember.Mixin;
var computed = Ember.computed;
var A = Ember.A;

/**
 * @class ParentMixin
 * @extends Ember.Mixin
 */
export default Mixin.create({
  childComponents: computed(function () {
    return A();
  }),

  register: function register(child) {
    this.get('childComponents').pushObject(child);
  },

  unregister: function unregister(child) {
    this.get('childComponents').removeObject(child);
  }
});