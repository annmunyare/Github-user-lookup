/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-card-title-text';

var Component = Ember.Component;

/**
 * @class PaperCardTitleText
 * @extends Ember.Component
 */
export default Component.extend({
  layout: layout,
  tagName: 'md-card-title-text'
});