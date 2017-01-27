define('hike-kenya/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'hike-kenya/tests/helpers/start-app', 'hike-kenya/tests/helpers/destroy-app'], function (exports, _qunit, _hikeKenyaTestsHelpersStartApp, _hikeKenyaTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _hikeKenyaTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _hikeKenyaTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});