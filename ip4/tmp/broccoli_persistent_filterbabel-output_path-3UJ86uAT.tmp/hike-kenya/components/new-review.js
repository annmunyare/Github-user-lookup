define('hike-kenya/components/new-review', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      addReview: function addReview() {
        var params = {
          username: this.get('username') || " ",
          comment: this.get('comment') || " ",
          rating: this.get('rating') || " ",
          date: this.set('date', (0, _moment['default'])().format('LL')),
          hike: this.get('hike')
        };
        this.sendAction('addReview', params);
      }
    }
  });
});