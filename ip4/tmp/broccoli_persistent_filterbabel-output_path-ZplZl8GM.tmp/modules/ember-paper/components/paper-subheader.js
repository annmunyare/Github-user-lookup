/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-subheader';

var Component = Ember.Component;

/**
 * @class PaperSubheader
 * @extends Ember.Component
 */
export default Component.extend({
  layout: layout,
  tagName: 'h2',
  classNames: ['md-subheader']
});