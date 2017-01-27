/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-radio-group';
import FocusableMixin from 'ember-paper/mixins/focusable-mixin';
import { ParentMixin } from 'ember-composability-tools';

var Component = Ember.Component;
var computed = Ember.computed;
var inject = Ember.inject;
var assert = Ember.assert;

/**
 * @class PaperRadioGroup
 * @extends Ember.Component
 * @uses FocusableMixin
 * @uses ParentMixin
 */
export default Component.extend(FocusableMixin, ParentMixin, {
  layout: layout,
  tagName: 'md-radio-group',
  tabindex: 0,

  /* FocusableMixin Overrides */
  focusOnlyOnKey: true,

  constants: inject.service(),

  // Lifecycle hooks
  init: function init() {
    this._super.apply(this, arguments);
    assert('{{paper-radio-group}} requires an `onChange` action or null for no action', this.get('onChange') !== undefined);
  },

  enabledChildRadios: computed.filterBy('childComponents', 'disabled', false),
  childValues: computed.mapBy('enabledChildRadios', 'value'),

  keyDown: function keyDown(ev) {

    switch (ev.which) {
      case this.get('constants.KEYCODE.LEFT_ARROW'):
      case this.get('constants.KEYCODE.UP_ARROW'):
        ev.preventDefault();
        this.select(-1);
        break;
      case this.get('constants.KEYCODE.RIGHT_ARROW'):
      case this.get('constants.KEYCODE.DOWN_ARROW'):
        ev.preventDefault();
        this.select(1);
        break;
    }
  },

  select: function select(increment) {
    var groupValue = this.get('groupValue');
    var index = 0;

    if (groupValue) {
      index = this.get('childValues').indexOf(groupValue);
      index += increment;
      var _length = this.get('childValues.length');
      index = (index % _length + _length) % _length;
    }

    var childRadio = this.get('enabledChildRadios').objectAt(index);
    childRadio.set('focused', true);
    this.sendAction('onChange', childRadio.get('value'));
  },

  actions: {
    onChange: function onChange(value) {
      this.sendAction('onChange', value);
    }
  }
});