define('hike-kenya/tests/models/hike.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/hike.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/hike.js should pass jshint.');
  });
});