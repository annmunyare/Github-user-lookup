define('ember-paper/mixins/child-mixin', ['exports', 'ember', 'ember-paper/mixins/parent-mixin'], function (exports, _ember, _emberPaperMixinsParentMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Mixin = _ember['default'].Mixin;
  var computed = _ember['default'].computed;

  /**
   * @class ChildMixin
   * @extends Ember.Mixin
   */
  exports['default'] = Mixin.create({

    // override to look for a specific parent class
    parentClass: _emberPaperMixinsParentMixin['default'],

    // this will typically be overriden when yielding a contextual component
    parentComponent: computed(function () {
      return this.nearestOfType(this.get('parentClass'));
    }),

    init: function init() {
      this._super.apply(this, arguments);
      if (this.get('parentComponent')) {
        this.get('parentComponent').register(this);
      }
    },

    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      if (this.get('parentComponent')) {
        this.get('parentComponent').unregister(this);
      }
    }
  });
});