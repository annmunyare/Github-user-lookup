define('ember-basic-dropdown/components/basic-dropdown', ['exports', 'ember', 'ember-component', 'ember-metal/set', 'jquery', 'ember-basic-dropdown/templates/components/basic-dropdown', 'ember-runloop', 'ember-basic-dropdown/utils/computed-fallback-if-undefined', 'ember-basic-dropdown/utils/calculate-position'], function (exports, _ember, _emberComponent, _emberMetalSet, _jquery, _emberBasicDropdownTemplatesComponentsBasicDropdown, _emberRunloop, _emberBasicDropdownUtilsComputedFallbackIfUndefined, _emberBasicDropdownUtilsCalculatePosition) {
  'use strict';

  var guidFor = _ember['default'].guidFor;

  var assign = Object.assign || function EmberAssign(original) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < args.length; i++) {
      var arg = args[i];
      if (!arg) {
        continue;
      }
      var updates = Object.keys(arg);

      for (var _i = 0; _i < updates.length; _i++) {
        var prop = updates[_i];
        original[prop] = arg[prop];
      }
    }

    return original;
  };

  exports['default'] = _emberComponent['default'].extend({
    layout: _emberBasicDropdownTemplatesComponentsBasicDropdown['default'],
    tagName: '',
    renderInPlace: (0, _emberBasicDropdownUtilsComputedFallbackIfUndefined['default'])(false),
    verticalPosition: (0, _emberBasicDropdownUtilsComputedFallbackIfUndefined['default'])('auto'), // above | below
    horizontalPosition: (0, _emberBasicDropdownUtilsComputedFallbackIfUndefined['default'])('auto'), // right | center | left
    matchTriggerWidth: (0, _emberBasicDropdownUtilsComputedFallbackIfUndefined['default'])(false),
    triggerComponent: (0, _emberBasicDropdownUtilsComputedFallbackIfUndefined['default'])('basic-dropdown/trigger'),
    contentComponent: (0, _emberBasicDropdownUtilsComputedFallbackIfUndefined['default'])('basic-dropdown/content'),
    calculatePosition: (0, _emberBasicDropdownUtilsComputedFallbackIfUndefined['default'])(_emberBasicDropdownUtilsCalculatePosition.calculatePosition),
    calculateInPlacePosition: (0, _emberBasicDropdownUtilsComputedFallbackIfUndefined['default'])(_emberBasicDropdownUtilsCalculatePosition.calculateInPlacePosition),
    classNames: ['ember-basic-dropdown'],
    top: null,
    left: null,
    right: null,
    width: null,

    // Lifecycle hooks
    init: function init() {
      if (this.get('renderInPlace') && this.get('tagName') === '') {
        this.set('tagName', 'div');
      }
      this._super.apply(this, arguments);
      this.set('publicAPI', {});

      var publicAPI = this.updateState({
        uniqueId: guidFor(this),
        isOpen: this.get('initiallyOpened') || false,
        disabled: this.get('disabled') || false,
        actions: {
          open: this.open.bind(this),
          close: this.close.bind(this),
          toggle: this.toggle.bind(this),
          reposition: this.reposition.bind(this)
        }
      });

      this.triggerId = this.triggerId || 'ember-basic-dropdown-trigger-' + publicAPI.uniqueId;
      this.dropdownId = this.dropdownId || 'ember-basic-dropdown-content-' + publicAPI.uniqueId;
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      var oldDisabled = !!this._oldDisabled;
      var newDisabled = !!this.get('disabled');
      this._oldDisabled = newDisabled;
      if (newDisabled && !oldDisabled) {
        (0, _emberRunloop.join)(this, this.disable);
      } else if (!newDisabled && oldDisabled) {
        (0, _emberRunloop.join)(this, this.enable);
      }
    },

    willDestroy: function willDestroy() {
      this._super.apply(this, arguments);
      var registerAPI = this.get('registerAPI');
      if (registerAPI) {
        registerAPI(null);
      }
    },

    // Actions
    actions: {
      handleFocus: function handleFocus(e) {
        var onFocus = this.get('onFocus');
        if (onFocus) {
          onFocus(this.get('publicAPI'), e);
        }
      }
    },

    // Methods
    open: function open(e) {
      if (this.get('isDestroyed')) {
        return;
      }
      var publicAPI = this.get('publicAPI');
      if (publicAPI.disabled || publicAPI.isOpen) {
        return;
      }
      var onOpen = this.get('onOpen');
      if (onOpen && onOpen(publicAPI, e) === false) {
        return;
      }
      this.updateState({ isOpen: true });
    },

    close: function close(e, skipFocus) {
      if (this.get('isDestroyed')) {
        return;
      }
      var publicAPI = this.get('publicAPI');
      if (publicAPI.disabled || !publicAPI.isOpen) {
        return;
      }
      var onClose = this.get('onClose');
      if (onClose && onClose(publicAPI, e) === false) {
        return;
      }
      this.setProperties({ hPosition: null, vPosition: null, top: null, left: null, right: null, width: null });
      this.previousVerticalPosition = this.previousHorizontalPosition = null;
      this.updateState({ isOpen: false });
      if (skipFocus) {
        return;
      }
      var trigger = document.getElementById(this.triggerId);
      if (trigger && trigger.tabIndex > -1) {
        trigger.focus();
      }
    },

    toggle: function toggle(e) {
      if (this.get('publicAPI.isOpen')) {
        this.close(e);
      } else {
        this.open(e);
      }
    },

    reposition: function reposition() {
      if (!this.get('publicAPI.isOpen')) {
        return;
      }
      var dropdownElement = self.document.getElementById(this.dropdownId);
      var triggerElement = self.document.getElementById(this.triggerId);
      if (!dropdownElement || !triggerElement) {
        return;
      }

      var calculatePosition = this.get(this.get('renderInPlace') ? 'calculateInPlacePosition' : 'calculatePosition');
      var options = this.getProperties('horizontalPosition', 'verticalPosition', 'matchTriggerWidth', 'previousHorizontalPosition', 'previousVerticalPosition');
      options.dropdown = this;
      var positionData = calculatePosition(triggerElement, dropdownElement, options);
      return this.applyReposition(triggerElement, dropdownElement, positionData);
    },

    applyReposition: function applyReposition(trigger, dropdown, positions) {
      var changes = {
        hPosition: positions.horizontalPosition,
        vPosition: positions.verticalPosition
      };
      if (positions.style) {
        changes.top = positions.style.top + 'px';
        // The component can be aligned from the right or from the left, but not from both.
        if (positions.style.left !== undefined) {
          changes.left = positions.style.left + 'px';
          changes.right = null;
        } else if (positions.style.right !== undefined) {
          changes.right = positions.style.right + 'px';
          changes.left = null;
        }
        if (positions.style.width !== undefined) {
          changes.width = positions.style.width + 'px';
        }
        if (this.get('top') === null) {
          // Bypass Ember on the first reposition only to avoid flickering.
          (0, _jquery['default'])(dropdown).css(positions.style);
        }
      }
      this.setProperties(changes);
      this.previousHorizontalPosition = positions.horizontalPosition;
      this.previousVerticalPosition = positions.verticalPosition;
      return changes;
    },

    disable: function disable() {
      var publicAPI = this.get('publicAPI');
      if (publicAPI.isOpen) {
        publicAPI.actions.close();
      }
      this.updateState({ disabled: true });
    },

    enable: function enable() {
      this.updateState({ disabled: false });
    },

    updateState: function updateState(changes) {
      var newState = (0, _emberMetalSet['default'])(this, 'publicAPI', assign({}, this.get('publicAPI'), changes));
      var registerAPI = this.get('registerAPI');
      if (registerAPI) {
        registerAPI(newState);
      }
      return newState;
    }
  });
});