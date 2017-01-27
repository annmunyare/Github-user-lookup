define('ember-paper/components/paper-autocomplete-content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content', 'ember-paper/templates/components/paper-autocomplete-content'], function (exports, _emberBasicDropdownComponentsBasicDropdownContent, _emberPaperTemplatesComponentsPaperAutocompleteContent) {
  'use strict';

  exports['default'] = _emberBasicDropdownComponentsBasicDropdownContent['default'].extend({
    layout: _emberPaperTemplatesComponentsPaperAutocompleteContent['default']
  });
});