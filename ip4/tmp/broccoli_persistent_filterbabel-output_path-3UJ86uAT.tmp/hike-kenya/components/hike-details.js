define('hike-kenya/components/hike-details', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    //computed property to make a full location//
    fullLocation: _ember['default'].computed('hike.location', 'hike.state', function () {
      return this.get('hike.location') + ", " + this.get('hike.state');
    })
  });
});