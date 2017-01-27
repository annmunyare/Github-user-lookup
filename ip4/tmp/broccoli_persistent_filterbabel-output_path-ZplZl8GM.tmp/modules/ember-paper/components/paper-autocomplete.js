/**
 * @module ember-paper
 */
import Ember from 'ember';
import PowerSelect from 'ember-power-select/components/power-select';
import layout from '../templates/components/paper-autocomplete';
import ValidationMixin from 'ember-paper/mixins/validation-mixin';
import ChildMixin from 'ember-paper/mixins/child-mixin';
import { indexOfOption } from 'ember-power-select/utils/group-utils';

var assert = Ember.assert;
var computed = Ember.computed;
var inject = Ember.inject;
var isNone = Ember.isNone;
var defineProperty = Ember.defineProperty;

/**
 * @class PaperAutocomplete
 * @extends PowerSelectComponent
 */
export default PowerSelect.extend(ValidationMixin, ChildMixin, {
  layout: layout,
  util: inject.service(),
  constants: inject.service(),
  triggerComponent: 'paper-autocomplete-trigger',
  contentComponent: 'paper-autocomplete-content',
  optionsComponent: 'paper-autocomplete-options',
  concatenatedDropdownClasses: ['md-autocomplete-suggestions-container md-virtual-repeat-container'],

  extra: computed('labelPath', 'label', function () {
    return this.getProperties('label', 'labelPath');
  }),
  onfocus: computed.alias('onFocus'),
  onblur: computed.alias('onBlur'),
  onchange: null,
  oninput: null,
  validationProperty: computed('onSearchTextChange', 'onSelectionChange', function () {
    if (this.get('onSearchTextChange')) {
      return 'searchText';
    } else {
      return 'selected';
    }
  }),
  searchText: '',
  _onChangeNop: function _onChangeNop() {},

  // Don't automatically highlight any option
  defaultHighlighted: null,

  init: function init() {
    this._initComponent();
    this._super.apply(this, arguments);
  },

  // Init autocomplete component
  _initComponent: function _initComponent() {
    var _getProperties = this.getProperties('onSearchTextChange', 'onSelectionChange');

    var onSearchTextChange = _getProperties.onSearchTextChange;
    var onSelectionChange = _getProperties.onSelectionChange;

    var hasTextChange = onSearchTextChange && typeof onSearchTextChange === 'function';
    var hasSelectionChange = onSelectionChange && typeof onSelectionChange === 'function';

    assert('{{paper-autocomplete}} requires at least one of the `onSelectionChange` or `onSearchTextChange` functions to be provided.', hasTextChange || hasSelectionChange);

    var aliasOnChangeDepKey = hasSelectionChange ? 'onSelectionChange' : '_onChangeNop';
    defineProperty(this, 'oninput', computed.alias('onSearchTextChange'));
    defineProperty(this, 'onchange', computed.alias(aliasOnChangeDepKey));
  },

  // Choose highlighted item on key tab
  _handleKeyTab: function _handleKeyTab(e) {
    var publicAPI = this.get('publicAPI');
    if (publicAPI.isOpen && !isNone(publicAPI.highlighted)) {
      publicAPI.actions.choose(publicAPI.highlighted, e);
    }
    // e-p-s will close
    this._super.apply(this, arguments);
  },

  actions: {

    onFocus: function onFocus(event) {
      this.send('activate');
      var publicAPI = this.get('publicAPI');

      if (isNone(publicAPI.selected)) {
        publicAPI.actions.open(event);
      }

      var action = this.get('onfocus');
      if (action) {
        action(publicAPI, event);
      }
    },

    onBlur: function onBlur(event) {
      this.send('deactivate');
      var action = this.get('onblur');

      if (action) {
        action(this.get('publicAPI'), event);
      }
      this.notifyValidityChange();
    },

    onInput: function onInput(event) {
      var publicAPI = this.get('publicAPI');

      if (!publicAPI.isOpen && event.type !== 'change') {
        publicAPI.actions.open(event);
      }

      this.notifyValidityChange();
      return this._super.apply(this, arguments);
    },

    onCreate: function onCreate(text) {
      if (this.get('onCreate')) {
        this.get('onCreate')(text);
      }
      this.get('publicAPI').actions.close();
    },

    scrollTo: function scrollTo(option) {
      if (!document || !option) {
        return;
      }
      var publicAPI = this.get('publicAPI');
      var optionsList = document.getElementById('ember-power-select-options-' + publicAPI.uniqueId);

      if (!optionsList) {
        return;
      }

      var index = indexOfOption(publicAPI.results, option);
      if (index === -1) {
        return;
      }
      // Update the scroll index
      this.updateState({ scrollIndex: index });
    }
  }
});