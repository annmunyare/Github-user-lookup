define('ember-paper/components/paper-subheader', ['exports', 'ember', 'ember-paper/templates/components/paper-subheader'], function (exports, _ember, _emberPaperTemplatesComponentsPaperSubheader) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperSubheader
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperSubheader['default'],
    tagName: 'h2',
    classNames: ['md-subheader']
  });
});