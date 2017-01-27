/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-card-header';

var Component = Ember.Component;

/**
 * @class PaperCardHeader
 * @extends Ember.Component
 */
export default Component.extend({
  layout: layout,
  tagName: 'md-card-header'
});