define('ember-paper/components/paper-card-header-text', ['exports', 'ember', 'ember-paper/templates/components/paper-card-header-text'], function (exports, _ember, _emberPaperTemplatesComponentsPaperCardHeaderText) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperCardheaderText
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperCardHeaderText['default'],
    tagName: 'md-card-header-text'
  });
});