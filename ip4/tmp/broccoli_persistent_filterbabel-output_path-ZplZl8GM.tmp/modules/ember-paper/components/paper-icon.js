/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-icon';
import ColorMixin from 'ember-paper/mixins/color-mixin';

var Component = Ember.Component;
var computed = Ember.computed;
var Str = Ember.String;

/**
 * @class PaperIcon
 * @extends Ember.Component
 * @uses ColorMixin
 */
var PaperIconComponent = Component.extend(ColorMixin, {
  layout: layout,
  tagName: 'md-icon',
  classNames: ['paper-icon', 'md-font', 'material-icons', 'md-default-theme'],
  classNameBindings: ['spinClass'],
  attributeBindings: ['aria-label', 'title', 'sizeStyle:style', 'iconClass:md-font-icon'],

  icon: '',
  spin: false,
  reverseSpin: false,

  iconClass: computed('icon', 'positionalIcon', function () {
    var icon = this.getWithDefault('positionalIcon', this.get('icon'));
    return icon;
  }),

  'aria-label': computed.reads('iconClass'),

  spinClass: computed('spin', 'reverseSpin', function () {
    if (this.get('spin')) {
      return 'md-spin';
    } else if (this.get('reverseSpin')) {
      return 'md-spin-reverse';
    }
  }),

  sizeStyle: computed('size', function () {
    var size = this.get('size');

    if (size) {
      return Str.htmlSafe('height: ' + size + 'px; font-size: ' + size + 'px;');
    }
  })
});

PaperIconComponent.reopenClass({
  positionalParams: ['positionalIcon']
});

export default PaperIconComponent;