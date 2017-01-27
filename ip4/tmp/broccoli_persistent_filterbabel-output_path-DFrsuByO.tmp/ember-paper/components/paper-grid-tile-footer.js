define('ember-paper/components/paper-grid-tile-footer', ['exports', 'ember', 'ember-paper/templates/components/paper-grid-tile-footer'], function (exports, _ember, _emberPaperTemplatesComponentsPaperGridTileFooter) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperGridTileFooter
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperGridTileFooter['default'],
    tagName: 'md-grid-tile-footer'
  });
});