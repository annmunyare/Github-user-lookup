define('ember-paper/components/paper-select-trigger', ['exports', 'ember', 'ember-power-select/components/power-select/trigger', 'ember-paper/templates/components/paper-select-trigger'], function (exports, _ember, _emberPowerSelectComponentsPowerSelectTrigger, _emberPaperTemplatesComponentsPaperSelectTrigger) {
  /**
   * @module ember-paper
   */
  'use strict';

  var computed = _ember['default'].computed;

  /**
   * @class PaperSelectTrigger
   * @extends Ember.Component
   */
  exports['default'] = _emberPowerSelectComponentsPowerSelectTrigger['default'].extend({
    layout: _emberPaperTemplatesComponentsPaperSelectTrigger['default'],
    tagName: 'md-select-value',
    classNames: ['md-select-value'],
    classNameBindings: ['isPlaceholder:md-select-placeholder'],
    isPlaceholder: computed('placeholder', 'label', 'select.selected', function () {
      return (this.get('placeholder') || this.get('label')) && !this.get('select.selected');
    })
  });
});