define('hike-kenya/helpers/moment-to-now', ['exports', 'ember', 'hike-kenya/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _hikeKenyaConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_hikeKenyaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});