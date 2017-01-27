import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    saveHike() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        state: this.get('state'),
        distance: this.get('distance'),
        difficulty: this.get('difficulty'),
        image: this.get('image'),
        timestamp: this.set('timestamp', moment().format('LL'))
      };
      this.sendAction('saveHike', params);
      this.set('name', '');
      this.set('location', '');
      this.set('distance', '');
      this.set('difficulty', '');
      this.set('image', '');
    }
  }
});
