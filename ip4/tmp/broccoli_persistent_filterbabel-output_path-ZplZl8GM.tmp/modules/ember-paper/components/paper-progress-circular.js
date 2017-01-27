/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-progress-circular';
import ColorMixin from 'ember-paper/mixins/color-mixin';

var Component = Ember.Component;
var computed = Ember.computed;
var isPresent = Ember.isPresent;
var inject = Ember.inject;
var htmlSafe = Ember.String.htmlSafe;

var DEFAULT_PROGRESS_SIZE = 100;
var DEFAULT_SCALING = 0.5;

var MODE_DETERMINATE = 'determinate';
var MODE_INDETERMINATE = 'indeterminate';

/**
 * @class PaperProgressCircular
 * @extends Ember.Component
 * @uses ColorMixin
 */
export default Component.extend(ColorMixin, {
  layout: layout,
  tagName: 'md-progress-circular',
  classNames: ['md-default-theme'],
  attributeBindings: ['value', 'mode:md-mode', 'circleStyle:style'],

  constants: inject.service(),

  mode: computed('value', function () {
    var value = this.get('value');
    return isPresent(value) ? MODE_DETERMINATE : MODE_INDETERMINATE;
  }),

  spinnerClass: computed('mode', function () {
    var mode = this.get('mode');
    return mode === MODE_DETERMINATE || mode === MODE_INDETERMINATE ? 'md-mode-' + mode : 'ng-hide';
  }),

  clampedValue: computed('value', function () {
    var value = this.get('value');
    return Math.max(0, Math.min(value || 0, 100));
  }),

  circleStyle: computed('diameterRatio', function () {
    var diameterRatio = this.get('diameterRatio');

    var width = 'width: ' + 100 * diameterRatio + 'px';
    var height = 'height: ' + 100 * diameterRatio + 'px';

    return htmlSafe([width, height].join(';'));
  }),

  scaleWrapperStyle: computed('diameterRatio', function () {
    var diameterRatio = this.get('diameterRatio');

    var transform = this.get('constants.CSS.TRANSFORM') + ': translate(-50%, -50%) scale(' + diameterRatio + ')';

    return htmlSafe(transform);
  }),

  diameterRatio: computed('diameter', function () {
    var diameter = this.get('diameter');
    if (!diameter) {
      return DEFAULT_SCALING;
    }

    var match = /([0-9]*)%/.exec(diameter);
    var value = Math.max(0, match && match[1] / 100 || parseFloat(diameter));

    return value > 1 ? value / DEFAULT_PROGRESS_SIZE : value;
  }),

  gapStyle: computed('mode', 'clampedValue', function () {
    if (this.get('mode') !== MODE_DETERMINATE) {
      return htmlSafe('');
    }

    var value = this.get('clampedValue');
    var borderBottomColor = value <= 50 ? 'border-bottom-color: transparent !important' : null;
    var transition = value <= 50 ? null : this.get('constants.CSS.TRANSITION') + ': borderBottomColor 0.1s linear';

    return htmlSafe([borderBottomColor, transition].filter(function (i) {
      return !!i;
    }).join(';'));
  }),

  leftStyle: computed('mode', 'clampedValue', function () {
    if (this.get('mode') !== MODE_DETERMINATE) {
      return htmlSafe('');
    }

    var value = this.get('clampedValue');
    var transition = value <= 50 ? this.get('constants.CSS.TRANSITION') + ': transform 0.1s linear' : '';
    var transform = this.get('constants.CSS.TRANSFORM') + ': rotate(' + (value <= 50 ? 135 : (value - 50) / 50 * 180 + 135) + 'deg)';

    return htmlSafe([transition, transform].filter(function (i) {
      return !!i;
    }).join(';'));
  }),

  rightStyle: computed('mode', 'clampedValue', function () {
    if (this.get('mode') !== MODE_DETERMINATE) {
      return htmlSafe('');
    }

    var value = this.get('clampedValue');
    var transition = value >= 50 ? this.get('constants.CSS.TRANSITION') + ': transform 0.1s linear' : '';
    var transform = this.get('constants.CSS.TRANSFORM') + ': rotate(' + (value >= 50 ? 45 : value / 50 * 180 - 135) + 'deg)';

    return htmlSafe([transition, transform].filter(function (i) {
      return !!i;
    }).join(';'));
  })

});