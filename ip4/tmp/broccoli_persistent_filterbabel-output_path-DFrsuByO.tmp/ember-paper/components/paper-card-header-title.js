define('ember-paper/components/paper-card-header-title', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperCardHeaderTitle
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    tagName: 'span',
    classNames: ['md-title']
  });
});