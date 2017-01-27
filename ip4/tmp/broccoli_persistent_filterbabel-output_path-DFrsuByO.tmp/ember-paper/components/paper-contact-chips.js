define('ember-paper/components/paper-contact-chips', ['exports', 'ember-paper/components/paper-chips', 'ember-paper/templates/components/paper-contact-chips'], function (exports, _emberPaperComponentsPaperChips, _emberPaperTemplatesComponentsPaperContactChips) {
  'use strict';

  exports['default'] = _emberPaperComponentsPaperChips['default'].extend({
    layout: _emberPaperTemplatesComponentsPaperContactChips['default'],
    tagName: 'md-contact-chips',
    classNames: ['md-default-theme'],
    requireMatch: true,
    searchField: 'email',
    emailField: 'email',
    nameField: 'name',
    imageField: 'image'
  });
});