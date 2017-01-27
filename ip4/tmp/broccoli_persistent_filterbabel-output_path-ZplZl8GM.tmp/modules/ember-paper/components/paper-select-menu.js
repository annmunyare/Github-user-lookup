/**
 * @module ember-paper
 */
import Ember from 'ember';
import PaperMenu from './paper-menu';
import layout from '../templates/components/paper-select-menu';

var $ = Ember.$;

var SELECT_EDGE_MARGIN = 8;

function getOffsetRect(node) {
  return node ? {
    left: node.offsetLeft,
    top: node.offsetTop,
    width: node.offsetWidth,
    height: node.offsetHeight
  } : { left: 0, top: 0, width: 0, height: 0 };
}

function clamp(min, n, max) {
  return Math.max(min, Math.min(n, max));
}

/**
 * @class PaperSelectMenu
 * @extends Ember.Component
 */
export default PaperMenu.extend({
  layout: layout,

  triggerComponent: 'paper-select-menu-trigger',

  // EBD passes `dropdown` as options
  // that var is `this` component itself
  calculatePosition: function calculatePosition(trigger, dropdownEl, _ref) {
    var dropdown = _ref.dropdown;

    var $dropdown = $(dropdownEl);
    var opts = {
      target: $(trigger),
      parent: $('body'),
      selectEl: $dropdown.find('md-select-menu'),
      contentEl: $dropdown.find('md-content')
    };

    var containerNode = $dropdown.get(0);
    var targetNode = opts.target[0].firstElementChild; // target the label
    var parentNode = opts.parent.get(0);
    var selectNode = opts.selectEl.get(0);
    var contentNode = opts.contentEl.get(0);
    var parentRect = parentNode.getBoundingClientRect();
    var targetRect = targetNode.getBoundingClientRect();
    var shouldOpenAroundTarget = false;
    var bounds = {
      left: parentRect.left + SELECT_EDGE_MARGIN,
      top: SELECT_EDGE_MARGIN,
      bottom: parentRect.height - SELECT_EDGE_MARGIN,
      right: parentRect.width - SELECT_EDGE_MARGIN - (dropdown.get('floatingScrollbars') ? 16 : 0)
    };
    var spaceAvailable = {
      top: targetRect.top - bounds.top,
      left: targetRect.left - bounds.left,
      right: bounds.right - (targetRect.left + targetRect.width),
      bottom: bounds.bottom - (targetRect.top + targetRect.height)
    };
    var maxWidth = parentRect.width - SELECT_EDGE_MARGIN * 2;
    var isScrollable = contentNode.scrollHeight > contentNode.offsetHeight;
    var selectedNode = selectNode.querySelector('md-option[selected]');
    var optionNodes = selectNode.getElementsByTagName('md-option');
    var optgroupNodes = selectNode.getElementsByTagName('md-optgroup');

    var centeredNode = undefined;
    // If a selected node, center around that
    if (selectedNode) {
      centeredNode = selectedNode;
      // If there are option groups, center around the first option group
    } else if (optgroupNodes.length) {
        centeredNode = optgroupNodes[0];
        // Otherwise, center around the first optionNode
      } else if (optionNodes.length) {
          centeredNode = optionNodes[0];
          // In case there are no options, center on whatever's in there... (eg progress indicator)
        } else {
            centeredNode = contentNode.firstElementChild || contentNode;
          }

    if (contentNode.offsetWidth > maxWidth) {
      contentNode.style['max-width'] = maxWidth + 'px';
    }
    if (shouldOpenAroundTarget) {
      contentNode.style['min-width'] = targetRect.width + 'px';
    }

    // Remove padding before we compute the position of the menu

    var focusedNode = centeredNode;
    if ((focusedNode.tagName || '').toUpperCase() === 'MD-OPTGROUP') {
      focusedNode = optionNodes[0] || contentNode.firstElementChild || contentNode;
      centeredNode = focusedNode;
    }

    // Get the selectMenuRect *after* max-width is possibly set above
    containerNode.style.display = 'block';
    var selectMenuRect = selectNode.getBoundingClientRect();
    var centeredRect = getOffsetRect(centeredNode);

    if (centeredNode) {
      var centeredStyle = window.getComputedStyle(centeredNode);
      centeredRect.paddingLeft = parseInt(centeredStyle.paddingLeft, 10) || 0;
      centeredRect.paddingRight = parseInt(centeredStyle.paddingRight, 10) || 0;
    }

    if (isScrollable) {
      var scrollBuffer = contentNode.offsetHeight / 2;
      contentNode.scrollTop = centeredRect.top + centeredRect.height / 2 - scrollBuffer;

      if (spaceAvailable.top < scrollBuffer) {
        contentNode.scrollTop = Math.min(centeredRect.top, contentNode.scrollTop + scrollBuffer - spaceAvailable.top);
      } else if (spaceAvailable.bottom < scrollBuffer) {
        contentNode.scrollTop = Math.max(centeredRect.top + centeredRect.height - selectMenuRect.height, contentNode.scrollTop - scrollBuffer + spaceAvailable.bottom);
      }
    }

    var left = undefined,
        top = undefined,
        transformOrigin = undefined;
    if (shouldOpenAroundTarget) {
      left = targetRect.left;
      top = targetRect.top + targetRect.height;
      transformOrigin = '50% 0';
      if (top + selectMenuRect.height > bounds.bottom) {
        top = targetRect.top - selectMenuRect.height;
        transformOrigin = '50% 100%';
      }
    } else {
      left = targetRect.left + centeredRect.left - centeredRect.paddingLeft + 2;
      top = Math.floor(targetRect.top + targetRect.height / 2 - centeredRect.height / 2 - centeredRect.top + contentNode.scrollTop) + 2;

      transformOrigin = centeredRect.left + targetRect.width / 2 + 'px\n        ' + (centeredRect.top + centeredRect.height / 2 - contentNode.scrollTop) + 'px 0px';

      containerNode.style.minWidth = targetRect.width + centeredRect.paddingLeft + centeredRect.paddingRight + 'px';
    }

    var containerRect = containerNode.getBoundingClientRect();

    var dropdownTop = clamp(bounds.top, top, bounds.bottom - containerRect.height);
    var dropdownLeft = clamp(bounds.left, left, bounds.right - containerRect.width);

    var scaleX = Math.min(targetRect.width / selectMenuRect.width, 1.0);
    var scaleY = Math.min(targetRect.height / selectMenuRect.height, 1.0);
    var style = {
      top: dropdownTop,
      left: dropdownLeft,
      // Animate a scale out if we aren't just repositioning
      transform: !dropdown.didAnimateScale ? 'scale(' + scaleX + ', ' + scaleY + ')' : undefined,
      transformOrigin: transformOrigin
    };

    dropdown.didAnimateScale = true;

    return { style: style, horizontalPosition: '', verticalPosition: '' };
  }
});