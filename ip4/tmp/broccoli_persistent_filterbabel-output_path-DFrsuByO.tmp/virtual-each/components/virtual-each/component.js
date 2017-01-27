define('virtual-each/components/virtual-each/component', ['exports', 'ember', 'virtual-each/mixins/event-listener', 'virtual-each/mixins/default-attrs', 'virtual-each/components/virtual-each/template'], function (exports, _ember, _virtualEachMixinsEventListener, _virtualEachMixinsDefaultAttrs, _virtualEachComponentsVirtualEachTemplate) {
  'use strict';

  var Component = _ember['default'].Component;
  var run = _ember['default'].run;
  var observer = _ember['default'].observer;
  var computed = _ember['default'].computed;
  var _get = _ember['default'].get;
  var set = _ember['default'].set;
  var RSVP = _ember['default'].RSVP;
  var emberArray = _ember['default'].A;
  var htmlSafe = _ember['default'].String.htmlSafe;
  var escapeExpression = _ember['default'].Handlebars.Utils.escapeExpression;

  var VirtualEachComponent = Component.extend(_virtualEachMixinsEventListener['default'], _virtualEachMixinsDefaultAttrs['default'], {
    layout: _virtualEachComponentsVirtualEachTemplate['default'],
    classNames: ['virtual-each'],
    attributeBindings: ['style'],

    defaultAttrs: {
      height: 200,
      rowPadding: 1,
      itemHeight: 20,
      scrollTimeout: 30
    },

    eventHandlers: {
      wheel: function wheel() {
        this._scrolledByWheel = true;
      },

      scroll: function scroll(e) {
        var _this = this;

        e.preventDefault();

        var scrollTimeout = this.getAttr('scrollTimeout');

        if (scrollTimeout && this.isWebkit && this._scrolledByWheel) {
          this._scrolledByWheel = false;

          if (!this._scrollTimer) {
            this._scrollTimer = setTimeout(function () {
              _this._scrollTimer = null;
              _this.calculateVisibleItems();
            }, scrollTimeout);
          }

          return;
        }

        this.calculateVisibleItems();
      }
    },

    style: computed('height', {
      get: function get() {
        var height = escapeExpression(this.getAttr('height'));

        return htmlSafe('height: ' + height + 'px;');
      }
    }).readOnly(),

    contentStyle: computed('_marginTop', '_contentHeight', {
      get: function get() {
        var marginTop = escapeExpression(_get(this, '_marginTop'));
        var height = escapeExpression(_get(this, '_contentHeight'));

        return htmlSafe('height: ' + height + 'px; margin-top: ' + marginTop + 'px;');
      }
    }).readOnly(),

    visibleItems: computed('_startAt', '_visibleItemCount', '_items', 'rowPadding', {
      get: function get() {
        var items = _get(this, '_items');
        var startAt = _get(this, '_startAt');
        var rowPadding = this.getAttr('rowPadding');
        var _visibleItemCount = _get(this, '_visibleItemCount');
        var itemsLength = _get(items, 'length');
        var endAt = Math.min(itemsLength, startAt + _visibleItemCount);
        var onScrollBottomed = this.attrs.onScrollBottomed;

        if (typeof onScrollBottomed === 'function' && startAt + _visibleItemCount - rowPadding >= itemsLength) {
          onScrollBottomed(startAt, endAt);
        }

        return items.slice(startAt, endAt).map(function (item, index) {
          return {
            raw: item,
            actualIndex: startAt + index,
            virtualIndex: index
          };
        });
      }
    }).readOnly(),

    _visibleItemCount: computed('height', 'itemHeight', 'rowPadding', {
      get: function get() {
        var height = this.getAttr('height');
        var rowPadding = this.getAttr('rowPadding');

        return Math.ceil(height / this.getAttr('itemHeight')) + rowPadding;
      }
    }).readOnly(),

    _marginTop: computed('_totalHeight', '_startAt', '_visibleItemCount', 'itemHeight', 'rowPadding', {
      get: function get() {
        var rowPadding = this.getAttr('rowPadding');
        var itemHeight = this.getAttr('itemHeight');
        var totalHeight = _get(this, '_totalHeight');
        var margin = _get(this, '_startAt') * itemHeight;
        var visibleItemCount = _get(this, '_visibleItemCount');
        var maxMargin = Math.max(0, totalHeight - (visibleItemCount - 1) * itemHeight + rowPadding * itemHeight);

        return Math.min(maxMargin, margin);
      }
    }).readOnly(),

    _contentHeight: computed('_totalHeight', '_marginTop', {
      get: function get() {
        return _get(this, '_totalHeight') - _get(this, '_marginTop');
      }
    }).readOnly(),

    init: function init() {
      this._super.apply(this, arguments);

      this.setProperties({
        _items: emberArray(),
        _startAt: 0,
        _totalHeight: 0,
        _scrolledByWheel: false
      });
    },

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);

      var _ref = navigator || {};

      var ua = _ref.userAgent;

      this.isWebkit = /WebKit/.test(ua);
    },

    calculateVisibleItems: function calculateVisibleItems(positionIndex) {
      var _this2 = this;

      run(function () {
        var startAt = _get(_this2, '_startAt');
        var scrolledAmount = _this2.$().scrollTop();
        var visibleStart = isNaN(positionIndex) ? Math.floor(scrolledAmount / _this2.getAttr('itemHeight')) : Math.max(positionIndex);

        if (visibleStart !== startAt) {
          set(_this2, '_startAt', visibleStart);
        }
      });
    },

    scrollTo: observer('_positionIndex', function () {
      var _this3 = this;

      var rowPadding = this.getAttr('rowPadding');
      var positionIndex = _get(this, '_positionIndex');
      var itemHeight = this.getAttr('itemHeight');
      var totalHeight = _get(this, '_totalHeight');
      var _visibleItemCount = _get(this, '_visibleItemCount');
      var startingIndex = isNaN(positionIndex) ? _get(this, '_startAt') : Math.max(positionIndex, 0);
      var startingPadding = itemHeight * startingIndex;
      var maxVisibleItemTop = Math.max(0, _get(this, '_items.length') - _visibleItemCount + rowPadding);
      var maxPadding = Math.max(0, totalHeight - (_visibleItemCount - 1) * itemHeight + rowPadding * itemHeight);
      var sanitizedIndex = Math.min(startingIndex, maxVisibleItemTop);
      var sanitizedPadding = startingPadding > maxPadding ? maxPadding : startingPadding;

      this.scheduledRender = run.scheduleOnce('afterRender', function () {
        _this3.calculateVisibleItems(sanitizedIndex);
        _this3.$().scrollTop(sanitizedPadding);
      });
    }),

    didReceiveAttrs: function didReceiveAttrs() {
      var _this4 = this;

      this._super.apply(this, arguments);

      RSVP.cast(this.getAttr('items')).then(function (attrItems) {
        var items = emberArray(attrItems);

        _this4.setProperties({
          _items: items,
          _positionIndex: _this4.getAttr('positionIndex'),
          _totalHeight: Math.max(_get(items, 'length') * _this4.getAttr('itemHeight'), 0)
        });
      });
    },

    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      run.cancel(this.scheduledRender);
    }
  });

  VirtualEachComponent.reopenClass({
    positionalParams: ['items']
  });

  exports['default'] = VirtualEachComponent;
});