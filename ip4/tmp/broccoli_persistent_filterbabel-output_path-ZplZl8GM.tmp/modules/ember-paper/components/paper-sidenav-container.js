/**
 * @module ember-paper
 */
import Ember from 'ember';

var Component = Ember.Component;
var htmlSafe = Ember.String.htmlSafe;

/**
 * @class PaperSidenavContainer
 * @extends Ember.Component
 */
export default Component.extend({
  classNames: ['flex', 'layout-row'],
  attributeBindings: ['style'],
  style: htmlSafe('overflow: hidden')
});