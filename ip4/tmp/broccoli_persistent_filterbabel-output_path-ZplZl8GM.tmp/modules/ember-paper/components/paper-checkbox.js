/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-checkbox';
import FocusableMixin from 'ember-paper/mixins/focusable-mixin';
import RippleMixin from 'ember-paper/mixins/ripple-mixin';
import ColorMixin from 'ember-paper/mixins/color-mixin';
import ProxiableMixin from 'ember-paper/mixins/proxiable-mixin';

var Component = Ember.Component;
var inject = Ember.inject;
var assert = Ember.assert;

/**
 * @class PaperCheckbox
 * @extends Ember.Component
 * @uses FocusableMixin
 * @uses RippleMixin
 * @uses ColorMixin
 * @uses ProxiableMixin
 */
export default Component.extend(FocusableMixin, RippleMixin, ColorMixin, ProxiableMixin, {
  layout: layout,
  tagName: 'md-checkbox',
  classNames: ['md-checkbox', 'md-default-theme'],
  classNameBindings: ['value:md-checked'],

  /* RippleMixin Overrides */
  rippleContainerSelector: '.md-container',
  center: true,
  dimBackground: false,
  fitRipple: true,

  /* FocusableMixin Overrides */
  focusOnlyOnKey: true,

  constants: inject.service(),

  value: false,

  init: function init() {
    this._super.apply(this, arguments);
    assert('{{paper-checkbox}} requires an `onChange` action or null for no action.', this.get('onChange') !== undefined);
  },

  click: function click() {
    if (!this.get('disabled')) {
      this.sendAction('onChange', !this.get('value'));
    }
    // Prevent bubbling, if specified. If undefined, the event will bubble.
    return this.get('bubbles');
  },

  keyPress: function keyPress(ev) {
    if (ev.which === this.get('constants.KEYCODE.SPACE') || ev.which === this.get('constants.KEYCODE.ENTER')) {
      ev.preventDefault();
      this.click();
    }
  },

  processProxy: function processProxy() {
    this.sendAction('onChange', !this.get('value'));
  }
});