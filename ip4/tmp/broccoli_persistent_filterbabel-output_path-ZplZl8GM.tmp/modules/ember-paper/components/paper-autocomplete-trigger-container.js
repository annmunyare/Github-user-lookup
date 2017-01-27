import Ember from 'ember';
import BasicTrigger from 'ember-basic-dropdown/components/basic-dropdown/trigger';
var computed = Ember.computed;

export default BasicTrigger.extend({
  tagName: 'md-autocomplete',
  attributeBindings: ['label:md-floating-label', 'disabled:disabled'],
  disabled: computed('disabledProxy', function () {
    return this.get('disabledProxy') ? this.get('disabledProxy') : undefined;
  }),

  // Chrome 51: setting tabindex=0 explicitly stops tab propogation to
  // other elements. We need to verify that other browsers behave as expected.
  tabIndex: computed('dropdown.disabled', 'tabindex', function () {
    var tabindex = this.get('tabindex');

    // tabindex = falsy - don't set tabindex attr
    if (!tabindex || this.get('dropdown.disabled')) {
      return null;
    }
    return tabindex;
  }),

  addMandatoryHandlers: function addMandatoryHandlers() {
    var _this = this;

    if (this.get('isTouchDevice')) {
      this.element.addEventListener('touchstart', function () {
        document.body.addEventListener('touchmove', _this._touchMoveHandler);
      });
      this.element.addEventListener('touchend', function (e) {
        _this.send('handleTouchEnd', e);
      });
    }
    this.element.addEventListener('mousedown', function (e) {
      return _this.send('handleMousedown', e);
    });
    this.element.addEventListener('keydown', function (e) {
      return _this.send('handleKeyDown', e);
    });
  },

  actions: {

    handleMousedown: function handleMousedown() {
      var dropdown = this.get('dropdown');
      if (dropdown.disabled) {
        return;
      }
      this.stopTextSelectionUntilMouseup();
    }
  }
});