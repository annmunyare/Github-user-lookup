define('hike-kenya/models/hike', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr(),
    location: _emberData['default'].attr(),
    state: _emberData['default'].attr(),
    distance: _emberData['default'].attr(),
    difficulty: _emberData['default'].attr(),
    image: _emberData['default'].attr(),
    timestamp: _emberData['default'].attr(),
    reviews: _emberData['default'].hasMany('review', { async: true })
  });
});