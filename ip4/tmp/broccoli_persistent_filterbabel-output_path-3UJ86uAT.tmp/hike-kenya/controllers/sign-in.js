define('hike-kenya/controllers/sign-in', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      signIn: function signIn(provider) {
        var controller = this;
        this.get('session').open('firebase', {
          provider: provider,
          email: this.get('email') || '',
          password: this.get('password') || ''
        }).then(function () {
          controller.set('email', null);
          controller.set('password', null);
          controller.transitionToRoute('/');
        }, function (error) {
          console.log(error);
          alert("there was an error with your login, please try again");
        });
      }
    }
  });
});