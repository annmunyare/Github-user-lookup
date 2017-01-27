define('hike-kenya/tests/helpers/resolver', ['exports', 'hike-kenya/resolver', 'hike-kenya/config/environment'], function (exports, _hikeKenyaResolver, _hikeKenyaConfigEnvironment) {

  var resolver = _hikeKenyaResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _hikeKenyaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hikeKenyaConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});