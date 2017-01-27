define('ember-paper/components/paper-card-header', ['exports', 'ember', 'ember-paper/templates/components/paper-card-header'], function (exports, _ember, _emberPaperTemplatesComponentsPaperCardHeader) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperCardHeader
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperCardHeader['default'],
    tagName: 'md-card-header'
  });
});