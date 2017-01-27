var _slice = Array.prototype.slice;
/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-sidenav';

var Component = Ember.Component;
var computed = Ember.computed;

/**
 * @class
 * @extends Ember.Component
 */
export default Component.extend({
  layout: layout,
  tagName: '',

  name: 'default',
  position: 'left',
  lockedOpen: 'gt-sm',
  open: false,
  closed: computed.not('open'),
  closeOnClick: true,

  actions: {
    onToggle: function onToggle() {
      this.sendAction.apply(this, ['onToggle'].concat(_slice.call(arguments)));
    },
    onBackdropTap: function onBackdropTap() {
      this.sendAction('onToggle', false);
    }
  }
});