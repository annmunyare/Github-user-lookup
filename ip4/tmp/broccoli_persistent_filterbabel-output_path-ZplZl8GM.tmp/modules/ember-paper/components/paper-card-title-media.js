/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-card-title-media';

var Component = Ember.Component;

/**
 * @class PaperCardTitleMedia
 * @extends Ember.Component
 */
export default Component.extend({
  layout: layout,
  tagName: 'md-card-title-media',
  size: 'md'
});