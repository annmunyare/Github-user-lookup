/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-card-title';

var Component = Ember.Component;

/**
 * @class PaperCardTitle
 * @extends Ember.Component
 */
export default Component.extend({
  layout: layout,
  tagName: 'md-card-title'
});