define('ember-paper/components/paper-reset-button', ['exports', 'ember-component', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _emberComponent, _emberCssTransitionsMixinsTransitionMixin) {
  'use strict';

  exports['default'] = _emberComponent['default'].extend(_emberCssTransitionsMixinsTransitionMixin['default'], {
    tagName: 'button',
    attributeBindings: ['tabindex'],
    transitionClass: 'ng',
    onReset: null,

    mouseUp: function mouseUp(e) {
      var onReset = this.get('onReset');
      if (onReset === null) {
        return;
      }
      onReset(e);
    }

  });
});