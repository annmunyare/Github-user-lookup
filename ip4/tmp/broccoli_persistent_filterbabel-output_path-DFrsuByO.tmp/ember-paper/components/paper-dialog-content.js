define('ember-paper/components/paper-dialog-content', ['exports', 'ember', 'ember-paper/components/paper-dialog-inner'], function (exports, _ember, _emberPaperComponentsPaperDialogInner) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var run = _ember['default'].run;

  /**
   * @class PaperDialogComponent
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    tagName: 'md-dialog-content',
    classNames: ['md-dialog-content'],

    dialogInnerComponent: computed(function () {
      return this.nearestOfType(_emberPaperComponentsPaperDialogInner['default']);
    }),

    imagesLoaded: function imagesLoaded() {
      var content = this.get('element');
      this.get('dialogInnerComponent').set('contentOverflow', content.scrollHeight > content.clientHeight);
    },

    didInsertElement: function didInsertElement() {
      // content overflow might change depending on load of images inside dialog.
      var images = this.$().find('img');
      images.on('load', run.bind(this, this.imagesLoaded));
    }
  });
});