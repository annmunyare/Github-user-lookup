define('ember-paper/components/paper-card-media', ['exports', 'ember', 'ember-paper/templates/components/paper-card-media'], function (exports, _ember, _emberPaperTemplatesComponentsPaperCardMedia) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperCardMedia
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperCardMedia['default'],
    tagName: '',
    size: 'md'
  });
});