/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-toolbar';
import ColorMixin from 'ember-paper/mixins/color-mixin';

var Component = Ember.Component;

/**
 * @class PaperToolbar
 * @extends Ember.Component
 * @uses ColorMixin
 */
export default Component.extend(ColorMixin, {
  layout: layout,
  tagName: 'md-toolbar',
  classNames: ['md-default-theme'],
  tall: false,
  classNameBindings: ['tall:md-tall']
});