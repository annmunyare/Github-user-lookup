/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-slider';
import FocusableMixin from 'ember-paper/mixins/focusable-mixin';
import ColorMixin from 'ember-paper/mixins/color-mixin';
var Component = Ember.Component;
var computed = Ember.computed;
var inject = Ember.inject;
var run = Ember.run;
var htmlSafe = Ember.String.htmlSafe;

/* global Hammer */

/**
 * @class PaperSlider
 * @extends Ember.Component
 * @uses FocusableMixin
 * @uses ColorMixin
 */
export default Component.extend(FocusableMixin, ColorMixin, {
  layout: layout,
  tagName: 'md-slider',

  attributeBindings: ['min', 'max', 'step', 'discrete:md-discrete', 'tabindex'],

  classNames: ['md-default-theme'],
  classNameBindings: ['isMinimum:md-min', 'active', 'dragging'],

  constants: inject.service(),

  min: 0,
  max: 100,
  step: 1,
  tabindex: 0,

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);

    this._setupSlider();
  },

  _setupSlider: function _setupSlider() {
    var thumbContainer = this.$('.md-thumb-container').get(0);
    var sliderHammer = new Hammer(thumbContainer);
    this._thumbContainerHammer = sliderHammer;

    // Enable dragging the slider
    sliderHammer.get('pan').set({ threshold: 1 });
    sliderHammer.on('panstart', run.bind(this, this._dragStart)).on('panmove', run.bind(this, this._drag)).on('panend', run.bind(this, this._dragEnd));
  },

  trackContainer: computed(function () {
    return this.$('.md-track-container');
  }),

  activeTrackStyle: computed('percent', function () {
    var percent = this.get('percent') || 0;
    return htmlSafe('width: ' + percent * 100 + '%');
  }),

  thumbContainerStyle: computed('percent', function () {
    var percent = this.get('percent') || 0;
    return htmlSafe('left: ' + percent * 100 + '%');
  }),

  isMinimum: computed('percent', 'min', function () {
    return this.get('percent') === this.get('min');
  }),

  percent: computed('value', 'min', 'max', function () {
    var min = parseInt(this.get('min'), 10);
    var max = parseInt(this.get('max'), 10);

    return (this.get('value') - min) / (max - min);
  }),

  positionToPercent: function positionToPercent(x) {
    return Math.max(0, Math.min(1, (x - this.get('sliderDimensions.left')) / this.get('sliderDimensions.width')));
  },

  percentToValue: function percentToValue(x) {
    var min = parseInt(this.get('min'), 10);
    var max = parseInt(this.get('max'), 10);
    return min + x * (max - min);
  },

  minMaxValidator: function minMaxValidator(value) {
    var min = parseInt(this.get('min'), 10);
    var max = parseInt(this.get('max'), 10);
    return Math.max(min, Math.min(max, value));
  },

  stepValidator: function stepValidator(value) {
    var step = parseInt(this.get('step'), 10);
    return Math.round(value / step) * step;
  },

  active: false,
  dragging: false,
  enabled: computed.not('disabled'),

  sliderDimensions: computed(function () {
    return this.get('trackContainer')[0].getBoundingClientRect();
  }),

  setValueFromEvent: function setValueFromEvent(event) {
    // let exactVal = this.percentToValue(this.positionToPercent(event.deltaX || event.clientX));
    var exactVal = this.percentToValue(this.positionToPercent(event.clientX || event.srcEvent.clientX));
    var closestVal = this.minMaxValidator(this.stepValidator(exactVal));

    this.set('value', closestVal);
  },

  _dragStart: function _dragStart(event) {
    if (this.get('disabled')) {
      return;
    }

    this.set('active', true);
    this.set('dragging', true);
    this.$().focus();

    this.get('sliderDimensions');

    this.setValueFromEvent(event);
  },

  _dragEnd: function _dragEnd() {
    if (this.get('disabled')) {
      return;
    }

    this.beginPropertyChanges();
    this.set('active', false);
    this.set('dragging', false);
    this.endPropertyChanges();
  },

  _drag: function _drag(event) {
    if (this.get('disabled') || !this.get('dragging')) {
      return;
    }

    this.setValueFromEvent(event);
  },

  keyDown: function keyDown(event) {
    if (this.get('disabled')) {
      return;
    }

    var changeAmount = undefined,
        newValue = undefined;

    if (event.keyCode === this.get('constants.KEYCODE.LEFT_ARROW')) {
      changeAmount = parseInt(this.get('step')) * -1;
    } else if (event.keyCode === this.get('constants.KEYCODE.RIGHT_ARROW')) {
      changeAmount = parseInt(this.get('step'));
    }

    if (changeAmount) {
      if (event.metaKey || event.ctrlKey || event.altKey) {
        changeAmount *= 4;
      }

      newValue = this.get('value') + changeAmount;

      this.set('value', this.minMaxValidator(newValue));

      event.preventDefault();
      event.stopPropagation();
    }
  }

});