/**
 * @module ember-paper
 */
import Ember from 'ember';
import ParentMixin from 'ember-paper/mixins/parent-mixin';

var Mixin = Ember.Mixin;
var computed = Ember.computed;

/**
 * @class ChildMixin
 * @extends Ember.Mixin
 */
export default Mixin.create({

  // override to look for a specific parent class
  parentClass: ParentMixin,

  // this will typically be overriden when yielding a contextual component
  parentComponent: computed(function () {
    return this.nearestOfType(this.get('parentClass'));
  }),

  init: function init() {
    this._super.apply(this, arguments);
    if (this.get('parentComponent')) {
      this.get('parentComponent').register(this);
    }
  },

  willDestroyElement: function willDestroyElement() {
    this._super.apply(this, arguments);
    if (this.get('parentComponent')) {
      this.get('parentComponent').unregister(this);
    }
  }
});