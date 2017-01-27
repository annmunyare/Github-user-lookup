import Ember from 'ember';

export default Ember.Helper.helper(reviewStars);

export function reviewStars(params) {
  let review = parseInt(params[0]),
      stars=" - user's rating: ";
  for (var i=0; i<review; i++) {
    stars += ("★");
  }
  return stars;
}
