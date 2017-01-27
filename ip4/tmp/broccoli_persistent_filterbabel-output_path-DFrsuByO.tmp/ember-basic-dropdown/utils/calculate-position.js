define('ember-basic-dropdown/utils/calculate-position', ['exports', 'jquery'], function (exports, _jquery) {
  'use strict';

  exports.calculatePosition = calculatePosition;
  exports.calculateInPlacePosition = calculateInPlacePosition;

  /**
    Function used to calculate the position of the content of the dropdown.
    @public
    @method calculatePosition
    @param {DomElement} trigger The trigger of the dropdown
    @param {DomElement} dropdown The content of the dropdown
    @param {Object} options The directives that define how the position is calculated
      - {String} horizantalPosition How the users want the dropdown to be positioned horizontally. Values: right | center | left
      - {String} verticalPosition How the users want the dropdown to be positioned vertically. Values: above | below
      - {Boolean} matchTriggerWidth If the user wants the width of the dropdown to match the width of the trigger
      - {String} previousHorizantalPosition How the dropdown was positioned for the last time. Same values than horizontalPosition, but can be null the first time.
      - {String} previousVerticalPosition How the dropdown was positioned for the last time. Same values than verticalPosition, but can be null the first time.
    @return {Object} How the component is going to be positioned.
      - {String} horizantalPosition The new horizontal position.
      - {String} verticalPosition The new vertical position.
      - {Object} CSS properties to be set on the dropdown. It supports `top`, `left`, `right` and `width`.
  */

  function calculatePosition(trigger, dropdown, _ref) {
    var horizontalPosition = _ref.horizontalPosition;
    var verticalPosition = _ref.verticalPosition;
    var matchTriggerWidth = _ref.matchTriggerWidth;
    var previousHorizontalPosition = _ref.previousHorizontalPosition;
    var previousVerticalPosition = _ref.previousVerticalPosition;

    // Collect information about all the involved DOM elements
    var $window = (0, _jquery['default'])(self.window);
    var scroll = { left: $window.scrollLeft(), top: $window.scrollTop() };

    var _trigger$getBoundingClientRect = trigger.getBoundingClientRect();

    var triggerLeft = _trigger$getBoundingClientRect.left;
    var triggerTop = _trigger$getBoundingClientRect.top;
    var triggerWidth = _trigger$getBoundingClientRect.width;
    var triggerHeight = _trigger$getBoundingClientRect.height;

    var _dropdown$getBoundingClientRect = dropdown.getBoundingClientRect();

    var dropdownHeight = _dropdown$getBoundingClientRect.height;
    var dropdownWidth = _dropdown$getBoundingClientRect.width;

    var viewportWidth = self.window.innerWidth;
    var style = {};

    // Calculate drop down width
    dropdownWidth = matchTriggerWidth ? triggerWidth : dropdownWidth;
    if (matchTriggerWidth) {
      style.width = dropdownWidth;
    }

    // Calculate horizontal position
    var triggerLeftWithScroll = triggerLeft + scroll.left;
    if (horizontalPosition === 'auto') {
      // Calculate the number of visible horizontal pixels if we were to place the
      // dropdown on the left and right
      var leftVisible = Math.min(viewportWidth, triggerLeft + dropdownWidth) - Math.max(0, triggerLeft);
      var rightVisible = Math.min(viewportWidth, triggerLeft + triggerWidth) - Math.max(0, triggerLeft + triggerWidth - dropdownWidth);

      if (dropdownWidth > leftVisible && rightVisible > leftVisible) {
        // If the drop down won't fit left-aligned, and there is more space on the
        // right than on the left, then force right-aligned
        horizontalPosition = 'right';
      } else if (dropdownWidth > rightVisible && leftVisible > rightVisible) {
        // If the drop down won't fit right-aligned, and there is more space on
        // the left than on the right, then force left-aligned
        horizontalPosition = 'left';
      } else {
        // Keep same position as previous
        horizontalPosition = previousHorizontalPosition || 'left';
      }
    }
    if (horizontalPosition === 'right') {
      style.right = viewportWidth - (triggerLeftWithScroll + triggerWidth);
    } else if (horizontalPosition === 'center') {
      style.left = triggerLeftWithScroll + (triggerWidth - dropdownWidth) / 2;
    } else {
      style.left = triggerLeftWithScroll;
    }

    // Calculate vertical position
    var triggerTopWithScroll = triggerTop + scroll.top;
    if (verticalPosition === 'above') {
      style.top = triggerTopWithScroll - dropdownHeight;
    } else if (verticalPosition === 'below') {
      style.top = triggerTopWithScroll + triggerHeight;
    } else {
      var viewportBottom = scroll.top + self.window.innerHeight;
      var enoughRoomBelow = triggerTopWithScroll + triggerHeight + dropdownHeight < viewportBottom;
      var enoughRoomAbove = triggerTop > dropdownHeight;

      if (previousVerticalPosition === 'below' && !enoughRoomBelow && enoughRoomAbove) {
        verticalPosition = 'above';
      } else if (previousVerticalPosition === 'above' && !enoughRoomAbove && enoughRoomBelow) {
        verticalPosition = 'below';
      } else if (!previousVerticalPosition) {
        verticalPosition = enoughRoomBelow ? 'below' : 'above';
      } else {
        verticalPosition = previousVerticalPosition;
      }
      style.top = triggerTopWithScroll + (verticalPosition === 'below' ? triggerHeight : -dropdownHeight);
    }

    return { horizontalPosition: horizontalPosition, verticalPosition: verticalPosition, style: style };
  }

  function calculateInPlacePosition(trigger, dropdown, _ref2 /*, matchTriggerWidth, previousHorizontalPosition, previousVerticalPosition */) {
    var horizontalPosition = _ref2.horizontalPosition;
    var verticalPosition = _ref2.verticalPosition;

    var dropdownRect = undefined;
    var positionData = {};
    if (horizontalPosition === 'auto') {
      var triggerRect = trigger.getBoundingClientRect();
      dropdownRect = dropdown.getBoundingClientRect();
      var viewportRight = (0, _jquery['default'])(self.window).scrollLeft() + self.window.innerWidth;
      positionData.horizontalPosition = triggerRect.left + dropdownRect.width > viewportRight ? 'right' : 'left';
    }
    if (verticalPosition === 'above') {
      positionData.verticalPosition = verticalPosition;
      dropdownRect = dropdownRect || dropdown.getBoundingClientRect();
      positionData.style = { top: -dropdownRect.height };
    }
    return positionData;
  }
});