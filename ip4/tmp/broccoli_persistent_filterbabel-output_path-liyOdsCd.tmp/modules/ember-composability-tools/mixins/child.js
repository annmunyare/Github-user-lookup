import Ember from 'ember';
import ParentMixin from './parent';
var Mixin = Ember.Mixin;
var computed = Ember.computed;
var assert = Ember.assert;
var tryInvoke = Ember.tryInvoke;

export default Mixin.create({

  // This is intended as an escape hatch, but ideally you would
  // `{{yield` a child contextual component with `parentComponent=this`
  parentComponent: computed(function () {
    return this.nearestOfType(ParentMixin);
  }),

  init: function init() {
    this._super.apply(this, arguments);
    tryInvoke(this, 'initParent');
    tryInvoke(this, 'initChild');
  },

  initChild: function initChild() {
    this._super.apply(this, arguments);
    this.registerWithParent();
  },

  willDestroyElement: function willDestroyElement() {
    this._super.apply(this, arguments);
    if (!this._isComposableDestroying) {
      this._isComposableDestroying = true;
      tryInvoke(this, 'willDestroyElementParent');
      tryInvoke(this, 'willDestroyElementChild');
    }
  },

  willDestroyElementChild: function willDestroyElementChild() {
    this._super.apply(this, arguments);
    this.unregisterWithParent();
  },

  shouldRegister: true,

  shouldRegisterToParent: function shouldRegisterToParent() /*parentComponent*/{
    return this.get('shouldRegister');
  },

  destroySelfAndChildren: function destroySelfAndChildren() {
    // We may be a child-parent. Destroy children if we can.
    tryInvoke(this, 'destroyChildren');
    tryInvoke(this, 'willDestroyParent');
    this._didInsert = false;
  },

  registerWithParent: function registerWithParent() {
    var parentComponent = this.get('parentComponent');
    if (this.shouldRegisterToParent(parentComponent)) {
      assert('Tried to use ' + this + ' outside the context of a parent component.', parentComponent);
      parentComponent.registerChild(this);
    }
  },

  unregisterWithParent: function unregisterWithParent() {
    var parentComponent = this.get('parentComponent');
    if (parentComponent) {
      parentComponent.unregisterChild(this);
    }
  }

});