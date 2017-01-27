/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-sidenav-toggle';

var Component = Ember.Component;
var inject = Ember.inject;

/**
 * @class PaperSidenavToggle
 * @extends Ember.Component
 */
export default Component.extend({
  layout: layout,
  tagName: '',

  name: 'default',

  paperSidenav: inject.service(),

  toggle: function toggle() {
    this.get('paperSidenav').toggle(this.get('name'));
  }

});