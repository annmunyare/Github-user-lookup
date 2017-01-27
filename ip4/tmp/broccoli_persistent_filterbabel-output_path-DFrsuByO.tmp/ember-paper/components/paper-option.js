define('ember-paper/components/paper-option', ['exports', 'ember', 'ember-paper/templates/components/paper-option', 'ember-paper/components/paper-menu-item', 'ember-paper/mixins/ripple-mixin'], function (exports, _ember, _emberPaperTemplatesComponentsPaperOption, _emberPaperComponentsPaperMenuItem, _emberPaperMixinsRippleMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var computed = _ember['default'].computed;

  /**
   * @class PaperOption
   * @extends PaperMenuItem
   * @uses RippleMixin
   */
  exports['default'] = _emberPaperComponentsPaperMenuItem['default'].extend(_emberPaperMixinsRippleMixin['default'], {
    layout: _emberPaperTemplatesComponentsPaperOption['default'],
    tagName: 'md-option',
    attributeBindings: ['aria-selected', 'aria-disabled', 'aria-current', 'data-option-index', 'role', 'selected', 'tabindex'],
    rippleContainerSelector: null,
    tabindex: '0',
    fitRipple: computed.readOnly('isIconButton'),
    center: computed.readOnly('isIconButton'),
    dimBackground: computed.not('isIconButton')
  });
});