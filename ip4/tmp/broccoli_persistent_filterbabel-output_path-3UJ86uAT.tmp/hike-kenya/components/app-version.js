define('hike-kenya/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'hike-kenya/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _hikeKenyaConfigEnvironment) {

  var name = _hikeKenyaConfigEnvironment['default'].APP.name;
  var version = _hikeKenyaConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});