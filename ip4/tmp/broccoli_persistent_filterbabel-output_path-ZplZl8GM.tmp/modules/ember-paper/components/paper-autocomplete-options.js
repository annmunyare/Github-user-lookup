import Ember from 'ember';
import PowerOptions from 'ember-power-select/components/power-select/options';
import layout from '../templates/components/paper-autocomplete-options';

var get = Ember.get;

export default PowerOptions.extend({
  layout: layout,

  _optionFromIndex: function _optionFromIndex(index) {
    var parts = index.split('.');
    var options = this.get('options');
    var option = options[parseInt(parts[0], 10)];
    for (var i = 1; i < parts.length; i++) {
      option = option.options[parseInt(parts[i], 10)];
    }
    return option !== undefined ? get(option, 'raw') : option;
  }
});