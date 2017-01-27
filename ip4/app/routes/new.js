import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveHike(params) {
      console.log(params);
      this.store.createRecord('hike', params).save();
      this.transitionTo('index');
    }
  }
});
