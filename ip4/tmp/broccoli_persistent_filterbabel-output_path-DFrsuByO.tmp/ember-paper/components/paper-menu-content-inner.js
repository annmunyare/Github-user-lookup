define('ember-paper/components/paper-menu-content-inner', ['exports', 'ember', 'ember-paper/templates/components/paper-menu-content-inner', 'ember-paper/mixins/parent-mixin'], function (exports, _ember, _emberPaperTemplatesComponentsPaperMenuContentInner, _emberPaperMixinsParentMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;
  var inject = _ember['default'].inject;
  var computed = _ember['default'].computed;
  var run = _ember['default'].run;

  /**
   * @class PaperMenuContentInner
   * @extends Ember.Component
   * @uses ParentMixin
   */
  exports['default'] = Component.extend(_emberPaperMixinsParentMixin['default'], {
    layout: _emberPaperTemplatesComponentsPaperMenuContentInner['default'],
    tagName: 'md-menu-content',
    attributeBindings: ['width'],
    classNameBindings: ['dense:md-dense'],

    constants: inject.service(),
    enabledMenuItems: computed.filterBy('childComponents', 'disabled', false),

    didInsertElement: function didInsertElement() {
      var _this = this;

      run.later(function () {
        var focusTarget = _this.$().find('.md-menu-focus-target');
        if (!focusTarget.length) {
          focusTarget = _this.get('enabledMenuItems.firstObject.element.firstElementChild');
        }
        if (focusTarget) {
          focusTarget.focus();
        }
      });
    },

    keyDown: function keyDown(ev) {
      switch (ev.which) {
        case this.get('constants.KEYCODE.ESCAPE'):
          this.dropdown.actions.close();
          break;
        case this.get('constants.KEYCODE.LEFT_ARROW'):
        case this.get('constants.KEYCODE.UP_ARROW'):
          ev.preventDefault();
          this.focusMenuItem(ev, -1);
          break;
        case this.get('constants.KEYCODE.RIGHT_ARROW'):
        case this.get('constants.KEYCODE.DOWN_ARROW'):
          ev.preventDefault();
          this.focusMenuItem(ev, 1);
          break;
      }
    },

    focusMenuItem: function focusMenuItem(e, direction) {
      var currentItem = this.$(e.target).closest('md-menu-item');

      var children = this.get('enabledMenuItems');
      var items = children.map(function (child) {
        return child.element;
      });

      var currentIndex = items.indexOf(currentItem[0]);

      // Traverse through our elements in the specified direction (+/-1) and try to
      // focus them until we find one that accepts focus
      for (var i = currentIndex + direction; i >= 0 && i < items.length; i = i + direction) {
        var focusTarget = items[i].firstElementChild || items[i];
        var didFocus = this.attemptFocus(focusTarget);
        if (didFocus) {
          break;
        }
      }
    },

    attemptFocus: function attemptFocus(el) {
      if (el && el.getAttribute('tabindex') !== -1) {
        el.focus();
        if (document.activeElement === el) {
          return true;
        } else {
          return false;
        }
      }
    }
  });
});