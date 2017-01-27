define('hike-kenya/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    beforeModel: function beforeModel() {
      return this.get('session').fetch();
    },
    actions: {
      signOut: function signOut() {
        var controller = this;
        this.get('session').close();
        controller.transitionToRoute('/');
      }
    }
  });
});