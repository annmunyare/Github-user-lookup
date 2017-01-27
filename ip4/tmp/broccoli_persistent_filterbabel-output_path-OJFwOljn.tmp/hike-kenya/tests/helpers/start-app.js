define('hike-kenya/tests/helpers/start-app', ['exports', 'ember', 'hike-kenya/app', 'hike-kenya/config/environment'], function (exports, _ember, _hikeKenyaApp, _hikeKenyaConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _hikeKenyaConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _hikeKenyaApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});