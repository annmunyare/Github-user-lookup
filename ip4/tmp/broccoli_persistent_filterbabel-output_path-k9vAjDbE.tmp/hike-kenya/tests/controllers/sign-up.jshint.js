define('hike-kenya/tests/controllers/sign-up.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/sign-up.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/sign-up.js should pass jshint.\ncontrollers/sign-up.js: line 11, col 18, \'data\' is defined but never used.\n\n1 error');
  });
});