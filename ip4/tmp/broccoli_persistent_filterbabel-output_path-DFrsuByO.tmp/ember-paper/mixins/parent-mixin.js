define('ember-paper/mixins/parent-mixin', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Mixin = _ember['default'].Mixin;
  var computed = _ember['default'].computed;
  var A = _ember['default'].A;

  /**
   * @class ParentMixin
   * @extends Ember.Mixin
   */
  exports['default'] = Mixin.create({
    childComponents: computed(function () {
      return A();
    }),

    register: function register(child) {
      this.get('childComponents').pushObject(child);
    },

    unregister: function unregister(child) {
      this.get('childComponents').removeObject(child);
    }
  });
});