define('ember-paper/components/paper-radio-proxiable', ['exports', 'ember-paper/components/paper-radio-base', 'ember-paper/mixins/proxiable-mixin'], function (exports, _emberPaperComponentsPaperRadioBase, _emberPaperMixinsProxiableMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  /**
   * @class PaperRadio
   * @extends PaperRadioBaseComponent
   * @uses ProxiableMixin
   */
  exports['default'] = _emberPaperComponentsPaperRadioBase['default'].extend(_emberPaperMixinsProxiableMixin['default'], {
    processProxy: function processProxy() {
      this.click();
    }
  });
});