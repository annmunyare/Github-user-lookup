define('hike-kenya/tests/routes/sign-in.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/sign-in.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sign-in.js should pass jshint.');
  });
});