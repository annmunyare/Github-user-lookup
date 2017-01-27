define('ember-paper/components/paper-checkbox', ['exports', 'ember', 'ember-paper/templates/components/paper-checkbox', 'ember-paper/mixins/focusable-mixin', 'ember-paper/mixins/ripple-mixin', 'ember-paper/mixins/color-mixin', 'ember-paper/mixins/proxiable-mixin'], function (exports, _ember, _emberPaperTemplatesComponentsPaperCheckbox, _emberPaperMixinsFocusableMixin, _emberPaperMixinsRippleMixin, _emberPaperMixinsColorMixin, _emberPaperMixinsProxiableMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;
  var inject = _ember['default'].inject;
  var assert = _ember['default'].assert;

  /**
   * @class PaperCheckbox
   * @extends Ember.Component
   * @uses FocusableMixin
   * @uses RippleMixin
   * @uses ColorMixin
   * @uses ProxiableMixin
   */
  exports['default'] = Component.extend(_emberPaperMixinsFocusableMixin['default'], _emberPaperMixinsRippleMixin['default'], _emberPaperMixinsColorMixin['default'], _emberPaperMixinsProxiableMixin['default'], {
    layout: _emberPaperTemplatesComponentsPaperCheckbox['default'],
    tagName: 'md-checkbox',
    classNames: ['md-checkbox', 'md-default-theme'],
    classNameBindings: ['value:md-checked'],

    /* RippleMixin Overrides */
    rippleContainerSelector: '.md-container',
    center: true,
    dimBackground: false,
    fitRipple: true,

    /* FocusableMixin Overrides */
    focusOnlyOnKey: true,

    constants: inject.service(),

    value: false,

    init: function init() {
      this._super.apply(this, arguments);
      assert('{{paper-checkbox}} requires an `onChange` action or null for no action.', this.get('onChange') !== undefined);
    },

    click: function click() {
      if (!this.get('disabled')) {
        this.sendAction('onChange', !this.get('value'));
      }
      // Prevent bubbling, if specified. If undefined, the event will bubble.
      return this.get('bubbles');
    },

    keyPress: function keyPress(ev) {
      if (ev.which === this.get('constants.KEYCODE.SPACE') || ev.which === this.get('constants.KEYCODE.ENTER')) {
        ev.preventDefault();
        this.click();
      }
    },

    processProxy: function processProxy() {
      this.sendAction('onChange', !this.get('value'));
    }
  });
});