define('ember-paper/components/paper-sidenav-inner', ['exports', 'ember', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _ember, _emberCssTransitionsMixinsTransitionMixin) {
  /**
   * @module ember-paper
   */
  /* globals FastBoot */
  'use strict';

  var Component = _ember['default'].Component;
  var inject = _ember['default'].inject;
  var computed = _ember['default'].computed;
  var $ = _ember['default'].$;
  var run = _ember['default'].run;

  /**
   * @class PaperSidenavInner
   * @extends Ember.Component
   * @uses TransitionMixin
   */
  exports['default'] = Component.extend(_emberCssTransitionsMixinsTransitionMixin['default'], {
    tagName: 'md-sidenav',
    attributeBindings: ['tabindex'],
    classNameBindings: ['positionClass'],
    transitionClassNameBindings: ['isLockedOpen:md-locked-open', 'closed:md-closed'],

    constants: inject.service(),
    paperSidenav: inject.service(),

    name: 'default',
    position: 'left',
    lockedOpen: 'gt-sm',
    closed: true,
    closeOnClick: true,
    tabindex: -1,

    positionClass: computed('position', function () {
      return 'md-sidenav-' + this.get('position');
    }),

    init: function init() {
      // need to updateLockedOpen() first because otherwise the transition classes
      // would be applied due to transition mixin's `init`
      if (typeof FastBoot === 'undefined') {
        this.updateLockedOpen();
      }
      this._super.apply(this, arguments);
      this.get('paperSidenav').register(this.get('name'), this);
    },

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      $(window).on('resize.' + this.elementId, run.bind(this, 'updateLockedOpen'));
      this.updateLockedOpen();
    },

    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      $(window).off('resize.' + this.elementId);
      this.get('paperSidenav').unregister(this.get('name'), this);
    },

    updateLockedOpen: function updateLockedOpen() {
      var lockedOpen = this.get('lockedOpen');
      var isLockedOpen = undefined;

      // if `true` or `false` is specified, always/never "lock open"
      // otherwise proceed with normal matchMedia test
      if (typeof lockedOpen === 'boolean') {
        isLockedOpen = lockedOpen;
      } else {
        var mediaQuery = this.get('constants').MEDIA[lockedOpen] || lockedOpen;
        isLockedOpen = window.matchMedia(mediaQuery).matches;
      }

      var coercedIsLockedOpen = !!this.get('isLockedOpen');

      if (coercedIsLockedOpen !== isLockedOpen) {
        this.set('isLockedOpen', isLockedOpen);

        // if sidenav is open and we enter lockedOpen,
        // make the sidenav enter the "closed" state
        if (!this.get('closed') && isLockedOpen) {
          this.sendAction('onToggle', false);
        }
      }
    },

    click: function click() {
      if (this.get('closeOnClick') && !this.get('isLockedOpen')) {
        this.sendAction('onToggle', false);
      }
    },

    open: function open() {
      if (this.get('closed') && this.get('isLockedOpen')) {
        this.sendAction('onToggle', true);
      }
    },

    close: function close() {
      if (!this.get('closed') && !this.get('isLockedOpen')) {
        this.sendAction('onToggle', false);
      }
    },

    toggle: function toggle() {
      if (!this.get('isLockedOpen')) {
        this.sendAction('onToggle', this.get('closed'));
      }
    }
  });
});