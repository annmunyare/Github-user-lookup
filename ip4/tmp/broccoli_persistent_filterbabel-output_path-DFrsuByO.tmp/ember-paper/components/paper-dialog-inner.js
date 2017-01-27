define('ember-paper/components/paper-dialog-inner', ['exports', 'ember', 'ember-paper/mixins/translate3d-mixin'], function (exports, _ember, _emberPaperMixinsTranslate3dMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperDialogInner
   * @extends Ember.Component
   * @uses Translate3dMixin
   */
  exports['default'] = Component.extend(_emberPaperMixinsTranslate3dMixin['default'], {
    tagName: 'md-dialog',
    classNames: ['md-default-theme'],
    classNameBindings: ['contentOverflow:md-content-overflow', 'fullscreen:md-dialog-fullscreen'],

    onTranslateFromEnd: function onTranslateFromEnd() {
      if (this.get('focusOnOpen')) {
        var toFocus = this.$('[autofocus]').last();
        if (toFocus.length === 0) {
          toFocus = this.$('md-dialog-actions button').last();
        }
        toFocus.focus();
      }
    },

    onTranslateToEnd: function onTranslateToEnd($origin) {
      if ($origin) {
        $origin.focus();
      }
    }

  });
});