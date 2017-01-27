define('ember-paper/mixins/validation-mixin', ['exports', 'ember', 'ember-paper/validators/required', 'ember-paper/validators/min', 'ember-paper/validators/max', 'ember-paper/validators/minlength', 'ember-paper/validators/maxlength'], function (exports, _ember, _emberPaperValidatorsRequired, _emberPaperValidatorsMin, _emberPaperValidatorsMax, _emberPaperValidatorsMinlength, _emberPaperValidatorsMaxlength) {
  /**
   * @module ember-paper
   */
  'use strict';

  /**
   * In order to make validation generic it is required that components using the validation mixin
   * specify what property the validation logic should be based on.
   *
   * @public
   *
   * @return computed property that depends on the supplied property name
   */
  var Mixin = _ember['default'].Mixin;
  var computed = _ember['default'].computed;
  var A = _ember['default'].A;
  var assert = _ember['default'].assert;
  var isArray = _ember['default'].isArray;
  var Logger = _ember['default'].Logger;
  var get = _ember['default'].get;
  var loc = _ember['default'].String.loc;
  function buildComputedValidationMessages(property) {
    return computed(property, 'errors.[]', 'customValidations.[]', function () {
      var _this = this;

      var validations = A();
      var messages = A();

      // built-in validations
      validations.pushObjects(this.validations());

      // custom validations
      var customValidations = this.get('customValidations');
      assert('`customValidations` must be an array', isArray(customValidations));
      validations.pushObjects(customValidations);

      // execute validations
      var currentValue = this.get(property);
      validations.forEach(function (validation) {
        assert('validation must include an `validate(value)` function', validation && validation.validate && typeof validation.validate === 'function');
        try {
          var valParam = get(validation, 'param');
          var paramValue = valParam ? _this.get(valParam) : undefined;
          if (!validation.validate(currentValue, paramValue)) {
            var message = _this.get('errorMessages.' + valParam) || get(validation, 'message');
            messages.pushObject({
              message: loc(message.string || message, paramValue, currentValue)
            });
          }
        } catch (error) {
          Logger.error('Exception with validation: ', validation, error);
        }
      });

      // error messages array
      var errors = this.get('errors') || [];
      assert('`errors` must be an array', isArray(errors));
      messages.pushObjects(errors.map(function (e) {
        return get(e, 'message') ? e : { message: e };
      }));

      return messages;
    });
  }

  /**
   * @class ValidationMixin
   * @extends Ember.Mixin
   */
  exports['default'] = Mixin.create({
    validationErrorMessages: null,
    lastIsInvalid: undefined,
    validationProperty: null, // property that validation should be based on
    init: function init() {
      this._super.apply(this, arguments);
      assert('validationProperty must be set', this.get('validationProperty'));
      if (!this.get('validationErrorMessages')) {
        this.set('validationErrorMessages', buildComputedValidationMessages(this.get('validationProperty')));
      }
    },

    /**
     * The result of isInvalid is appropriate for controlling the display of
     * validation error messages. It also may be used to distinguish whether
     * the input would be considered valid after it is touched.
     *
     * @public
     *
     * @return {boolean} Whether the input is or would be invalid.
     *    false: input is valid (touched or not), or is no longer rendered
     *    true: input has been touched and is invalid.
     */
    isInvalid: computed.or('validationErrorMessages.length'),
    isValid: computed.not('isInvalid'),

    /**
     * Return the built-in validations.
     *
     * May be overridden to provide additional built-in validations. Be sure to
     * call this._super() to retrieve the standard validations.
     *
     * @public
     */
    validations: function validations() {
      return [_emberPaperValidatorsRequired['default'], _emberPaperValidatorsMin['default'], _emberPaperValidatorsMax['default'], _emberPaperValidatorsMinlength['default'], _emberPaperValidatorsMaxlength['default']];
    },

    notifyValidityChange: function notifyValidityChange() {
      var isValid = this.get('isValid');
      var lastIsValid = this.get('lastIsValid');
      if (lastIsValid !== isValid) {
        this.sendAction('onValidityChange', isValid);
        this.set('lastIsValid', isValid);
      }
    },
    customValidations: [],
    errors: []
  });
});