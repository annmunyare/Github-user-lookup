define('hike-kenya/helpers/moment-calendar', ['exports', 'ember', 'hike-kenya/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _hikeKenyaConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_hikeKenyaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});