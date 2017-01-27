define('ember-paper/components/paper-card-image', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperCardImage
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    tagName: 'img',
    classNames: ['md-card-image'],
    attributeBindings: ['src', 'title', 'alt']
  });
});