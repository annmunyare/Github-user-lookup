define('hike-kenya/models/review', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    username: _emberData['default'].attr(),
    comment: _emberData['default'].attr(),
    rating: _emberData['default'].attr(),
    date: _emberData['default'].attr(),
    hike: _emberData['default'].belongsTo('hike', { async: true })
  });
});