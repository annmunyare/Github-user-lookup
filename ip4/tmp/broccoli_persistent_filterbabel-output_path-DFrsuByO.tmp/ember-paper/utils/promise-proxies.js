define('ember-paper/utils/promise-proxies', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.promiseObject = promiseObject;
  exports.promiseArray = promiseArray;

  /**
   * @module ember-paper
   */

  var Promise = _ember['default'].RSVP.Promise;
  var ArrayProxy = _ember['default'].ArrayProxy;
  var ObjectProxy = _ember['default'].ObjectProxy;
  var PromiseProxyMixin = _ember['default'].PromiseProxyMixin;

  // See http://emberjs.com/api/data/classes/DS.PromiseArray.html
  var PromiseArray = ArrayProxy.extend(PromiseProxyMixin);
  exports.PromiseArray = PromiseArray;

  // See http://emberjs.com/api/data/classes/DS.PromiseObject.html
  var PromiseObject = ObjectProxy.extend(PromiseProxyMixin);

  exports.PromiseObject = PromiseObject;

  function promiseObject(promise, label) {
    return PromiseObject.create({
      promise: Promise.resolve(promise, label)
    });
  }

  function promiseArray(promise, label) {
    return PromiseArray.create({
      promise: Promise.resolve(promise, label)
    });
  }
});