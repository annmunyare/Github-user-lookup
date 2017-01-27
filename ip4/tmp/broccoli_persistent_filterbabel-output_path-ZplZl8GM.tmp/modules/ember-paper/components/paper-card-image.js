/**
 * @module ember-paper
 */
import Ember from 'ember';

var Component = Ember.Component;

/**
 * @class PaperCardImage
 * @extends Ember.Component
 */
export default Component.extend({
  tagName: 'img',
  classNames: ['md-card-image'],
  attributeBindings: ['src', 'title', 'alt']
});