define('hike-kenya/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      accessDenied: function accessDenied() {
        alert('You must login to see this page');
        this.transitionTo('/');
      }
    }
  });
});