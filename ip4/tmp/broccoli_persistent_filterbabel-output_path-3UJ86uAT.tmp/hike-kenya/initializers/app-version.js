define('hike-kenya/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'hike-kenya/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _hikeKenyaConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_hikeKenyaConfigEnvironment['default'].APP.name, _hikeKenyaConfigEnvironment['default'].APP.version)
  };
});