define('ember-paper/mixins/proxiable-mixin', ['exports', 'ember', 'ember-composability-tools'], function (exports, _ember, _emberComposabilityTools) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Mixin = _ember['default'].Mixin;
  var run = _ember['default'].run;

  /**
   * @class ProxiableMixin
   * @uses ChildMixin
   * @extends Ember.Mixin
   */
  exports['default'] = Mixin.create(_emberComposabilityTools.ChildMixin, {

    classNameBindings: ['secondary:md-secondary'],

    shouldRegister: false,

    registerWithParent: function registerWithParent() {
      run.next(this, this._super);
    },

    mouseDown: function mouseDown() {
      this._super.apply(this, arguments);
      var parentComponent = this.get('parentComponent');
      if (parentComponent) {
        parentComponent.set('mouseActive', true);
        run.later(function () {
          if (parentComponent.isDestroyed) {
            return;
          }
          parentComponent.set('mouseActive', false);
        }, 100);
      }
    },

    focusIn: function focusIn() {
      this._super.apply(this, arguments);
      var parentComponent = this.get('parentComponent');
      if (parentComponent && !parentComponent.get('mouseActive')) {
        parentComponent.set('focused', true);
      }
    },

    focusOut: function focusOut() {
      this._super.apply(this, arguments);
      var parentComponent = this.get('parentComponent');
      if (parentComponent) {
        parentComponent.set('focused', false);
      }
    }
  });
});