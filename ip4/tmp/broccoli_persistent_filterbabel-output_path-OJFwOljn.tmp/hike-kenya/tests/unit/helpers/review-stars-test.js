define('hike-kenya/tests/unit/helpers/review-stars-test', ['exports', 'hike-rater-ember/helpers/review-stars', 'qunit'], function (exports, _hikeRaterEmberHelpersReviewStars, _qunit) {

  (0, _qunit.module)('Unit | Helper | review stars');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _hikeRaterEmberHelpersReviewStars.reviewStars)([42]);
    assert.ok(result);
  });
});