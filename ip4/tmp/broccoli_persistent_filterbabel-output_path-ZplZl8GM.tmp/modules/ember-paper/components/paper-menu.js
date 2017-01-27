var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-menu';
import BasicDropdownComponent from 'ember-basic-dropdown/components/basic-dropdown';
var assert = Ember.assert;
var computed = Ember.computed;

var MENU_EDGE_MARGIN = 8;

function clamp(pos, bounds, containerNode) {
  pos.top = Math.max(Math.min(pos.top, bounds.bottom - containerNode.offsetHeight), bounds.top);
  pos.left = Math.max(Math.min(pos.left, bounds.right - containerNode.offsetWidth), bounds.left);
}

function firstVisibleChild(node) {
  for (var i = 0; i < node.children.length; ++i) {
    if (window.getComputedStyle(node.children[i]).display !== 'none') {
      return node.children[i];
    }
  }
}

/**
 * @class PaperMenu
 * @extends BasicDropdownComponent
 */
export default BasicDropdownComponent.extend({
  layout: layout,

  close: function close() {
    this._super.apply(this, arguments);
    this.didAnimateScale = false;
  },

  position: 'target',

  // If attachment is a single item, duplicate it for our second value.
  // ie. 'target' -> 'target target'
  positionMode: computed('position', function () {
    var position = this.get('position') || 'target';

    var _position$split$map = position.split(' ').map(function (s) {
      return s.trim();
    });

    var _position$split$map2 = _slicedToArray(_position$split$map, 2);

    var left = _position$split$map2[0];
    var top = _position$split$map2[1];

    top = top || left;

    return { left: left, top: top };
  }),

  offset: '0 0',

  offsets: computed('offset', function () {
    var offset = this.get('offset') || '0 0';

    var _offset$split$map$map = offset.split(' ').map(function (s) {
      return s.trim();
    }).map(parseFloat);

    var _offset$split$map$map2 = _slicedToArray(_offset$split$map$map, 2);

    var left = _offset$split$map$map2[0];
    var top = _offset$split$map$map2[1];

    top = top || left;

    return { left: left, top: top };
  }),

  // EBD passes `dropdown` as options
  // that var is `this` component itself
  calculatePosition: function calculatePosition(trigger, dropdownEl, _ref) {
    var dropdown = _ref.dropdown;

    var containerNode = dropdownEl;
    var openMenuNode = dropdownEl.firstElementChild;
    var openMenuNodeRect = openMenuNode.getBoundingClientRect();
    var boundryNode = document.body;
    var boundryNodeRect = boundryNode.getBoundingClientRect();

    var menuStyle = window.getComputedStyle(openMenuNode);

    var originNode = trigger.querySelector('.md-menu-origin') || trigger.querySelector('md-icon') || trigger;
    var originNodeRect = originNode.getBoundingClientRect();

    var bounds = {
      left: boundryNodeRect.left + MENU_EDGE_MARGIN,
      top: Math.max(boundryNodeRect.top, 0) + MENU_EDGE_MARGIN,
      bottom: Math.max(boundryNodeRect.bottom, Math.max(boundryNodeRect.top, 0) + boundryNodeRect.height) - MENU_EDGE_MARGIN,
      right: boundryNodeRect.right - MENU_EDGE_MARGIN
    };

    var alignTarget = undefined;
    var alignTargetRect = { top: 0, left: 0, right: 0, bottom: 0 };
    var existingOffsets = { top: 0, left: 0, right: 0, bottom: 0 };
    var positionMode = dropdown.get('positionMode');

    if (positionMode.top === 'target' || positionMode.left === 'target' || positionMode.left === 'target-right') {
      alignTarget = firstVisibleChild(openMenuNode);
      if (alignTarget) {
        // TODO: Allow centering on an arbitrary node, for now center on first menu-item's child
        alignTarget = alignTarget.firstElementChild || alignTarget;
        alignTarget = alignTarget.querySelector('md-icon') || alignTarget.querySelector('.md-menu-align-target') || alignTarget;
        alignTargetRect = alignTarget.getBoundingClientRect();

        existingOffsets = {
          top: parseFloat(containerNode.style.top || 0),
          left: parseFloat(containerNode.style.left || 0)
        };
      }
    }

    var position = {};
    var transformOrigin = 'top ';

    switch (positionMode.top) {
      case 'target':
        position.top = existingOffsets.top + originNodeRect.top - alignTargetRect.top;
        break;
      case 'cascade':
        position.top = originNodeRect.top - parseFloat(menuStyle.paddingTop) - originNode.style.top;
        break;
      case 'bottom':
        position.top = originNodeRect.top + originNodeRect.height;
        break;
      default:
        assert('Invalid target mode \'' + positionMode.top + '\' specified for paper-menu on Y axis.');
    }

    switch (positionMode.left) {
      case 'target':
        position.left = existingOffsets.left + originNodeRect.left - alignTargetRect.left;
        transformOrigin += 'left';
        break;
      case 'target-left':
        position.left = originNodeRect.left;
        transformOrigin += 'left';
        break;
      case 'target-right':
        position.left = originNodeRect.right - openMenuNodeRect.width + (openMenuNodeRect.right - alignTargetRect.right);
        transformOrigin += 'right';
        break;
      case 'cascade':
        var willFitRight = originNodeRect.right + openMenuNodeRect.width < bounds.right;
        position.left = willFitRight ? originNodeRect.right - originNode.style.left : originNodeRect.left - originNode.style.left - openMenuNodeRect.width;
        transformOrigin += willFitRight ? 'left' : 'right';
        break;
      case 'right':
        position.left = originNodeRect.right - openMenuNodeRect.width;
        transformOrigin += 'right';
        break;
      case 'left':
        position.left = originNodeRect.left;
        transformOrigin += 'left';
        break;
      default:
        assert('Invalid target mode \'' + positionMode.left + '\' specified for paper-menu on X axis.');
    }

    // sum offsets
    var offsets = dropdown.get('offsets');
    position.top += offsets.top;
    position.left += offsets.left;

    clamp(position, bounds, containerNode);

    var dropdownTop = Math.round(position.top);
    var dropdownLeft = Math.round(position.left);

    var scaleX = Math.round(100 * Math.min(originNodeRect.width / containerNode.offsetWidth, 1.0)) / 100;
    var scaleY = Math.round(100 * Math.min(originNodeRect.height / containerNode.offsetHeight, 1.0)) / 100;

    var style = {
      top: dropdownTop,
      left: dropdownLeft,
      // Animate a scale out if we aren't just repositioning
      transform: !dropdown.didAnimateScale ? 'scale(' + scaleX + ', ' + scaleY + ')' : undefined,
      transformOrigin: transformOrigin
    };

    dropdown.setProperties({
      transform: !dropdown.didAnimateScale ? 'scale(' + scaleX + ', ' + scaleY + ')' : undefined,
      transformOrigin: transformOrigin
    });

    dropdown.didAnimateScale = true;

    return { style: style, horizontalPosition: '', verticalPosition: '' };
  }
});