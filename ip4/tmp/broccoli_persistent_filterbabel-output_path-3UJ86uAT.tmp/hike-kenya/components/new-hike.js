define('hike-kenya/components/new-hike', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      saveHike: function saveHike() {
        var params = {
          name: this.get('name'),
          location: this.get('location'),
          state: this.get('state'),
          distance: this.get('distance'),
          difficulty: this.get('difficulty'),
          image: this.get('image'),
          timestamp: this.set('timestamp', (0, _moment['default'])().format('LL'))
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
});