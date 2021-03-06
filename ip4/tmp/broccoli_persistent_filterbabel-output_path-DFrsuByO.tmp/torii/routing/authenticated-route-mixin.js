define('torii/routing/authenticated-route-mixin', ['exports', 'torii/configuration'], function (exports, _toriiConfiguration) {
  'use strict';

  exports['default'] = Ember.Mixin.create({
    beforeModel: function beforeModel(transition) {
      var route = this;
      var superBefore = this._super.apply(this, arguments);
      if (superBefore && superBefore.then) {
        return superBefore.then(function () {
          return route.authenticate(transition);
        });
      } else {
        return route.authenticate(transition);
      }
    },
    authenticate: function authenticate(transition) {
      var route = this,
          session = this.get(_toriiConfiguration['default'].sessionServiceName),
          isAuthenticated = this.get(_toriiConfiguration['default'].sessionServiceName + '.isAuthenticated'),
          hasAttemptedAuth = isAuthenticated !== undefined;

      if (!isAuthenticated) {
        session.attemptedTransition = transition;

        if (hasAttemptedAuth) {
          return route.accessDenied(transition);
        } else {
          return session.fetch()['catch'](function () {
            return route.accessDenied(transition);
          });
        }
      } else {
        // no-op; cause the user is already authenticated
        return Ember.RSVP.resolve();
      }
    },
    accessDenied: function accessDenied(transition) {
      transition.send('accessDenied');
    }
  });
});