import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
   accessDenied() {
     alert('You must login to see this page');
     this.transitionTo('/');
   },
 },
});
