define('ember-paper/components/paper-progress-linear', ['exports', 'ember', 'ember-paper/templates/components/paper-progress-linear', 'ember-paper/mixins/color-mixin'], function (exports, _ember, _emberPaperTemplatesComponentsPaperProgressLinear, _emberPaperMixinsColorMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var inject = _ember['default'].inject;
  var computed = _ember['default'].computed;
  var Component = _ember['default'].Component;
  var isPresent = _ember['default'].isPresent;
  var htmlSafe = _ember['default'].String.htmlSafe;

  function makeTransform(value) {
    var scale = value / 100;
    var translateX = (value - 100) / 2;
    return 'translateX(' + translateX.toString() + '%) scale(' + scale.toString() + ', 1)';
  }

  var MODE_DETERMINATE = 'determinate';
  var MODE_INDETERMINATE = 'indeterminate';
  var MODE_BUFFER = 'buffer';
  var MODE_QUERY = 'query';

  /**
   * @class PaperProgressLinear
   * @extends Ember.Component
   * @uses ColorMixin
   */
  exports['default'] = Component.extend(_emberPaperMixinsColorMixin['default'], {
    layout: _emberPaperTemplatesComponentsPaperProgressLinear['default'],
    tagName: 'md-progress-linear',

    attributeBindings: ['mode:md-mode', 'bufferValue:md-buffer-value'],
    classNames: ['md-default-theme'],

    constants: inject.service(),

    init: function init() {
      this._super.apply(this, arguments);
      this.setupTransforms();
    },

    mode: computed('value', function () {
      var value = this.get('value');
      var bufferValue = this.get('bufferValue');

      if (isPresent(value)) {
        if (isPresent(bufferValue)) {
          return MODE_BUFFER;
        } else {
          return MODE_DETERMINATE;
        }
      } else {
        return MODE_INDETERMINATE;
      }
    }),

    queryModeClass: computed('mode', function () {
      var mode = this.get('mode');

      switch (mode) {
        case MODE_QUERY:
        case MODE_BUFFER:
        case MODE_DETERMINATE:
        case MODE_INDETERMINATE:
          return 'md-mode-' + mode;
        default:
          return '';
      }
    }),

    transforms: new Array(101),

    setupTransforms: function setupTransforms() {
      for (var i = 0; i < 101; i++) {
        this.transforms[i] = makeTransform(i);
      }
    },

    bar1Style: computed('clampedBufferValue', function () {
      return htmlSafe(this.get('constants.CSS.TRANSFORM') + ': ' + this.transforms[this.get('clampedBufferValue')]);
    }),

    bar2Style: computed('clampedValue', 'mode', function () {
      if (this.get('mode') === MODE_QUERY) {
        return htmlSafe('');
      }

      return htmlSafe(this.get('constants.CSS.TRANSFORM') + ': ' + this.transforms[this.get('clampedValue')]);
    }),

    clampedValue: computed('value', function () {
      var value = this.get('value');
      return Math.max(0, Math.min(value || 0, 100));
    }),

    clampedBufferValue: computed('bufferValue', function () {
      var value = this.get('bufferValue');
      return Math.max(0, Math.min(value || 0, 100));
    })

  });
});