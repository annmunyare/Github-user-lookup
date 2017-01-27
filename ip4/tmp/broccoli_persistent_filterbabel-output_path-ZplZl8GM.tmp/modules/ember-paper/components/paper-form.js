/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-form';
import ParentMixin from 'ember-paper/mixins/parent-mixin';

var Component = Ember.Component;
var computed = Ember.computed;

/**
 * @class PaperForm
 * @extends Ember.Component
 * @uses ParentMixin
 */
export default Component.extend(ParentMixin, {
  layout: layout,
  tagName: '',
  isValid: computed.not('isInvalid'),
  isInvalid: computed('childComponents.@each.isInvalid', function () {
    return this.get('childComponents').isAny('isInvalid');
  }),
  actions: {
    onValidityChange: function onValidityChange() {
      if (this.get('lastIsValid') !== this.get('isValid')) {
        this.sendAction('onValidityChange', this.get('isValid'));
        this.set('lastIsValid', this.get('isValid'));
      }
    },
    onSubmit: function onSubmit() {
      if (this.get('isInvalid')) {
        this.get('childComponents').setEach('isTouched', true);
      } else {
        this.sendAction('onSubmit');
        this.get('childComponents').setEach('isTouched', false);
      }
    }
  }
});