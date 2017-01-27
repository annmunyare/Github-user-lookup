/**
 * @module ember-paper
 */
import Ember from 'ember';
import layout from '../templates/components/paper-input';
import FocusableMixin from 'ember-paper/mixins/focusable-mixin';
import ColorMixin from 'ember-paper/mixins/color-mixin';
import ChildMixin from 'ember-paper/mixins/child-mixin';
import ValidationMixin from 'ember-paper/mixins/validation-mixin';

var Component = Ember.Component;
var $ = Ember.$;
var computed = Ember.computed;
var isEmpty = Ember.isEmpty;
var run = Ember.run;
var assert = Ember.assert;

/**
 * @class PaperInput
 * @extends Ember.Component
 * @uses FocusableMixin
 * @uses ChildMixin
 * @uses ColorMixin
 * @uses ValidationMixin
 */
export default Component.extend(FocusableMixin, ColorMixin, ChildMixin, ValidationMixin, {
  layout: layout,
  tagName: 'md-input-container',
  classNames: ['md-default-theme'],
  classNameBindings: ['hasValue:md-input-has-value', 'isInvalidAndTouched:md-input-invalid', 'eitherIcon:md-has-icon', 'iconRight:md-icon-right', 'focused:md-input-focused', 'block:md-block'],
  type: 'text',
  autofocus: false,
  tabindex: null,
  hideAllMessages: false,
  isTouched: false,
  isInvalid: computed.or('validationErrorMessages.length', 'isNativeInvalid'),
  hasValue: computed('value', 'isNativeInvalid', function () {
    var value = this.get('value');
    var isNativeInvalid = this.get('isNativeInvalid');
    return !isEmpty(value) || isNativeInvalid;
  }),

  inputElementId: computed('elementId', function () {
    return 'input-' + this.get('elementId');
  }),

  renderCharCount: computed('value', function () {
    var currentLength = this.get('value') ? this.get('value').length : 0;
    return currentLength + '/' + this.get('maxlength');
  }),

  eitherIcon: computed.or('icon', 'iconRight'),
  isInvalidAndTouched: computed.and('isInvalid', 'isTouched'),

  validationProperty: 'value', // property that validations should be run on

  // Lifecycle hooks
  didReceiveAttrs: function didReceiveAttrs() {
    this._super.apply(this, arguments);
    assert('{{paper-input}} requires an `onChange` action or null for no action.', this.get('onChange') !== undefined);
    this.notifyValidityChange();
  },

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    if (this.get('textarea')) {
      $(window).on('resize.' + this.elementId, run.bind(this, this.growTextarea));
    }
  },

  didRender: function didRender() {
    this._super.apply(this, arguments);
    // setValue below ensures that the input value is the same as this.value
    this.setValue(this.get('value'));
    this.growTextarea();
  },

  willDestroyElement: function willDestroyElement() {
    this._super.apply(this, arguments);
    if (this.get('textarea')) {
      $(window).off('resize.' + this.elementId);
    }
  },

  growTextarea: function growTextarea() {
    if (this.get('textarea')) {
      var inputElement = this.$('input, textarea');
      inputElement.addClass('md-no-flex').attr('rows', 1);

      var minRows = this.get('passThru.rows');
      var height = this.getHeight(inputElement);
      if (minRows) {
        if (!this.lineHeight) {
          inputElement.get(0).style.minHeight = 0;
          this.lineHeight = inputElement.get(0).clientHeight;
          inputElement.get(0).style.minHeight = null;
        }
        if (this.lineHeight) {
          height = Math.max(height, this.lineHeight * minRows);
        }
        var proposedHeight = Math.round(height / this.lineHeight);
        var maxRows = this.get('passThru.maxRows') || Number.MAX_VALUE;
        var rowsToSet = Math.min(proposedHeight, maxRows);
        inputElement.css('height', this.lineHeight * rowsToSet + 'px').attr('rows', rowsToSet).toggleClass('md-textarea-scrollable', proposedHeight >= maxRows);
      } else {
        inputElement.css('height', 'auto');
        inputElement.get(0).scrollTop = 0;
        var _height = this.getHeight(inputElement);
        if (_height) {
          inputElement.css('height', _height + 'px');
        }
      }

      inputElement.removeClass('md-no-flex');
    }
  },

  getHeight: function getHeight(inputElement) {
    var _inputElement$get = inputElement.get(0);

    var offsetHeight = _inputElement$get.offsetHeight;

    var line = inputElement.get(0).scrollHeight - offsetHeight;
    return offsetHeight + (line > 0 ? line : 0);
  },

  setValue: function setValue(value) {
    if (this.$('input, textarea').val() !== value) {
      this.$('input, textarea').val(value);
    }
  },

  actions: {
    handleInput: function handleInput(e) {
      var _this = this;

      this.sendAction('onChange', e.target.value);
      // setValue below ensures that the input value is the same as this.value
      run.next(function () {
        if (_this.isDestroyed) {
          return;
        }
        _this.setValue(_this.get('value'));
      });
      this.growTextarea();
      var inputElement = this.$('input').get(0);
      this.set('isNativeInvalid', inputElement && inputElement.validity && inputElement.validity.badInput);
      this.notifyValidityChange();
    },

    handleBlur: function handleBlur(e) {
      this.sendAction('onBlur', e);
      this.set('isTouched', true);
      this.notifyValidityChange();
    }
  }
});