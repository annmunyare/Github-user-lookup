define('ember-paper/components/paper-card-title-text', ['exports', 'ember', 'ember-paper/templates/components/paper-card-title-text'], function (exports, _ember, _emberPaperTemplatesComponentsPaperCardTitleText) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperCardTitleText
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperCardTitleText['default'],
    tagName: 'md-card-title-text'
  });
});