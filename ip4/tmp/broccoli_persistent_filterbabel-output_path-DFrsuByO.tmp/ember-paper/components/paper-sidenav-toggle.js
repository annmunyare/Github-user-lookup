define('ember-paper/components/paper-sidenav-toggle', ['exports', 'ember', 'ember-paper/templates/components/paper-sidenav-toggle'], function (exports, _ember, _emberPaperTemplatesComponentsPaperSidenavToggle) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;
  var inject = _ember['default'].inject;

  /**
   * @class PaperSidenavToggle
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperSidenavToggle['default'],
    tagName: '',

    name: 'default',

    paperSidenav: inject.service(),

    toggle: function toggle() {
      this.get('paperSidenav').toggle(this.get('name'));
    }

  });
});