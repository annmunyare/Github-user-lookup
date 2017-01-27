define('hike-kenya/tests/test-helper', ['exports', 'hike-kenya/tests/helpers/resolver', 'hike-kenya/tests/helpers/register-select-helper', 'ember-qunit'], function (exports, _hikeKenyaTestsHelpersResolver, _hikeKenyaTestsHelpersRegisterSelectHelper, _emberQunit) {
  (0, _hikeKenyaTestsHelpersRegisterSelectHelper['default'])();

  (0, _emberQunit.setResolver)(_hikeKenyaTestsHelpersResolver['default']);
});