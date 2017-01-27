/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-grid-tile-footer';

var Component = Ember.Component;

/**
 * @class PaperGridTileFooter
 * @extends Ember.Component
 */
export default Component.extend({
  layout: layout,
  tagName: 'md-grid-tile-footer'
});