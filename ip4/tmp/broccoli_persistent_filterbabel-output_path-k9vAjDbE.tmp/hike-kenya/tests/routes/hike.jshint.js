define('hike-kenya/tests/routes/hike.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/hike.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/hike.js should pass jshint.');
  });
});