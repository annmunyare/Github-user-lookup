define('hike-kenya/routes/new', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      saveHike: function saveHike(params) {
        console.log(params);
        this.store.createRecord('hike', params).save();
        this.transitionTo('index');
      }
    }
  });
});