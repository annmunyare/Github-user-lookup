define('ember-paper/components/paper-toolbar', ['exports', 'ember', 'ember-paper/templates/components/paper-toolbar', 'ember-paper/mixins/color-mixin'], function (exports, _ember, _emberPaperTemplatesComponentsPaperToolbar, _emberPaperMixinsColorMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperToolbar
   * @extends Ember.Component
   * @uses ColorMixin
   */
  exports['default'] = Component.extend(_emberPaperMixinsColorMixin['default'], {
    layout: _emberPaperTemplatesComponentsPaperToolbar['default'],
    tagName: 'md-toolbar',
    classNames: ['md-default-theme'],
    tall: false,
    classNameBindings: ['tall:md-tall']
  });
});