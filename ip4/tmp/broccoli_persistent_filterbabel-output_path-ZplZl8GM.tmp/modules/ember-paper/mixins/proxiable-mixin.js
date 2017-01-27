/**
 * @module ember-paper
 */
import Ember from 'ember';
import { ChildMixin } from 'ember-composability-tools';

var Mixin = Ember.Mixin;
var run = Ember.run;

/**
 * @class ProxiableMixin
 * @uses ChildMixin
 * @extends Ember.Mixin
 */
export default Mixin.create(ChildMixin, {

  classNameBindings: ['secondary:md-secondary'],

  shouldRegister: false,

  registerWithParent: function registerWithParent() {
    run.next(this, this._super);
  },

  mouseDown: function mouseDown() {
    this._super.apply(this, arguments);
    var parentComponent = this.get('parentComponent');
    if (parentComponent) {
      parentComponent.set('mouseActive', true);
      run.later(function () {
        if (parentComponent.isDestroyed) {
          return;
        }
        parentComponent.set('mouseActive', false);
      }, 100);
    }
  },

  focusIn: function focusIn() {
    this._super.apply(this, arguments);
    var parentComponent = this.get('parentComponent');
    if (parentComponent && !parentComponent.get('mouseActive')) {
      parentComponent.set('focused', true);
    }
  },

  focusOut: function focusOut() {
    this._super.apply(this, arguments);
    var parentComponent = this.get('parentComponent');
    if (parentComponent) {
      parentComponent.set('focused', false);
    }
  }
});