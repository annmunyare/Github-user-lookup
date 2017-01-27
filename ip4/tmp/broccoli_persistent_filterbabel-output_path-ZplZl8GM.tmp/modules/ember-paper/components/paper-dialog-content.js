/**
 * @module ember-paper
 */
import Ember from 'ember';
import PaperDialogInner from './paper-dialog-inner';

var Component = Ember.Component;
var computed = Ember.computed;
var run = Ember.run;

/**
 * @class PaperDialogComponent
 * @extends Ember.Component
 */
export default Component.extend({
  tagName: 'md-dialog-content',
  classNames: ['md-dialog-content'],

  dialogInnerComponent: computed(function () {
    return this.nearestOfType(PaperDialogInner);
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