define('ember-paper/components/paper-card-actions', ['exports', 'ember', 'ember-paper/templates/components/paper-card-actions'], function (exports, _ember, _emberPaperTemplatesComponentsPaperCardActions) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperCardActions
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperCardActions['default'],
    tagName: 'md-card-actions',
    classNameBindings: ['defaultClasses'],

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);

      // if the consumer didn't set layout classes, we should set them
      // to the default (layout = row, layout align = end center)
      var providedClasses = this.get('class');

      if (!providedClasses || providedClasses.indexOf('layout-') === -1) {
        this.set('defaultClasses', 'layout-row layout-align-end-center');
      }
    }
  });
});