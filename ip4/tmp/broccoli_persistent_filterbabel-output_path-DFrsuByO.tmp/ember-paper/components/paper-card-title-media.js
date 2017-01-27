define('ember-paper/components/paper-card-title-media', ['exports', 'ember', 'ember-paper/templates/components/paper-card-title-media'], function (exports, _ember, _emberPaperTemplatesComponentsPaperCardTitleMedia) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperCardTitleMedia
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperCardTitleMedia['default'],
    tagName: 'md-card-title-media',
    size: 'md'
  });
});