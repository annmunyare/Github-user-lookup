var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

export { nextTick };
export { computeTimeout };
import Ember from 'ember';
var Mixin = Ember.Mixin;
var RSVP = Ember.RSVP;
var computed = Ember.computed;
var run = Ember.run;
var testing = Ember.testing;
var $ = Ember.$;
var A = Ember.A;
var dasherize = Ember.String.dasherize;

/**
 * @private
 * T (period) = 1 / f (frequency)
 * TICK = 1 / 60hz = 0,01667s = 17ms
 */
var TICK = 17;

/**
 * @public
 * This function performs some logic after a browser repaint.
 * While on testing or if raf not available, use a run-loop friendly equivalent.
 * This also makes the tests work as expected.
 */
var rAF = testing || !window.requestAnimationFrame ? function (fn) {
  return run.later(fn, TICK);
} : window.requestAnimationFrame;

export { rAF };
/**
 * @public
 * Performs some logic after DOM changes have been flushed
 * and after a browser repaint.
 */

function nextTick() {
  return new RSVP.Promise(function (resolve) {
    run.schedule('afterRender', function () {
      rAF(function () {
        resolve();
      });
    });
  });
}

/**
 * @private
 * Computes the time a css animation will take.
 * Uses `getComputedStyle` to get durations and delays.
 */

function computeTimeout(element) {
  var _window$getComputedStyle = window.getComputedStyle(element);

  var transitionDuration = _window$getComputedStyle.transitionDuration;
  var transitionDelay = _window$getComputedStyle.transitionDelay;
  var animationDuration = _window$getComputedStyle.animationDuration;
  var animationDelay = _window$getComputedStyle.animationDelay;
  var animationIterationCount = _window$getComputedStyle.animationIterationCount;

  // `getComputedStyle` returns durations and delays in the Xs format.
  // Conveniently if `parseFloat` encounters a character other than a sign (+ or -),
  // numeral (0-9), a decimal point, or an exponent, it returns the value up to that point
  // and ignores that character and all succeeding characters.

  var maxDelay = Math.max(parseFloat(animationDelay), parseFloat(transitionDelay));
  var maxDuration = Math.max(parseFloat(animationDuration) * parseFloat(animationIterationCount), parseFloat(transitionDuration));

  return (maxDelay + maxDuration) * 1000;
}

/**
 * @public
 * @class TransitionMixin
 * @extends Ember.Mixin
 */
export default Mixin.create({

  classNameBindings: ['joinedTransitionClasses'],

  joinedTransitionClasses: computed('transitionClasses.[]', function () {
    return this.get('transitionClasses').join(' ');
  }),

  addClass: function addClass(className, element) {
    if (!this.get('isDestroying')) {
      this.get('transitionClasses').addObject(className);
    } else {
      $(element).addClass(className);
    }
  },

  removeClass: function removeClass(className, element) {
    if (!this.get('isDestroying')) {
      this.get('transitionClasses').removeObject(className);
    } else {
      $(element).removeClass(className);
    }
  },

  'transition-class': computed.alias('transitionClass'),
  transitionName: computed.alias('transitionClass'),

  init: function init() {
    this._super.apply(this, arguments);
    this.transitionClasses = A();
    this.transitionTimeouts = [];
    this._setupTriggerObservers();
  },

  /**
   * @private
   * Transitions the element.
   * @param animationType The animation type, e.g. "enter" or "leave".
   * @param transitionClass The name of the class with the transition defined
   * @return Promise
   */
  transition: function transition(animationType, transitionClass, finishCallback) {
    var _this = this;

    // we may need to animate the clone if the element was destroyed
    var element = this.clone ? this.clone.get(0) : this.element;

    var className = transitionClass + '-' + animationType;
    var activeClassName = className + '-active';

    // add first class right away
    this.addClass(className, element);

    nextTick().then(function () {
      // add active class after repaint
      _this.addClass(activeClassName, element);

      // if we're animating a class removal
      // we need to remove the class
      if (animationType === 'remove') {
        _this.removeClass(transitionClass);
      }

      // wait for ember to apply classes
      run.schedule('afterRender', function () {
        // set timeout for animation end
        var timeout = run.later(function () {
          _this.removeClass(className, element);
          _this.removeClass(activeClassName, element);
          if (finishCallback) {
            finishCallback();
          }
        }, computeTimeout(element) || 0);
        _this.transitionTimeouts.push(timeout);
      });
    });
  },

  didInsertElement: function didInsertElement() {
    var _this2 = this;

    this._super.apply(this, arguments);

    var transitionClass = this.get('transitionName');
    if (transitionClass) {
      run.schedule('afterRender', function () {
        _this2.transition('enter', transitionClass, _this2.didTransitionIn);
      });
    }
  },

  willDestroyElement: function willDestroyElement() {
    var _this3 = this;

    this._super.apply(this, arguments);

    this._teardownTriggerObservers();
    this.transitionTimeouts.forEach(function (t) {
      return clearTimeout(t);
    });

    var transitionClass = this.get('transitionName');
    if (transitionClass) {
      // We can't stop ember from removing the element
      // so we clone the element to animate it out
      var clone = this.clone = this.$().clone();
      clone.attr('id', this.elementId + '_clone');
      this.addDestroyedElementClone(this.$(), clone);

      nextTick().then(function () {
        _this3.transition('leave', transitionClass, function () {
          _this3.didTransitionOut();
          delete _this3.clone;
        });
      });
    }
  },

  /**
   * @public
   * Default placement of the cloned element when being destroyed.
   */
  addDestroyedElementClone: function addDestroyedElementClone(original, clone) {
    if (original.prev().length) {
      original.prev().after(clone);
    } else {
      original.parent().prepend(clone);
    }
  },

  /**
   * @public
   * Called after transition in was done. Will always be called after didInsertElement.
   */
  didTransitionIn: function didTransitionIn() {},

  /**
   * @public
   * Called when the transition out is called.
   * @param clone The cloned jQuery element. Normally .remove() should be called to remove the element after transition is done.
   */
  didTransitionOut: function didTransitionOut() {
    this.clone.remove();
  },

  /**
   * A list of properties that can control the transitions.  Functions just like
   * Ember.Component.classNameBindings, and can be formatted in the same way.
   *
   * @property transitionClassNameBindings
   * @type Array
   * @default []
   * @public
   */
  transitionClassNameBindings: [],

  _setupTriggerObservers: function _setupTriggerObservers() {
    var _this4 = this;

    this._observers = {};
    this.get('transitionClassNameBindings').forEach(function (classExp) {
      var _classExp$split = classExp.split(':');

      var _classExp$split2 = _slicedToArray(_classExp$split, 2);

      var propName = _classExp$split2[0];
      var className = _classExp$split2[1];

      if (!className) {
        className = dasherize(propName);
      }

      // create observer function
      _this4._observers[propName] = function () {
        var value = this.get(propName);
        if (value) {
          this.addClass(className, this.element);
          this.transition('add', className);
        } else {
          this.transition('remove', className);
        }
      };

      // if value starts as true, add it immediatly
      var value = _this4.get(propName);
      if (value) {
        _this4.get('transitionClasses').addObject(className);
      }

      // add observer
      _this4.addObserver(propName, _this4, _this4._observers[propName]);
    });
  },

  _teardownTriggerObservers: function _teardownTriggerObservers() {
    var _this5 = this;

    if (this._observers) {
      this.get('transitionClassNameBindings').forEach(function (classExp) {
        var _classExp$split3 = classExp.split(':');

        var _classExp$split32 = _slicedToArray(_classExp$split3, 1);

        var propName = _classExp$split32[0];

        _this5.removeObserver(propName, _this5, _this5._observers[propName]);
        delete _this5._observers[propName];
      });
    }
  }

});