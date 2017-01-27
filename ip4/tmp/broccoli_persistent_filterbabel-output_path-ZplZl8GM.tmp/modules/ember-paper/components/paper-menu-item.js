/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-menu-item';
import ChildMixin from 'ember-paper/mixins/child-mixin';

var Component = Ember.Component;

/**
 * @class PaperMenuItem
 * @extends Ember.Component
 * @uses ChildMixin
 */
export default Component.extend(ChildMixin, {
  layout: layout,
  tagName: 'md-menu-item',
  disabled: false,

  actions: {
    handleClick: function handleClick(event) {
      this.get('dropdown.actions').close();
      this.sendAction('onClick', event);
    }
  },
  mouseEnter: function mouseEnter() {
    if (!this.get('disabled')) {
      this.$('button').focus();
    }
  }

});