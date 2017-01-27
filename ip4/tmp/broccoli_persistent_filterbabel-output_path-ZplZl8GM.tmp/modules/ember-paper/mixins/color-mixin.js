/**
 * @module ember-paper
 */
import Ember from 'ember';

var Mixin = Ember.Mixin;

/**
 * @class ColorMixin
 * @extends Ember.Mixin;
 */
export default Mixin.create({
  classNameBindings: ['warn:md-warn', 'accent:md-accent', 'primary:md-primary']
});