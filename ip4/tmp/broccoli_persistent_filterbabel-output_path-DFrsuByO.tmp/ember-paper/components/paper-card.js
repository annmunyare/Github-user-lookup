define('ember-paper/components/paper-card', ['exports', 'ember', 'ember-paper/templates/components/paper-card'], function (exports, _ember, _emberPaperTemplatesComponentsPaperCard) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperCard
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperCard['default'],
    tagName: 'md-card'
  });
});