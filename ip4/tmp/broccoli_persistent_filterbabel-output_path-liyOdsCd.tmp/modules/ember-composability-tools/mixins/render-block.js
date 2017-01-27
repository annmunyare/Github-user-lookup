import Ember from 'ember';
import layout from '../templates/render-block';

var Mixin = Ember.Mixin;
var computed = Ember.computed;
var getOwner = Ember.getOwner;

export default Mixin.create({
  layout: layout,

  fastboot: computed(function () {
    var owner = getOwner(this);
    return owner.lookup('service:fastboot');
  }),
  isFastBoot: computed('fastboot', function () {
    return this.get('fastboot') && this.get('fastboot.isFastBoot');
  }),

  destinationElementTag: 'div',

  // creates a document fragment that will hold the DOM
  destinationElement: computed(function () {
    if (!this.get('isFastBoot')) {
      return document.createElement(this.get('destinationElementTag'));
    }
  })
});