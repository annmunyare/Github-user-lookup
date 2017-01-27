define('ember-paper/components/paper-content', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperContent
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    tagName: 'md-content',
    classNames: ['md-default-theme'],
    attributeBindings: ['layout-padding', 'scroll-y:md-scroll-y'],
    classNameBindings: ['padding:md-padding']
  });
});