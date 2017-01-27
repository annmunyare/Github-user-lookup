define('hike-kenya/services/firebase', ['exports', 'emberfire/services/firebase', 'hike-kenya/config/environment'], function (exports, _emberfireServicesFirebase, _hikeKenyaConfigEnvironment) {

  _emberfireServicesFirebase['default'].config = _hikeKenyaConfigEnvironment['default'];

  exports['default'] = _emberfireServicesFirebase['default'];
});