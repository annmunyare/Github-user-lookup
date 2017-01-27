export { promiseObject };
export { promiseArray };
/**
 * @module ember-paper
 */
import Ember from 'ember';
var Promise = Ember.RSVP.Promise;
var ArrayProxy = Ember.ArrayProxy;
var ObjectProxy = Ember.ObjectProxy;
var PromiseProxyMixin = Ember.PromiseProxyMixin;

// See http://emberjs.com/api/data/classes/DS.PromiseArray.html
var PromiseArray = ArrayProxy.extend(PromiseProxyMixin);
export { PromiseArray };
// See http://emberjs.com/api/data/classes/DS.PromiseObject.html
var PromiseObject = ObjectProxy.extend(PromiseProxyMixin);

export { PromiseObject };

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