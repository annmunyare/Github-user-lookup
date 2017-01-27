import Ember from 'ember';

export default Ember.Component.extend({
  //computed property to make a full location//
  fullLocation: Ember.computed('hike.location', 'hike.state', function(){
    return this.get('hike.location') + ", " + this.get('hike.state');
  })
});
