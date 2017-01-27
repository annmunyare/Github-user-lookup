define('ember-paper/components/paper-select-menu-inner', ['exports', 'ember', 'ember-paper/templates/components/paper-select-menu-inner', 'ember-paper/components/paper-menu-content-inner', 'ember-power-select/utils/group-utils'], function (exports, _ember, _emberPaperTemplatesComponentsPaperSelectMenuInner, _emberPaperComponentsPaperMenuContentInner, _emberPowerSelectUtilsGroupUtils) {
  'use strict';

  var computed = _ember['default'].computed;
  var run = _ember['default'].run;

  function advanceSelectableOption(options, currentOption, step) {
    var resultsLength = (0, _emberPowerSelectUtilsGroupUtils.countOptions)(options);
    var startIndex = Math.min(Math.max((0, _emberPowerSelectUtilsGroupUtils.indexOfOption)(options, currentOption) + step, 0), resultsLength - 1);

    var _optionAtIndex = (0, _emberPowerSelectUtilsGroupUtils.optionAtIndex)(options, startIndex);

    var disabled = _optionAtIndex.disabled;
    var option = _optionAtIndex.option;

    while (option && disabled) {
      var next = (0, _emberPowerSelectUtilsGroupUtils.optionAtIndex)(options, startIndex += step);
      disabled = next.disabled;
      option = next.option;
    }
    return option;
  }

  exports['default'] = _emberPaperComponentsPaperMenuContentInner['default'].extend({
    layout: _emberPaperTemplatesComponentsPaperSelectMenuInner['default'],
    tagName: 'md-select-menu',
    classNames: ['md-default-theme'],
    classNameBindings: ['searchEnabled:md-overflow'],
    enabledOptions: computed.filterBy('childComponents', 'disabled', false),
    didInsertElement: function didInsertElement() {
      var _this = this;

      run.next(function () {
        var focusTarget = _this.$('md-option[aria-selected="true"]');
        if (!focusTarget || !focusTarget.length) {
          focusTarget = _this.get('enabledOptions.firstObject.element');
          var newHighlighted = advanceSelectableOption(_this.dropdown.results, _this.dropdown.highlighted, -1);
          _this.dropdown.actions.highlight(newHighlighted, null);
        } else {
          focusTarget = focusTarget[0];
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
          this.focusOption(ev, -1);
          var newHighlighted = advanceSelectableOption(this.dropdown.results, this.dropdown.highlighted, -1);
          this.dropdown.actions.highlight(newHighlighted, ev);
          this.dropdown.actions.scrollTo(newHighlighted);
          break;
        case this.get('constants.KEYCODE.RIGHT_ARROW'):
        case this.get('constants.KEYCODE.DOWN_ARROW'):
          ev.preventDefault();
          this.focusOption(ev, 1);
          var newHighlighted2 = advanceSelectableOption(this.dropdown.results, this.dropdown.highlighted, 1);
          this.dropdown.actions.highlight(newHighlighted2, ev);
          this.dropdown.actions.scrollTo(newHighlighted2);
          break;
        case this.get('constants.KEYCODE.ENTER'):
          ev.preventDefault();
          this.dropdown.actions.choose(this.dropdown.highlighted);
          break;
      }
    },

    focusOption: function focusOption(e, direction) {
      var currentItem = this.$(e.target).closest('md-option');

      var children = this.get('enabledMenuItems');
      var items = children.map(function (child) {
        return child.element;
      });

      var currentIndex = items.indexOf(currentItem[0]);

      // Traverse through our elements in the specified direction (+/-1) and try to
      // focus them until we find one that accepts focus
      for (var i = currentIndex + direction; i >= 0 && i < items.length; i = i + direction) {
        var focusTarget = items[i];
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