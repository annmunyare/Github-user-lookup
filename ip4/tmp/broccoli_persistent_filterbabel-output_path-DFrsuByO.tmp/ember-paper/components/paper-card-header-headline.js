define('ember-paper/components/paper-card-header-headline', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperCardHeaderHeadline
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    tagName: 'span',
    classNames: ['md-headline']
  });
});