define('ember-paper/components/paper-backdrop', ['exports', 'ember', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _ember, _emberCssTransitionsMixinsTransitionMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var htmlSafe = _ember['default'].String.htmlSafe;

  /**
   * @class PaperBackdrop
   * @extends Ember.Component
   * @uses TransitionMixin
   */
  exports['default'] = Component.extend(_emberCssTransitionsMixinsTransitionMixin['default'], {

    tagName: 'md-backdrop',
    classNames: ['md-default-theme'],
    classNameBindings: ['opaque:md-opaque', 'isLockedOpen:md-locked-open'],
    attributeBindings: ['backdropStyle:style'],

    // TransitionMixin:
    transitionName: 'ng',
    shouldTransition: computed.bool('opaque'),

    backdropStyle: computed('fixed', 'translateStyle', function () {
      var style = this.get('translateStyle');
      return this.get('fixed') ? htmlSafe('position:fixed; ' + style) : style;
    }),

    addDestroyedElementClone: function addDestroyedElementClone(original, clone) {
      original.parent().append(clone);
    },

    sendClickAction: function sendClickAction(e) {
      e.preventDefault();
      this.sendAction('onClick', e);
    },

    click: function click(e) {
      this.sendClickAction(e);
    },

    // needed for iOS
    // iOS doesn't trigger a click event on normal divs
    // unless we use `cursor: pointer` css
    touchEnd: function touchEnd(e) {
      this.sendClickAction(e);
    }
  });
});