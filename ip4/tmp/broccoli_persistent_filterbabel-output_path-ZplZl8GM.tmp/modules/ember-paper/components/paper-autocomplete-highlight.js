/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-autocomplete-highlight';

var Component = Ember.Component;
var computed = Ember.computed;
var htmlSafe = Ember.String.htmlSafe;

/**
 * @class PaperAutocompleteHighlight
 * @extends Ember.Component
 */
export default Component.extend({
  layout: layout,
  tagName: 'span',

  flags: '',

  highlight: computed('searchText', 'label', 'flags', function () {
    var text = '' + this.get('label');
    var flags = this.get('flags');
    var regex = this.getRegExp(this.get('searchText'), flags);

    var html = text.replace(regex, '<span class="highlight">$&</span>');
    return htmlSafe(html);
  }),

  sanitize: function sanitize(term) {
    if (!term) {
      return term;
    }
    return term.replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g, '\\$&');
  },

  getRegExp: function getRegExp(text, flags) {
    var str = '';
    if (flags.indexOf('^') >= 1) {
      str += '^';
    }
    str += text;
    if (flags.indexOf('$') >= 1) {
      str += '$';
    }
    return new RegExp(this.sanitize(str), flags.replace(/[\$\^]/g, ''));
  }

});