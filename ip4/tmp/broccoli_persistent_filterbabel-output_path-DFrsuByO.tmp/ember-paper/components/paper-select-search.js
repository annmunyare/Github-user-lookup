define('ember-paper/components/paper-select-search', ['exports', 'ember-power-select/components/power-select/before-options', 'ember-paper/templates/components/paper-select-search'], function (exports, _emberPowerSelectComponentsPowerSelectBeforeOptions, _emberPaperTemplatesComponentsPaperSelectSearch) {
  'use strict';

  exports['default'] = _emberPowerSelectComponentsPowerSelectBeforeOptions['default'].extend({
    layout: _emberPaperTemplatesComponentsPaperSelectSearch['default']
  });
});