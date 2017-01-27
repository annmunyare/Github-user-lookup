define('ember-paper/components/paper-sidenav', ['exports', 'ember', 'ember-paper/templates/components/paper-sidenav'], function (exports, _ember, _emberPaperTemplatesComponentsPaperSidenav) {
  'use strict';

  var _slice = Array.prototype.slice;
  /**
   * @module ember-paper
   */

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;

  /**
   * @class
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperSidenav['default'],
    tagName: '',

    name: 'default',
    position: 'left',
    lockedOpen: 'gt-sm',
    open: false,
    closed: computed.not('open'),
    closeOnClick: true,

    actions: {
      onToggle: function onToggle() {
        this.sendAction.apply(this, ['onToggle'].concat(_slice.call(arguments)));
      },
      onBackdropTap: function onBackdropTap() {
        this.sendAction('onToggle', false);
      }
    }
  });
});