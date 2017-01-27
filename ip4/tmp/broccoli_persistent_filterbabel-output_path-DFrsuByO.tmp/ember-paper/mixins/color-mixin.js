define('ember-paper/mixins/color-mixin', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Mixin = _ember['default'].Mixin;

  /**
   * @class ColorMixin
   * @extends Ember.Mixin;
   */
  exports['default'] = Mixin.create({
    classNameBindings: ['warn:md-warn', 'accent:md-accent', 'primary:md-primary']
  });
});