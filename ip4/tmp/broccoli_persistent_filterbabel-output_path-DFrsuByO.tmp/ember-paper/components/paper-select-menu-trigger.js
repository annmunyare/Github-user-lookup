define('ember-paper/components/paper-select-menu-trigger', ['exports', 'ember', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _ember, _emberBasicDropdownComponentsBasicDropdownTrigger) {
  'use strict';

  var computed = _ember['default'].computed;

  exports['default'] = _emberBasicDropdownComponentsBasicDropdownTrigger['default'].extend({
    tagName: 'md-select',
    attributeBindings: ['disabledAttr:disabled', 'required'],
    disabledAttr: computed('disabled', function () {
      return this.get('disabled') ? 'disabled' : null;
    })
  });
});