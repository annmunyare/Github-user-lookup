define('virtual-each/mixins/event-listener', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Mixin.create({
    init: function init() {
      this._super.apply(this, arguments);

      if (!this.eventHandlers) {
        this.eventHandlers = {};
      }
    },

    handleEvent: function handleEvent(event) {
      var fn = this.eventHandlers[event.type];

      if (typeof fn === 'function') {
        return fn.call(this, event);
      }
    },

    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);

      Object.keys(this.eventHandlers).forEach(function (eventName) {
        _this.element.addEventListener(eventName, _this, false);
      });
    },

    willDestroyElement: function willDestroyElement() {
      var _this2 = this;

      this._super.apply(this, arguments);

      Object.keys(this.eventHandlers).forEach(function (eventName) {
        _this2.element.removeEventListener(eventName, _this2, false);
      });
    }
  });
});