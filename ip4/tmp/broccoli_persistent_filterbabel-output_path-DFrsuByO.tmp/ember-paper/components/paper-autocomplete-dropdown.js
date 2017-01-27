define('ember-paper/components/paper-autocomplete-dropdown', ['exports', 'ember', 'ember-basic-dropdown/components/basic-dropdown', 'ember-paper/templates/components/paper-autocomplete-dropdown'], function (exports, _ember, _emberBasicDropdownComponentsBasicDropdown, _emberPaperTemplatesComponentsPaperAutocompleteDropdown) {
  'use strict';

  var $ = _ember['default'].$;

  exports['default'] = _emberBasicDropdownComponentsBasicDropdown['default'].extend({
    layout: _emberPaperTemplatesComponentsPaperAutocompleteDropdown['default'],
    triggerComponent: 'paper-autocomplete-trigger-container',

    reposition: function reposition() {
      if (!this.get('publicAPI.isOpen')) {
        return;
      }
      var dropdownElement = $('.' + this.dropdownId).get(0);
      var triggerElement = document.getElementById(this.triggerId);
      if (!dropdownElement || !triggerElement) {
        return;
      }

      var calculatePosition = this.get(this.get('renderInPlace') ? 'calculateInPlacePosition' : 'calculatePosition');
      var options = this.getProperties('horizontalPosition', 'verticalPosition', 'matchTriggerWidth', 'previousHorizontalPosition', 'previousVerticalPosition');
      options.dropdown = this;
      var positionData = calculatePosition(triggerElement, dropdownElement, options);
      return this.applyReposition(triggerElement, dropdownElement, positionData);
    },

    // EBD passes `dropdown` as options
    // that var is `this` component itself
    calculatePosition: function calculatePosition(trigger, dropdownEl, _ref) {
      var horizontalPosition = _ref.horizontalPosition;
      var verticalPosition = _ref.verticalPosition;
      var matchTriggerWidth = _ref.matchTriggerWidth;
      var dropdown = _ref.dropdown;

      var $window = $(window);
      var scroll = { left: $window.scrollLeft(), top: $window.scrollTop() };

      var _trigger$getBoundingClientRect = trigger.getBoundingClientRect();

      var triggerLeft = _trigger$getBoundingClientRect.left;
      var triggerTop = _trigger$getBoundingClientRect.top;
      var triggerWidth = _trigger$getBoundingClientRect.width;
      var triggerHeight = _trigger$getBoundingClientRect.height;

      var _dropdownEl$getBoundingClientRect = dropdownEl.getBoundingClientRect();

      var dropdownHeight = _dropdownEl$getBoundingClientRect.height;
      var dropdownWidth = _dropdownEl$getBoundingClientRect.width;

      var dropdownLeft = triggerLeft;
      var dropdownTop = undefined;
      dropdownWidth = matchTriggerWidth ? triggerWidth : dropdownWidth;

      if (horizontalPosition === 'auto') {
        var viewportRight = scroll.left + window.innerWidth;
        var roomForRight = viewportRight - triggerLeft;
        var roomForLeft = triggerLeft;
        horizontalPosition = roomForRight > roomForLeft ? 'left' : 'right';
      } else if (horizontalPosition === 'right') {
        dropdownLeft = triggerLeft + triggerWidth - dropdownWidth;
      } else if (horizontalPosition === 'center') {
        dropdownLeft = triggerLeft + (triggerWidth - dropdownWidth) / 2;
      }

      var triggerTopWithScroll = triggerTop + scroll.top;
      if (verticalPosition === 'above') {
        dropdownTop = triggerTopWithScroll - dropdownHeight;
      } else if (verticalPosition === 'below') {
        dropdownTop = triggerTopWithScroll + triggerHeight;
      } else {
        var viewportBottom = scroll.top + window.innerHeight;
        var enoughRoomBelow = triggerTopWithScroll + triggerHeight + dropdownHeight < viewportBottom;
        var enoughRoomAbove = triggerTop > dropdownHeight;

        if (dropdown.previousVerticalPosition === 'below' && !enoughRoomBelow && enoughRoomAbove) {
          verticalPosition = 'above';
        } else if (dropdown.previousVerticalPosition === 'above' && !enoughRoomAbove && enoughRoomBelow) {
          verticalPosition = 'below';
        } else if (!dropdown.previousVerticalPosition) {
          verticalPosition = enoughRoomBelow ? 'below' : 'above';
        } else {
          verticalPosition = dropdown.previousVerticalPosition;
        }

        dropdownTop = triggerTopWithScroll + (verticalPosition === 'below' ? triggerHeight : -dropdownHeight) - (verticalPosition === 'below' ? getVerticalOffset() : 0);
      }
      function getVerticalOffset() {
        var offset = 0;
        var inputContainer = $(trigger).find('md-input-container');
        if (inputContainer.length) {
          var input = inputContainer.find('input');
          offset = inputContainer.prop('offsetHeight');
          offset -= input.prop('offsetTop');
          offset -= input.prop('offsetHeight');
          // add in the height left up top for the floating label text
          offset += inputContainer.prop('offsetTop');
        }
        return offset;
      }
      var style = { top: dropdownTop, left: dropdownLeft };
      if (matchTriggerWidth) {
        style.width = dropdownWidth;
      }

      return { style: style, horizontalPosition: '', verticalPosition: '' };
    }

  });
});