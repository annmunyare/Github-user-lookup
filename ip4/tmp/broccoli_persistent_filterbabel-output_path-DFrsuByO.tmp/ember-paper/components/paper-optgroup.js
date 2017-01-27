define('ember-paper/components/paper-optgroup', ['exports', 'ember', 'ember-paper/templates/components/paper-optgroup'], function (exports, _ember, _emberPaperTemplatesComponentsPaperOptgroup) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperOptgroup
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperOptgroup['default'],
    tagName: 'md-optgroup',
    attributeBindings: ['label']
  });
});