define('hike-kenya/helpers/moment-from-now', ['exports', 'ember', 'hike-kenya/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _hikeKenyaConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_hikeKenyaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});