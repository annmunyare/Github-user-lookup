define('ember-paper/components/paper-radio', ['exports', 'ember-paper/components/paper-radio-base', 'ember-composability-tools'], function (exports, _emberPaperComponentsPaperRadioBase, _emberComposabilityTools) {
  /**
   * @module ember-paper
   */
  'use strict';

  /**
   * @class PaperRadio
   * @extends PaperRadioBaseComponent
   * @uses ChildMixin
   */
  exports['default'] = _emberPaperComponentsPaperRadioBase['default'].extend(_emberComposabilityTools.ChildMixin, {
    shouldRegister: false
  });
});