define('hike-kenya/services/moment', ['exports', 'ember', 'hike-kenya/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _hikeKenyaConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_hikeKenyaConfigEnvironment['default'], 'moment.outputFormat')
  });
});