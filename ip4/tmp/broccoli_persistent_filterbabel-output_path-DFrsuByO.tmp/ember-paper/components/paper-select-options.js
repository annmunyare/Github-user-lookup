define('ember-paper/components/paper-select-options', ['exports', 'ember', 'ember-power-select/components/power-select/options', 'ember-paper/templates/components/paper-select-options'], function (exports, _ember, _emberPowerSelectComponentsPowerSelectOptions, _emberPaperTemplatesComponentsPaperSelectOptions) {
  'use strict';

  var $ = _ember['default'].$;

  exports['default'] = _emberPowerSelectComponentsPowerSelectOptions['default'].extend({
    layout: _emberPaperTemplatesComponentsPaperSelectOptions['default'],
    tagName: 'md-content',
    init: function init() {
      if (this.get('role') === 'group') {
        this.set('tagName', '');
        this.set('attributeBindings', undefined);
      } else if (this.get('searchEnabled')) {
        this.set('tagName', 'md-optgroup');
      }
      this._super.apply(this, arguments);
    },
    didInsertElement: function didInsertElement() {
      var _this = this;

      if (this.get('role') === 'group') {
        return;
      }
      var findOptionAndPerform = function findOptionAndPerform(action, e) {
        var optionItem = $(e.target).closest('[data-option-index]');
        if (!optionItem || !(0 in optionItem)) {
          return;
        }
        if (optionItem.closest('[aria-disabled=true]').length) {
          return;
        } // Abort if the item or an ancestor is disabled
        var optionIndex = optionItem[0].getAttribute('data-option-index');
        action(_this._optionFromIndex(optionIndex), e);
      };
      this.element.addEventListener('mouseup', function (e) {
        return findOptionAndPerform(_this.get('select.actions.choose'), e);
      });
      this.element.addEventListener('mouseover', function (e) {
        return findOptionAndPerform(_this.get('select.actions.highlight'), e);
      });
      if (this.get('isTouchDevice')) {
        this._addTouchEvents();
      }
      if (this.get('role') !== 'group') {
        var select = this.get('select');
        select.actions.scrollTo(select.highlighted);
      }
    }
  });
});