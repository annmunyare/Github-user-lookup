define('ember-paper/components/paper-dialog', ['exports', 'ember', 'ember-paper/templates/components/paper-dialog'], function (exports, _ember, _emberPaperTemplatesComponentsPaperDialog) {
  /**
   * @module ember-paper
   */
  'use strict';

  var $ = _ember['default'].$;
  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var inject = _ember['default'].inject;

  /**
   * @class PaperDialog
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperDialog['default'],
    tagName: '',

    escapeToClose: true,
    focusOnOpen: true,

    // Calculate a default that is always valid for the parent of the backdrop.
    wormholeSelector: '#paper-wormhole',
    defaultedParent: computed.or('parent', 'wormholeSelector'),

    // Calculate a default that is always valid where the opening transition should originate.
    defaultedOpenFrom: computed.or('openFrom', 'origin', 'parent'),

    // Calculate a default that is always valid where the closing transition should terminate.
    defaultedCloseTo: computed.or('closeTo', 'origin', 'parent'),

    // Calculate the id of the wormhole destination, setting it if need be. The
    // id is that of the 'parent', if provided, or 'paper-wormhole' if not.
    destinationId: computed('defaultedParent', function () {
      var parent = this.get('defaultedParent');
      var $parent = $(parent);
      // If the parent isn't found, assume that it is an id, but that the DOM doesn't
      // exist yet. This only happens during integration tests or if entire application
      // route is a dialog.
      if ($parent.length === 0 && parent.charAt(0) === '#') {
        return parent.substring(1);
      } else {
        var id = $parent.attr('id');
        if (!id) {
          id = this.elementId + '-parent';
          $parent.get(0).id = id;
        }
        return id;
      }
    }),

    constants: inject.service(),

    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);
      if (this.get('escapeToClose')) {
        $(this.get('defaultedParent')).on('keydown.' + this.elementId, function (e) {
          if (e.keyCode === _this.get('constants.KEYCODE.ESCAPE') && _this.get('onClose')) {
            _this.sendAction('onClose');
          }
        });
      }
    },

    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      if (this.get('escapeToClose')) {
        $(this.get('defaultedParent')).off('keydown.' + this.elementId);
      }
    },

    actions: {
      outsideClicked: function outsideClicked() {
        if (this.get('clickOutsideToClose') && this.get('onClose')) {
          this.sendAction('onClose');
        }
      }
    }
  });
});