import layout from '../../templates/components/basic-dropdown/trigger';
import $ from 'jquery';
import Component from 'ember-component';
import computed from 'ember-computed';

var isTouchDevice = !!self.window && 'ontouchstart' in self.window;

function trueStringIfPresent(path) {
  return computed(path, function () {
    if (this.get(path)) {
      return 'true';
    } else {
      return null;
    }
  });
}

export default Component.extend({
  layout: layout,
  isTouchDevice: isTouchDevice,
  classNames: ['ember-basic-dropdown-trigger'],
  role: 'button',
  tabindex: 0,
  'aria-haspopup': true,
  classNameBindings: ['inPlaceClass', 'hPositionClass', 'vPositionClass'],
  attributeBindings: ['role', 'tabIndex:tabindex', 'dropdownId:aria-controls', 'ariaLabel:aria-label', 'ariaLabelledBy:aria-labelledby', 'ariaDescribedBy:aria-describedby', 'aria-disabled', 'aria-expanded', 'aria-haspopup', 'aria-invalid', 'aria-pressed', 'aria-required', 'title'],

  // Lifecycle hooks
  init: function init() {
    var _this = this;

    this._super.apply(this, arguments);
    var dropdown = this.get('dropdown');
    this.elementId = 'ember-basic-dropdown-trigger-' + dropdown.uniqueId;
    this.dropdownId = this.dropdownId || 'ember-basic-dropdown-content-' + dropdown.uniqueId;
    this._touchMoveHandler = this._touchMoveHandler.bind(this);
    this._mouseupHandler = function () {
      self.document.body.removeEventListener('mouseup', _this._mouseupHandler, true);
      $(self.document.body).removeClass('ember-basic-dropdown-text-select-disabled');
    };
  },

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    this.addMandatoryHandlers();
    this.addOptionalHandlers();
  },

  willDestroyElement: function willDestroyElement() {
    this._super.apply(this, arguments);
    self.document.body.removeEventListener('touchmove', this._touchMoveHandler);
    self.document.body.removeEventListener('mouseup', this._mouseupHandler, true);
  },

  // CPs
  'aria-disabled': trueStringIfPresent('dropdown.disabled'),
  'aria-expanded': trueStringIfPresent('dropdown.isOpen'),
  'aria-invalid': trueStringIfPresent('ariaInvalid'),
  'aria-pressed': trueStringIfPresent('dropdown.isOpen'),
  'aria-required': trueStringIfPresent('ariaRequired'),

  tabIndex: computed('dropdown.disabled', 'tabindex', function () {
    var tabindex = this.get('tabindex');
    if (tabindex === false || this.get('dropdown.disabled')) {
      return undefined;
    } else {
      return tabindex || 0;
    }
  }).readOnly(),

  inPlaceClass: computed('renderInPlace', function () {
    if (this.get('renderInPlace')) {
      return 'ember-basic-dropdown-trigger--in-place';
    }
  }),

  hPositionClass: computed('hPosition', function () {
    var hPosition = this.get('hPosition');
    if (hPosition) {
      return 'ember-basic-dropdown-trigger--' + hPosition;
    }
  }),

  vPositionClass: computed('vPosition', function () {
    var vPosition = this.get('vPosition');
    if (vPosition) {
      return 'ember-basic-dropdown-trigger--' + vPosition;
    }
  }),

  // Actions
  actions: {
    handleMouseDown: function handleMouseDown(e) {
      if (this.skipHandleMousedown) {
        // Some devises have both touchscreen & mouse, and they are not mutually exclusive
        // In those cases the touchdown handler is fired first, and it sets a flag to
        // short-circuit the mouseup so the component is not opened and immediately closed.
        this.skipHandleMousedown = false;
        return;
      }
      var dropdown = this.get('dropdown');
      if (dropdown.disabled) {
        return;
      }
      this.stopTextSelectionUntilMouseup();
      // execute user-supplied onMouseDown function before default toggle action;
      // short-circuit default behavior if user-supplied function returns `false`
      var onMouseDown = this.get('onMouseDown');
      if (onMouseDown && onMouseDown(dropdown, e) === false) {
        return;
      }
      dropdown.actions.toggle(e);
    },

    handleTouchEnd: function handleTouchEnd(e) {
      this.skipHandleMousedown = true;
      var dropdown = this.get('dropdown');
      if (e && e.defaultPrevented || dropdown.disabled) {
        return;
      }
      if (!this.hasMoved) {
        // execute user-supplied onTouchEnd function before default toggle action;
        // short-circuit default behavior if user-supplied function returns `false`
        var onTouchEnd = this.get('onTouchEnd');
        if (onTouchEnd && onTouchEnd(dropdown, e) === false) {
          return;
        }
        dropdown.actions.toggle(e);
      }
      this.hasMoved = false;
      self.document.body.removeEventListener('touchmove', this._touchMoveHandler);
      // This next three lines are stolen from hammertime. This prevents the default
      // behaviour of the touchend, but synthetically trigger a focus and a (delayed) click
      // to simulate natural behaviour.
      e.target.focus();
      setTimeout(function () {
        e.target.click();
      }, 0);
      e.preventDefault();
    },

    handleKeyDown: function handleKeyDown(e) {
      var dropdown = this.get('dropdown');
      if (dropdown.disabled) {
        return;
      }
      var onKeyDown = this.get('onKeyDown');
      if (onKeyDown && onKeyDown(dropdown, e) === false) {
        return;
      }
      if (e.keyCode === 13) {
        // Enter
        dropdown.actions.toggle(e);
      } else if (e.keyCode === 32) {
        // Space
        e.preventDefault(); // prevents the space to trigger a scroll page-next
        dropdown.actions.toggle(e);
      } else if (e.keyCode === 27) {
        dropdown.actions.close(e);
      }
    }
  },

  // Methods
  _touchMoveHandler: function _touchMoveHandler() {
    this.hasMoved = true;
    self.document.body.removeEventListener('touchmove', this._touchMoveHandler);
  },

  stopTextSelectionUntilMouseup: function stopTextSelectionUntilMouseup() {
    self.document.body.addEventListener('mouseup', this._mouseupHandler, true);
    $(self.document.body).addClass('ember-basic-dropdown-text-select-disabled');
  },

  addMandatoryHandlers: function addMandatoryHandlers() {
    var _this2 = this;

    if (this.get('isTouchDevice')) {
      this.element.addEventListener('touchstart', function () {
        self.document.body.addEventListener('touchmove', _this2._touchMoveHandler);
      });
      this.element.addEventListener('touchend', function (e) {
        return _this2.send('handleTouchEnd', e);
      });
    }
    this.element.addEventListener('mousedown', function (e) {
      return _this2.send('handleMouseDown', e);
    });
    this.element.addEventListener('keydown', function (e) {
      return _this2.send('handleKeyDown', e);
    });
  },

  addOptionalHandlers: function addOptionalHandlers() {
    var dropdown = this.get('dropdown');
    var onMouseEnter = this.get('onMouseEnter');
    if (onMouseEnter) {
      this.element.addEventListener('mouseenter', function (e) {
        return onMouseEnter(dropdown, e);
      });
    }
    var onMouseLeave = this.get('onMouseLeave');
    if (onMouseLeave) {
      this.element.addEventListener('mouseleave', function (e) {
        return onMouseLeave(dropdown, e);
      });
    }
    var onFocus = this.get('onFocus');
    if (onFocus) {
      this.element.addEventListener('focus', function (e) {
        return onFocus(dropdown, e);
      });
    }
    var onBlur = this.get('onBlur');
    if (onBlur) {
      this.element.addEventListener('blur', function (e) {
        return onBlur(dropdown, e);
      });
    }
    var onFocusIn = this.get('onFocusIn');
    if (onFocusIn) {
      this.element.addEventListener('focusin', function (e) {
        return onFocusIn(dropdown, e);
      });
    }
    var onFocusOut = this.get('onFocusOut');
    if (onFocusOut) {
      this.element.addEventListener('focusout', function (e) {
        return onFocusOut(dropdown, e);
      });
    }
  }
});