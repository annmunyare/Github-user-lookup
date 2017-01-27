define('ember-paper/components/paper-card-header-subhead', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperCardHeaderSubhead
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    tagName: 'span',
    classNames: ['md-subhead']
  });
});