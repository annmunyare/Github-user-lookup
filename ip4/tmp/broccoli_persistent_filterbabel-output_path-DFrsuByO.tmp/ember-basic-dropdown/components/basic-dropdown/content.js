define('ember-basic-dropdown/components/basic-dropdown/content', ['exports', 'ember-component', 'ember-basic-dropdown/templates/components/basic-dropdown/content', 'jquery', 'ember', 'ember-computed', 'ember-runloop', 'ember-string'], function (exports, _emberComponent, _emberBasicDropdownTemplatesComponentsBasicDropdownContent, _jquery, _ember, _emberComputed, _emberRunloop, _emberString) {
  'use strict';

  var testing = _ember['default'].testing;
  var getOwner = _ember['default'].getOwner;

  var MutObserver = self.window.MutationObserver || self.window.WebKitMutationObserver;
  var rAF = self.window.requestAnimationFrame || function (cb) {
    cb();
  };

  function waitForAnimations(element, callback) {
    rAF(function () {
      var computedStyle = self.window.getComputedStyle(element);
      if (computedStyle.animationName !== 'none' && computedStyle.animationPlayState === 'running') {
        (function () {
          var eventCallback = function eventCallback() {
            element.removeEventListener('animationend', eventCallback);
            callback();
          };
          element.addEventListener('animationend', eventCallback);
        })();
      } else {
        callback();
      }
    });
  }

  exports['default'] = _emberComponent['default'].extend({
    layout: _emberBasicDropdownTemplatesComponentsBasicDropdownContent['default'],
    tagName: '',
    animationEnabled: !testing,
    isTouchDevice: !!self.window && 'ontouchstart' in self.window,
    hasMoved: false,
    animationClass: '',
    transitioningInClass: 'ember-basic-dropdown--transitioning-in',
    transitionedInClass: 'ember-basic-dropdown--transitioned-in',
    transitioningOutClass: 'ember-basic-dropdown--transitioning-out',

    // Lifecycle hooks
    init: function init() {
      this._super.apply(this, arguments);
      this.handleRootMouseDown = this.handleRootMouseDown.bind(this);
      this.touchStartHandler = this.touchStartHandler.bind(this);
      this.touchMoveHandler = this.touchMoveHandler.bind(this);
      var dropdown = this.get('dropdown');
      this.triggerId = 'ember-basic-dropdown-trigger-' + dropdown.uniqueId;
      this.dropdownId = 'ember-basic-dropdown-content-' + dropdown.uniqueId;
      if (this.get('animationEnabled')) {
        this.set('animationClass', this.get('transitioningInClass'));
      }
      this.runloopAwareReposition = function () {
        (0, _emberRunloop.join)(dropdown.actions.reposition);
      };
    },

    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      this._teardown();
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      var oldDropdown = this.get('oldDropdown') || {};
      var dropdown = this.get('dropdown');
      if (!oldDropdown.isOpen && dropdown.isOpen) {
        (0, _emberRunloop.scheduleOnce)('afterRender', this, this.open);
      } else if (oldDropdown.isOpen && !dropdown.isOpen) {
        this.close();
      }
      this.set('oldDropdown', dropdown);
    },

    // CPs
    to: (0, _emberComputed['default'])({
      get: function get() {
        return this._getDestinationId();
      },
      set: function set(_, v) {
        return v === undefined ? this._getDestinationId() : v;
      }
    }),

    style: (0, _emberComputed['default'])('top', 'left', 'right', 'width', function () {
      var style = '';

      var _getProperties = this.getProperties('top', 'left', 'right', 'width');

      var top = _getProperties.top;
      var left = _getProperties.left;
      var right = _getProperties.right;
      var width = _getProperties.width;

      if (top) {
        style += 'top: ' + top + ';';
      }
      if (left) {
        style += 'left: ' + left + ';';
      }
      if (right) {
        style += 'right: ' + right + ';';
      }
      if (width) {
        style += 'width: ' + width;
      }
      if (style.length > 0) {
        return (0, _emberString.htmlSafe)(style);
      }
    }),

    // Methods
    open: function open() {
      var dropdown = this.get('dropdown');
      this.triggerElement = this.triggerElement || document.getElementById(this.triggerId);
      this.dropdownElement = document.getElementById(this.dropdownId);
      self.document.body.addEventListener('mousedown', this.handleRootMouseDown, true);
      if (this.get('isTouchDevice')) {
        self.document.body.addEventListener('touchstart', this.touchStartHandler, true);
        self.document.body.addEventListener('touchend', this.handleRootMouseDown, true);
      }
      var onFocusIn = this.get('onFocusIn');
      if (onFocusIn) {
        this.dropdownElement.addEventListener('focusin', function (e) {
          return onFocusIn(dropdown, e);
        });
      }
      var onFocusOut = this.get('onFocusOut');
      if (onFocusOut) {
        this.dropdownElement.addEventListener('focusout', function (e) {
          return onFocusOut(dropdown, e);
        });
      }
      var onMouseEnter = this.get('onMouseEnter');
      if (onMouseEnter) {
        this.dropdownElement.addEventListener('mouseenter', function (e) {
          return onMouseEnter(dropdown, e);
        });
      }
      var onMouseLeave = this.get('onMouseLeave');
      if (onMouseLeave) {
        this.dropdownElement.addEventListener('mouseleave', function (e) {
          return onMouseLeave(dropdown, e);
        });
      }
      var changes = dropdown.actions.reposition();
      if (!this.get('renderInPlace')) {
        this.addGlobalEvents();
        this.startObservingDomMutations();
      } else if (changes.vPosition === 'above') {
        this.startObservingDomMutations();
      }

      if (this.get('animationEnabled')) {
        (0, _emberRunloop.scheduleOnce)('afterRender', this, this.animateIn);
      }
    },

    close: function close() {
      this._teardown();
      if (this.get('animationEnabled')) {
        this.animateOut(this.dropdownElement);
      }
      this.dropdownElement = null;
    },

    // Methods
    handleRootMouseDown: function handleRootMouseDown(e) {
      if (this.hasMoved || this.dropdownElement.contains(e.target) || this.triggerElement && this.triggerElement.contains(e.target)) {
        this.hasMoved = false;
        return;
      }

      var closestDropdown = (0, _jquery['default'])(e.target).closest('.ember-basic-dropdown-content').get(0);
      if (closestDropdown) {
        var trigger = document.querySelector('[aria-controls=' + closestDropdown.attributes.id.value + ']');
        var parentDropdown = (0, _jquery['default'])(trigger).closest('.ember-basic-dropdown-content').get(0);
        if (parentDropdown && parentDropdown.attributes.id.value === this.dropdownId) {
          this.hasMoved = false;
          return;
        }
      }

      this.get('dropdown').actions.close(e, true);
    },

    addGlobalEvents: function addGlobalEvents() {
      self.window.addEventListener('scroll', this.runloopAwareReposition);
      self.window.addEventListener('resize', this.runloopAwareReposition);
      self.window.addEventListener('orientationchange', this.runloopAwareReposition);
    },

    startObservingDomMutations: function startObservingDomMutations() {
      var _this = this;

      if (MutObserver) {
        this.mutationObserver = new MutObserver(function (mutations) {
          if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
            _this.runloopAwareReposition();
          }
        });
        this.mutationObserver.observe(this.dropdownElement, { childList: true, subtree: true });
      } else {
        this.dropdownElement.addEventListener('DOMNodeInserted', this.runloopAwareReposition, false);
        this.dropdownElement.addEventListener('DOMNodeRemoved', this.runloopAwareReposition, false);
      }
    },

    removeGlobalEvents: function removeGlobalEvents() {
      self.window.removeEventListener('scroll', this.runloopAwareReposition);
      self.window.removeEventListener('resize', this.runloopAwareReposition);
      self.window.removeEventListener('orientationchange', this.runloopAwareReposition);
    },

    stopObservingDomMutations: function stopObservingDomMutations() {
      if (MutObserver) {
        if (this.mutationObserver) {
          this.mutationObserver.disconnect();
          this.mutationObserver = null;
        }
      } else {
        if (this.dropdownElement) {
          this.dropdownElement.removeEventListener('DOMNodeInserted', this.runloopAwareReposition);
          this.dropdownElement.removeEventListener('DOMNodeRemoved', this.runloopAwareReposition);
        }
      }
    },

    animateIn: function animateIn() {
      var _this2 = this;

      waitForAnimations(this.dropdownElement, function () {
        _this2.set('animationClass', _this2.get('transitionedInClass'));
      });
    },

    animateOut: function animateOut(dropdownElement) {
      var parentElement = this.get('renderInPlace') ? dropdownElement.parentElement.parentElement : dropdownElement.parentElement;
      var clone = dropdownElement.cloneNode(true);
      clone.id = clone.id + '--clone';
      var $clone = (0, _jquery['default'])(clone);
      var transitioningInClass = this.get('transitioningInClass');
      $clone.removeClass(this.get('transitionedInClass'));
      $clone.removeClass(transitioningInClass);
      $clone.addClass(this.get('transitioningOutClass'));
      parentElement.appendChild(clone);
      this.set('animationClass', transitioningInClass);
      waitForAnimations(clone, function () {
        parentElement.removeChild(clone);
      });
    },

    touchStartHandler: function touchStartHandler() {
      self.document.body.addEventListener('touchmove', this.touchMoveHandler, true);
    },

    touchMoveHandler: function touchMoveHandler() {
      this.hasMoved = true;
      self.document.body.removeEventListener('touchmove', this.touchMoveHandler, true);
    },

    _teardown: function _teardown() {
      this.removeGlobalEvents();
      this.stopObservingDomMutations();
      self.document.body.removeEventListener('mousedown', this.handleRootMouseDown, true);
      if (this.get('isTouchDevice')) {
        self.document.body.removeEventListener('touchstart', this.touchStartHandler, true);
        self.document.body.removeEventListener('touchend', this.handleRootMouseDown, true);
      }
    },

    _getDestinationId: function _getDestinationId() {
      if (testing) {
        return 'ember-testing';
      }
      var config = getOwner(this).resolveRegistration('config:environment');
      return config['ember-basic-dropdown'] && config['ember-basic-dropdown'].destination || 'ember-basic-dropdown-wormhole';
    }
  });
});