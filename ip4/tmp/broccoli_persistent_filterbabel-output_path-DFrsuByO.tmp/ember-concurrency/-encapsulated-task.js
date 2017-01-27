define('ember-concurrency/-encapsulated-task', ['exports', 'ember', 'ember-concurrency/-task-instance'], function (exports, _ember, _emberConcurrencyTaskInstance) {
  'use strict';

  exports['default'] = _emberConcurrencyTaskInstance['default'].extend({
    _makeIterator: function _makeIterator() {
      var perform = this.get('perform');
      _ember['default'].assert("The object passed to `task()` must define a `perform` generator function, e.g. `perform: function * () {...}`", typeof perform === 'function');
      return perform.apply(this, this.args);
    },

    perform: null
  });
});