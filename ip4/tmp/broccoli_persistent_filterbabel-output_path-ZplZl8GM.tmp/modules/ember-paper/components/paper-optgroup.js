/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-optgroup';

var Component = Ember.Component;

/**
 * @class PaperOptgroup
 * @extends Ember.Component
 */
export default Component.extend({
  layout: layout,
  tagName: 'md-optgroup',
  attributeBindings: ['label']
});