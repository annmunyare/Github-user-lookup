import Ember from 'ember';
import layout from '../templates/components/paper-virtual-repeat-scroller';

var Component = Ember.Component;

export default Component.extend({
  layout: layout,
  classNames: ['md-virtual-repeat-scroller'],

  didInsertElement: function didInsertElement() {
    var _this = this;

    this._super.apply(this, arguments);
    this.$().scroll(function (e) {
      _this.get('onScroll')(e);
    });
  },

  willDestroyElement: function willDestroyElement() {
    this._super.apply(this, arguments);
    this.$().off('scroll');
  }
});