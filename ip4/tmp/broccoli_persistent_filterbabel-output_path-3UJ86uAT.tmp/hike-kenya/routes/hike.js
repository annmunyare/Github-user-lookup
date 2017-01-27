define('hike-kenya/routes/hike', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('hike', params.hike_id);
    },
    actions: {
      addReview: function addReview(params) {
        var newReview = this.store.createRecord('review', params);
        var hike = params.hike;
        hike.get('reviews').addObject(newReview);
        newReview.save().then(function () {
          return hike.save();
        });
        this.transitionTo('hike', params.hike);
      }
    }
  });
});