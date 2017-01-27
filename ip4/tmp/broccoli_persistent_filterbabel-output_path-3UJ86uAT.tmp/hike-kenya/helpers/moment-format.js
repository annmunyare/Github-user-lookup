define('hike-kenya/helpers/moment-format', ['exports', 'ember', 'hike-kenya/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _hikeKenyaConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_hikeKenyaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});