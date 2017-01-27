define('hike-kenya/controllers/sign-up', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    firebase: _ember['default'].inject.service(),
    actions: {
      signUp: function signUp() {
        var controller = this;
        this.get('firebase').createUser({
          email: this.get('email') || '',
          password: this.get('password') || ''
        }, function (error, data) {
          if (error) {
            console.log(error);
          } else {
            controller.set('email', null);
            controller.set('password', null);
            controller.transitionToRoute('sign-in');
          }
        });
      }
    }
  });
});