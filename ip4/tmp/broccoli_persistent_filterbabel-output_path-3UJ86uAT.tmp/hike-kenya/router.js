define('hike-kenya/router', ['exports', 'ember', 'hike-kenya/config/environment'], function (exports, _ember, _hikeKenyaConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _hikeKenyaConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.authenticatedRoute('new');
    this.route('hike', { path: 'hike/:hike_id' });
    this.route('admin');
    this.route('sign-up');
    this.route('sign-in');
  });

  exports['default'] = Router;
});