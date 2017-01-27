define('ember-paper/mixins/ripple-mixin', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var inject = _ember['default'].inject;
  var computed = _ember['default'].computed;
  var Mixin = _ember['default'].Mixin;
  var run = _ember['default'].run;
  var $ = _ember['default'].$;

  /* global window */

  var DURATION = 400;

  /**
   * @class RippleMixin
   * @extends Ember.Mixin
   */
  exports['default'] = Mixin.create({
    util: inject.service(),
    rippleContainerSelector: '.md-container',

    center: false,
    dimBackground: false,
    fitRipple: false,
    colorElement: false,
    noink: false,

    rippleInk: computed('noink', 'rippleInkColor', function () {
      if (this.get('noink')) {
        return false;
      }
      if (this.get('rippleInkColor')) {
        return this.get('rippleInkColor');
      }
      return '';
    }),

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this.rippleElement = this.$(this.get('rippleContainerSelector'));
      this.mousedown = false;
      this.ripples = [];
      this.timeout = null; // Stores a reference to the most-recent ripple timeout
      this.lastRipple = null;

      this._container = this.createContainer();

      this.rippleElement.addClass('md-ink-ripple');
      this.bindEvents();
    },

    autoCleanup: function autoCleanup(self, cleanupFn) {
      if (self.mousedown || self.lastRipple) {
        self.mousedown = false;
        self.get('util').nextTick(cleanupFn.bind(self), false);
      }
    },

    color: function color(value) {
      var self = this;

      // If assigning a color value, apply it to background and the ripple color
      if (typeof value !== 'undefined') {
        self._color = self._parseColor(value);
      }

      // If color lookup, use assigned, defined, or inherited
      return self._color || self._parseColor(self.get('rippleInk')) || self._parseColor(getElementColor());

      /*
       * Finds the color element and returns its text color for use as default ripple color
       * @returns {string}
       */
      function getElementColor() {
        var items = self.get('colorElement') ? self.get('colorElement') : [];
        var elem = items.length ? items[0] : self.rippleElement[0];

        return elem ? window.getComputedStyle(elem).color : 'rgb(0,0,0)';
      }
    },

    calculateColor: function calculateColor() {
      return this.color();
    },

    _parseColor: function _parseColor(color, multiplier) {
      multiplier = multiplier || 1;

      if (!color) {
        return;
      }
      if (color.indexOf('rgba') === 0) {
        return color.replace(/\d?\.?\d*\s*\)\s*$/, (0.1 * multiplier).toString() + ')');
      }
      if (color.indexOf('rgb') === 0) {
        return rgbToRGBA(color);
      }
      if (color.indexOf('#') === 0) {
        return hexToRGBA(color);
      }

      /*
       * Converts hex value to RGBA string
       * @param color {string}
       * @returns {string}
       */
      function hexToRGBA(color) {
        var hex = color[0] === '#' ? color.substr(1) : color;
        var dig = hex.length / 3;
        var red = hex.substr(0, dig);
        var green = hex.substr(dig, dig);
        var blue = hex.substr(dig * 2);
        if (dig === 1) {
          red += red;
          green += green;
          blue += blue;
        }
        return 'rgba(' + parseInt(red, 16) + ', ' + parseInt(green, 16) + ', ' + parseInt(blue, 16) + ', 0.1)';
      }

      /*
       * Converts an RGB color to RGBA
       * @param color {string}
       * @returns {string}
       */
      function rgbToRGBA(color) {
        return color.replace(')', ', 0.1)').replace('(', 'a(');
      }
    },
    bindEvents: function bindEvents() {
      this.rippleElement.on('mousedown', run.bind(this, this.handleMousedown));
      this.rippleElement.on('mouseup touchend', run.bind(this, this.handleMouseup));
      this.rippleElement.on('mouseleave', run.bind(this, this.handleMouseup));
      this.rippleElement.on('touchmove', run.bind(this, this.handleTouchmove));
    },
    handleMousedown: function handleMousedown(event) {
      if (this.mousedown) {
        return;
      }

      // When jQuery is loaded, we have to get the original event
      if (event.hasOwnProperty('originalEvent')) {
        event = event.originalEvent;
      }
      this.mousedown = true;
      if (this.get('center')) {
        this.createRipple(this._container.prop('clientWidth') / 2, this._container.prop('clientWidth') / 2);
      } else {

        // We need to calculate the relative coordinates if the target is a sublayer of the ripple element
        if (event.srcElement !== this.rippleElement[0]) {
          var layerRect = this.rippleElement[0].getBoundingClientRect();
          var layerX = event.clientX - layerRect.left;
          var layerY = event.clientY - layerRect.top;

          this.createRipple(layerX, layerY);
        } else {
          this.createRipple(event.offsetX, event.offsetY);
        }
      }
    },
    handleMouseup: function handleMouseup() {
      this.autoCleanup(this, this.clearRipples);
    },
    handleTouchmove: function handleTouchmove() {
      this.autoCleanup(this, this.deleteRipples);
    },
    deleteRipples: function deleteRipples() {
      for (var i = 0; i < this.ripples.length; i++) {
        this.ripples[i].remove();
      }
    },
    clearRipples: function clearRipples() {
      for (var i = 0; i < this.ripples.length; i++) {
        this.fadeInComplete(this.ripples[i]);
      }
    },
    createContainer: function createContainer() {
      var container = $('<div class="md-ripple-container"></div>');
      this.rippleElement.append(container);
      return container;
    },
    clearTimeout: function clearTimeout() {
      if (this.timeout) {
        run.cancel(this.timeout);
        this.timeout = null;
      }
    },
    isRippleAllowed: function isRippleAllowed() {
      var element = this.rippleElement.get(0);
      do {
        if (!element.tagName || element.tagName === 'BODY') {
          break;
        }

        if (element && $.isFunction(element.hasAttribute)) {
          if (element.hasAttribute('disabled')) {
            return false;
          }
          if (this.get('rippleInk') === false) {
            return false;
          }
        }
      } while (element = element.parentNode);

      return true;
    },
    createRipple: function createRipple(left, top) {
      if (!this.isRippleAllowed()) {
        return;
      }

      var ctrl = this;
      var ripple = $('<div class="md-ripple"></div>');
      var width = this.rippleElement.prop('clientWidth');
      var height = this.rippleElement.prop('clientHeight');
      var x = Math.max(Math.abs(width - left), left) * 2;
      var y = Math.max(Math.abs(height - top), top) * 2;
      var size = getSize(this.get('fitRipple'), x, y);
      var color = this.calculateColor();

      ripple.css({
        left: left + 'px',
        top: top + 'px',
        background: 'black',
        width: size + 'px',
        height: size + 'px',
        backgroundColor: rgbaToRGB(color),
        borderColor: rgbaToRGB(color)
      });
      this.lastRipple = ripple;

      // we only want one timeout to be running at a time
      this.clearTimeout();
      this.timeout = run.later(this, function () {
        ctrl.clearTimeout();
        if (!ctrl.mousedown) {
          ctrl.fadeInComplete(ripple);
        }
      }, {}, DURATION * 0.35);

      if (this.get('dimBackground')) {
        this._container.css({ backgroundColor: color });
      }
      this._container.append(ripple);
      this.ripples.push(ripple);
      ripple.addClass('md-ripple-placed');

      this.get('util').nextTick(function () {

        ripple.addClass('md-ripple-scaled md-ripple-active');
        run.later(this, function () {
          ctrl.clearRipples();
        }, {}, DURATION);
      }, false);

      function rgbaToRGB(color) {
        return color ? color.replace('rgba', 'rgb').replace(/,[^\),]+\)/, ')') : 'rgb(0,0,0)';
      }

      function getSize(fit, x, y) {
        return fit ? Math.max(x, y) : Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      }
    },
    fadeInComplete: function fadeInComplete(ripple) {
      if (this.lastRipple === ripple) {
        if (!this.timeout && !this.mousedown) {
          this.removeRipple(ripple);
        }
      } else {
        this.removeRipple(ripple);
      }
    },
    removeRipple: function removeRipple(ripple) {
      var ctrl = this;
      var index = this.ripples.indexOf(ripple);
      if (index < 0) {
        return;
      }
      this.ripples.splice(this.ripples.indexOf(ripple), 1);
      ripple.removeClass('md-ripple-active');
      ripple.addClass('md-ripple-remove');
      if (this.ripples.length === 0) {
        this._container.css({ backgroundColor: '' });
      }
      // use a 2-second timeout in order to allow for the animation to finish
      // we don't actually care how long the animation takes
      run.later(this, function () {
        ctrl.fadeOutComplete(ripple);
      }, {}, DURATION);
    },
    fadeOutComplete: function fadeOutComplete(ripple) {
      ripple.remove();
      this.lastRipple = null;
    }
  });
});