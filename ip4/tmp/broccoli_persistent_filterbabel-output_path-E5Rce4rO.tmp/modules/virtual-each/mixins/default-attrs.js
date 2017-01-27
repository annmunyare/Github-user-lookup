import Ember from 'ember';

export default Ember.Mixin.create({
  init: function init() {
    this._super.apply(this, arguments);

    if (!this.defaultAttrs) {
      this.defaultAttrs = {};
    }
  },

  getAttr: function getAttr(attrName) {
    var value = this._super.apply(this, arguments);

    if (typeof value === 'undefined') {
      return this.defaultAttrs[attrName];
    }

    return value;
  }
});