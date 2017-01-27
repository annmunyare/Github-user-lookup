define('ember-paper/components/paper-radio-base', ['exports', 'ember', 'ember-paper/templates/components/paper-radio-base', 'ember-paper/mixins/focusable-mixin', 'ember-paper/mixins/ripple-mixin', 'ember-paper/mixins/color-mixin'], function (exports, _ember, _emberPaperTemplatesComponentsPaperRadioBase, _emberPaperMixinsFocusableMixin, _emberPaperMixinsRippleMixin, _emberPaperMixinsColorMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var assert = _ember['default'].assert;

  /**
   * @class PaperRadio
   * @extends Ember.Component
   * @uses FocusableMixin
   * @uses ColorMixin
   * @uses RippleMixin
   */
  exports['default'] = Component.extend(_emberPaperMixinsFocusableMixin['default'], _emberPaperMixinsRippleMixin['default'], _emberPaperMixinsColorMixin['default'], {
    layout: _emberPaperTemplatesComponentsPaperRadioBase['default'],
    tagName: 'md-radio-button',
    classNames: ['md-default-theme'],
    classNameBindings: ['checked:md-checked'],

    tabindex: null,

    toggle: false,

    /* Ripple Overrides */
    rippleContainerSelector: '.md-container',
    center: true,
    dimBackground: false,
    fitRipple: true,

    /* FocusableMixin Overrides */
    focusOnlyOnKey: true,

    // Lifecycle hooks
    init: function init() {
      assert('{{paper-radio}} requires an `onChange` action or null for no action.', this.get('onChange') !== undefined);
      this._super.apply(this, arguments);
    },

    checked: computed('groupValue', 'value', function () {
      return this.get('groupValue') === this.get('value');
    }),

    click: function click() {
      if (!this.get('disabled')) {
        if (this.get('toggle')) {
          this.sendAction('onChange', this.get('checked') ? null : this.get('value'));
        } else {
          this.sendAction('onChange', this.get('value'));
        }
      }
      // Prevent bubbling, if specified. If undefined, the event will bubble.
      return this.get('bubbles');
    }
  });
});