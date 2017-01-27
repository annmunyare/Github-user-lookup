define("hike-kenya/helpers/review-stars", ["exports", "ember"], function (exports, _ember) {
  exports.reviewStars = reviewStars;
  exports["default"] = _ember["default"].Helper.helper(reviewStars);

  function reviewStars(params) {
    var review = parseInt(params[0]),
        stars = " - user's rating: ";
    for (var i = 0; i < review; i++) {
      stars += "★";
    }
    return stars;
  }
});