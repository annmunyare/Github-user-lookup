define('ember-paper/services/paper-sidenav', ['exports', 'ember'], function (exports, _ember) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Service = _ember['default'].Service;
  var assert = _ember['default'].assert;

  /**
   * @class PaperSidenav
   * @extends Ember.Service
   */
  exports['default'] = Service.extend({
    init: function init() {
      this._super.apply(this, arguments);
      this._sidenavs = {};
    },

    willDestroy: function willDestroy() {
      this._super.apply(this, arguments);
      delete this._sidenavs;
    },

    register: function register(name, sidenav) {
      if (!this._sidenavs[name]) {
        this._sidenavs[name] = [];
      }
      this._sidenavs[name].push({ name: name, sidenav: sidenav });
    },

    unregister: function unregister(name, sidenav) {
      assert('You tried to unregister a sidenav named \'' + name + '\' but no such sidenav is registered', this._sidenavs[name] && this._sidenavs[name].length);
      var sidenavs = this._sidenavs[name] || [];
      this._sidenavs[name] = sidenavs.filter(function (s) {
        return s.sidenav !== sidenav;
      });
    },

    open: function open() {
      var name = arguments.length <= 0 || arguments[0] === undefined ? 'default' : arguments[0];

      assert('You tried to open a sidenav named \'' + name + '\' but no such sidenav is registered', this._sidenavs[name] && this._sidenavs[name].length);
      var sidenavs = this._sidenavs[name] || [];
      sidenavs.forEach(function (s) {
        return s.sidenav.open();
      });
    },

    close: function close() {
      var name = arguments.length <= 0 || arguments[0] === undefined ? 'default' : arguments[0];

      assert('You tried to close a sidenav named \'' + name + '\' but no such sidenav is registered', this._sidenavs[name] && this._sidenavs[name].length);
      var sidenavs = this._sidenavs[name] || [];
      sidenavs.forEach(function (s) {
        return s.sidenav.close();
      });
    },

    toggle: function toggle() {
      var name = arguments.length <= 0 || arguments[0] === undefined ? 'default' : arguments[0];

      assert('You tried to toggle a sidenav named \'' + name + '\' but no such sidenav is registered', this._sidenavs[name] && this._sidenavs[name].length);
      var sidenavs = this._sidenavs[name] || [];
      sidenavs.forEach(function (s) {
        return s.sidenav.toggle();
      });
    }
  });
});