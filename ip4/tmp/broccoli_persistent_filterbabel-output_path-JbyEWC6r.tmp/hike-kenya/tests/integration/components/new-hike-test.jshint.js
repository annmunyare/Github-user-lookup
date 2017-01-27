define('hike-kenya/tests/integration/components/new-hike-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/new-hike-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/new-hike-test.js should pass jshint.');
  });
});