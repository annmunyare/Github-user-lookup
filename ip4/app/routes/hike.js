import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('hike', params.hike_id);
  },
  actions: {
    addReview(params){
      var newReview = this.store.createRecord('review', params);
        var hike = params.hike;
        hike.get('reviews').addObject(newReview);
        newReview.save().then(function() {
          return hike.save();
        });
        this.transitionTo('hike', params.hike);
    }
  }
});
