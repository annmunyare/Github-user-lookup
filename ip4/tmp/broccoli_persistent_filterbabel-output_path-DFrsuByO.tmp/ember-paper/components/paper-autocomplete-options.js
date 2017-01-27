define('ember-paper/components/paper-autocomplete-options', ['exports', 'ember', 'ember-power-select/components/power-select/options', 'ember-paper/templates/components/paper-autocomplete-options'], function (exports, _ember, _emberPowerSelectComponentsPowerSelectOptions, _emberPaperTemplatesComponentsPaperAutocompleteOptions) {
  'use strict';

  var get = _ember['default'].get;

  exports['default'] = _emberPowerSelectComponentsPowerSelectOptions['default'].extend({
    layout: _emberPaperTemplatesComponentsPaperAutocompleteOptions['default'],

    _optionFromIndex: function _optionFromIndex(index) {
      var parts = index.split('.');
      var options = this.get('options');
      var option = options[parseInt(parts[0], 10)];
      for (var i = 1; i < parts.length; i++) {
        option = option.options[parseInt(parts[i], 10)];
      }
      return option !== undefined ? get(option, 'raw') : option;
    }
  });
});