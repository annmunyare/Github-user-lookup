/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-card';

var Component = Ember.Component;

/**
 * @class PaperCard
 * @extends Ember.Component
 */
export default Component.extend({
  layout: layout,
  tagName: 'md-card'
});