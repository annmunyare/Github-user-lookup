define('ember-paper/components/paper-card-title', ['exports', 'ember', 'ember-paper/templates/components/paper-card-title'], function (exports, _ember, _emberPaperTemplatesComponentsPaperCardTitle) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperCardTitle
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperCardTitle['default'],
    tagName: 'md-card-title'
  });
});