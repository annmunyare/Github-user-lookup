/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-card-media';

var Component = Ember.Component;

/**
 * @class PaperCardMedia
 * @extends Ember.Component
 */
export default Component.extend({
  layout: layout,
  tagName: '',
  size: 'md'
});