import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    addReview() {
      var params = {
        username: this.get('username') || " ",
        comment: this.get('comment') || " ",
        rating: this.get('rating') || " ",
        date: this.set('date', moment().format('LL')),
        hike: this.get('hike')
      };
      this.sendAction('addReview', params);
    }
  }
});
