define('ember-paper/components/paper-button', ['exports', 'ember', 'ember-paper/templates/components/paper-button', 'ember-paper/mixins/focusable-mixin', 'ember-paper/mixins/ripple-mixin', 'ember-paper/mixins/color-mixin', 'ember-paper/mixins/proxiable-mixin'], function (exports, _ember, _emberPaperTemplatesComponentsPaperButton, _emberPaperMixinsFocusableMixin, _emberPaperMixinsRippleMixin, _emberPaperMixinsColorMixin, _emberPaperMixinsProxiableMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;

  /**
   * @class PaperButton
   * @extends Ember.Component
   * @uses FocusableMixin
   * @uses RippleMixin
   * @uses ColorMixin
   * @uses ProxiableMixin
   */
  exports['default'] = Component.extend(_emberPaperMixinsFocusableMixin['default'], _emberPaperMixinsRippleMixin['default'], _emberPaperMixinsColorMixin['default'], _emberPaperMixinsProxiableMixin['default'], {
    layout: _emberPaperTemplatesComponentsPaperButton['default'],
    tagName: 'button',
    classNames: ['md-default-theme', 'md-button'],
    raised: false,
    iconButton: false,
    fab: computed.reads('mini'), // circular button
    mini: false,
    type: 'button',
    href: null,
    target: null,
    attributeBindings: ['type', 'href', 'target', 'title'],
    classNameBindings: ['raised:md-raised', 'iconButton:md-icon-button', 'fab:md-fab', 'mini:md-mini'],

    // Ripple Overrides
    rippleContainerSelector: null,
    fitRipple: computed.readOnly('iconButton'),
    center: computed.readOnly('iconButton'),
    dimBackground: computed.not('iconButton'),

    init: function init() {
      this._super.apply(this, arguments);
      if (this.get('href')) {
        this.setProperties({
          tagName: 'a',
          type: null
        });
      }
    },

    click: function click(event) {
      this.sendAction('onClick', event);
      // Prevent bubbling, if specified. If undefined, the event will bubble.
      return this.get('bubbles');
    }
  });
});