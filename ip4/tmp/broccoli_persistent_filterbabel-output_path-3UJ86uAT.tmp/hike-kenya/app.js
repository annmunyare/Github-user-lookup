define('hike-kenya/app', ['exports', 'ember', 'hike-kenya/resolver', 'ember-load-initializers', 'hike-kenya/config/environment'], function (exports, _ember, _hikeKenyaResolver, _emberLoadInitializers, _hikeKenyaConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _hikeKenyaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hikeKenyaConfigEnvironment['default'].podModulePrefix,
    Resolver: _hikeKenyaResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _hikeKenyaConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});