define('ember-paper/components/paper-list', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperList
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    tagName: 'md-list',
    classNames: ['md-default-theme']
  });
});