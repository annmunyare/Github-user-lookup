define('ember-paper/components/paper-sidenav-container', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;
  var htmlSafe = _ember['default'].String.htmlSafe;

  /**
   * @class PaperSidenavContainer
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    classNames: ['flex', 'layout-row'],
    attributeBindings: ['style'],
    style: htmlSafe('overflow: hidden')
  });
});