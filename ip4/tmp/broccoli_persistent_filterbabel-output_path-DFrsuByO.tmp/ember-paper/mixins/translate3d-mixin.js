define('ember-paper/mixins/translate3d-mixin', ['exports', 'ember', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _ember, _emberCssTransitionsMixinsTransitionMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var $ = _ember['default'].$;
  var Mixin = _ember['default'].Mixin;
  var htmlSafe = _ember['default'].String.htmlSafe;
  var computed = _ember['default'].computed;
  var inject = _ember['default'].inject;
  var run = _ember['default'].run;

  /**
   * @class Translate3dMixin
   * @extends Ember.Mixin
   */
  exports['default'] = Mixin.create({
    constants: inject.service(),

    attributeBindings: ['translateStyle:style'],
    classNameBindings: ['transformIn:md-transition-in'],

    fromStyle: computed('defaultedOpenFrom', function () {
      return this.toTransformCss(this.calculateZoomToOrigin(this.element, this.get('defaultedOpenFrom')));
    }),

    centerStyle: computed(function () {
      return this.toTransformCss('');
    }),

    translateStyle: computed('fromStyle', 'centerStyle', 'transformStyleApply', function () {
      if (this.get('transformStyleApply') === 'from') {
        return htmlSafe(this.get('fromStyle'));
      } else if (this.get('transformStyleApply') === 'main') {
        return htmlSafe(this.get('centerStyle'));
      } else {
        return htmlSafe('');
      }
    }),

    onTranslateFromEnd: function onTranslateFromEnd() {},
    onTranslateToEnd: function onTranslateToEnd() {},

    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);

      run.schedule('afterRender', function () {
        // Set translate3d style to start at the `from` origin
        _this.set('transformStyleApply', 'from');
        // Wait while CSS takes affect
        // Set the `main` styles and run the transition-in styles
        (0, _emberCssTransitionsMixinsTransitionMixin.nextTick)().then(function () {
          if (_this.isDestroyed) {
            return;
          }
          run.later(function () {
            if (!_this.get('isDestroying') && !_this.get('isDestroyed')) {
              _this.onTranslateFromEnd();
            }
          }, (0, _emberCssTransitionsMixinsTransitionMixin.computeTimeout)(_this.element) || 0);
          if (!_this.get('isDestroying') && !_this.get('isDestroyed')) {
            _this.set('transformStyleApply', 'main');
            _this.set('transformIn', true);
          }
        });
      });
    },

    /**
     * Specific reversal of the request translate animation above...
     *
     * @protected
     */
    willDestroyElement: function willDestroyElement() {
      var _this2 = this;

      this._super.apply(this, arguments);

      var containerClone = this.$().parent().clone();
      var dialogClone = containerClone.find('md-dialog');
      $(this.get('defaultedParent')).parent().append(containerClone);

      var toStyle = this.toTransformCss(this.calculateZoomToOrigin(this.element, this.get('defaultedCloseTo')));

      (0, _emberCssTransitionsMixinsTransitionMixin.nextTick)().then(function () {
        dialogClone.removeClass('md-transition-in');
        dialogClone.addClass('md-transition-out');
        dialogClone.attr('style', toStyle);
        (0, _emberCssTransitionsMixinsTransitionMixin.nextTick)().then(function () {
          run.later(function () {
            containerClone.remove();
            _this2.onTranslateToEnd($(_this2.get('origin')));
          }, (0, _emberCssTransitionsMixinsTransitionMixin.computeTimeout)(dialogClone.get(0)) || 0);
        });
      });
    },

    /**
     * Calculate the zoom transform from dialog to origin.
     *
     * We use this to set the dialog position immediately;
     * then the md-transition-in actually translates back to
     * `translate3d(0,0,0) scale(1.0)`...
     *
     * NOTE: all values are rounded to the nearest integer
     *
     * @public
     */
    calculateZoomToOrigin: function calculateZoomToOrigin(element, originator) {
      var zoomStyle = undefined;

      if (originator) {
        originator = $(originator).get(0);
        var originBnds = this.copyRect(originator.getBoundingClientRect());
        var dialogRect = this.copyRect(element.getBoundingClientRect());
        var dialogCenterPt = this.centerPointFor(dialogRect);
        var originCenterPt = this.centerPointFor(originBnds);

        zoomStyle = {
          centerX: originCenterPt.x - dialogCenterPt.x,
          centerY: originCenterPt.y - dialogCenterPt.y,
          scaleX: Math.min(0.5, originBnds.width / dialogRect.width),
          scaleY: Math.min(0.5, originBnds.height / dialogRect.height)
        };
      } else {
        zoomStyle = { centerX: 0, centerY: 0, scaleX: 0.5, scaleY: 0.5 };
      }

      return 'translate3d(' + zoomStyle.centerX + 'px, ' + zoomStyle.centerY + 'px, 0 ) scale(' + zoomStyle.scaleX + ', ' + zoomStyle.scaleY + ')';
    },

    /**
     * Convert the translate CSS value to key/value pair(s).
     *
     * @public
     */
    toTransformCss: function toTransformCss(transform, addTransition) {
      var styles = '';
      this.get('constants').get('CSS').TRANSFORM.split(' ').forEach(function (key) {
        styles += key + ':' + transform + ';';
      });

      if (addTransition) {
        styles += 'transform: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important;';
      }

      return styles;
    },

    /**
     * Clone the Rect and calculate the height/width if needed
     *
     * @public
     */
    copyRect: function copyRect(source, destination) {
      if (!source) {
        return null;
      }

      destination = destination || {};

      'left top right bottom width height'.split(' ').forEach(function (key) {
        destination[key] = Math.round(source[key]);
      });

      destination.width = destination.width || destination.right - destination.left;
      destination.height = destination.height || destination.bottom - destination.top;

      return destination;
    },

    /**
     * Calculate ClientRect of element; return null if hidden or zero size
     *
     * @public
     */
    clientRect: function clientRect(element) {
      var bounds = $(element)[0].getBoundingClientRect();

      // If the event origin element has zero size, it has probably been hidden.
      return bounds && bounds.width > 0 && bounds.height > 0 ? this.copyRect(bounds) : null;
    },

    /**
     * Calculate 'rounded' center point of Rect
     *
     * @public
     */
    centerPointFor: function centerPointFor(targetRect) {
      return {
        x: Math.round(targetRect.left + targetRect.width / 2),
        y: Math.round(targetRect.top + targetRect.height / 2)
      };
    }

  });
});