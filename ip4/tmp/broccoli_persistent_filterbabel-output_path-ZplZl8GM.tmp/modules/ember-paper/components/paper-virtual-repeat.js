import Ember from 'ember';
import VirtualEachComponent from 'virtual-each/components/virtual-each/component';
import layout from '../templates/components/paper-virtual-repeat';

var computed = Ember.computed;
var run = Ember.run;
var get = Ember.get;
var set = Ember.set;
var observer = Ember.observer;
var Handlebars = Ember.Handlebars;
var RSVP = Ember.RSVP;
var emberArray = Ember.A;
var htmlSafe = Ember.String.htmlSafe;

var EXTRA_ROW_PADDING = 3;

var VirtualRepeatComponent = VirtualEachComponent.extend({
  layout: layout,
  tagName: 'md-virtual-repeat-container',
  classNames: ['md-virtual-repeat-container'],
  classNameBindings: ['horizontal:md-orient-horizontal'],
  rawVisibleItems: computed.mapBy('visibleItems', 'raw'),
  containerSelector: undefined,

  actions: {
    onScroll: function onScroll(e) {
      this.eventHandlers.scroll.call(this, e);
    }
  },

  defaultAttrs: {
    scrollTimeout: 30,
    height: 48
  },

  size: computed('initialSize', 'items.[]', 'itemHeight', function () {
    var itemSize = this.get('itemHeight');
    var fullSize = this.get('items.length') * itemSize;

    if (fullSize <= itemSize) {
      return itemSize;
    }
    return Math.min(fullSize, this.get('initialSize'));
  }),

  height: computed('size', 'horizontal', function () {
    if (this.get('horizontal')) {
      return false;
    }
    return this.get('size');
  }),

  // Received coordinates {top, left, right, width} from the dropdown
  // Convert them to style and cache - they usually don't change
  positionStyle: computed('positionCoordinates', function () {
    var coords = this.get('positionCoordinates') || {};
    var style = '';

    // {top, left, right, width}
    Object.keys(coords).forEach(function (type) {
      if (coords[type]) {
        style += type + ': ' + coords[type] + '; ';
      }
    });

    return style.trim();
  }).readOnly(),

  style: computed('height', 'positionStyle', function () {
    var height = this.get('height') || null;
    var style = this.get('positionStyle');

    if (height !== null && !isNaN(height)) {
      height = Handlebars.Utils.escapeExpression(height);
      style += ' height: ' + height + 'px;';
    }
    return htmlSafe(style);
  }).readOnly(),

  calculateVisibleItems: function calculateVisibleItems(positionIndex) {
    var _this = this;

    run(function () {
      var startAt = get(_this, '_startAt');
      var scrolledAmount = _this.get('horizontal') ? _this.$('.md-virtual-repeat-scroller').scrollLeft() : _this.$('.md-virtual-repeat-scroller').scrollTop();
      var visibleStart = isNaN(positionIndex) ? Math.floor(scrolledAmount / _this.get('itemHeight')) : Math.max(positionIndex);

      if (visibleStart !== startAt) {
        set(_this, '_startAt', visibleStart);
      }
    });
  },

  _marginTop: computed('_totalHeight', '_startAt', '_visibleItemCount', 'itemHeight', function () {
    var itemHeight = this.get('itemHeight');
    var totalHeight = get(this, '_totalHeight');
    var margin = get(this, '_startAt') * itemHeight;
    var visibleItemCount = get(this, '_visibleItemCount');
    var maxMargin = Math.max(0, totalHeight - (visibleItemCount - 1) * itemHeight + EXTRA_ROW_PADDING * itemHeight);

    return Math.min(maxMargin, margin);
  }).readOnly(),

  contentStyle: computed('_marginTop', '_totalHeight', function () {
    var height = Handlebars.Utils.escapeExpression(get(this, '_totalHeight'));
    return htmlSafe(this.get('horizontal') ? 'width: ' + height + 'px;' : 'height: ' + height + 'px;');
  }).readOnly(),

  offsetterStyle: computed('_marginTop', 'horizontal', function () {
    var _getProperties = this.getProperties('_marginTop', 'horizontal');

    var horizontal = _getProperties.horizontal;
    var _marginTop = _getProperties._marginTop;

    var dir = horizontal ? 'X' : 'Y';
    return htmlSafe('transform: translate' + dir + '(' + _marginTop + 'px);');
  }).readOnly(),

  _visibleItemCount: computed('size', 'itemHeight', function () {
    var size = this.get('size');
    return Math.ceil(this.get('itemHeight') ? size / this.get('itemHeight') : 1) + EXTRA_ROW_PADDING;
  }).readOnly(),

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);

    run.scheduleOnce('afterRender', this, function () {
      var element = this.$().get(0);
      var initSize = this.get('horizontal') ? element.clientWidth : element.clientHeight;
      this.set('initialSize', initSize);
    });
  },

  didReceiveAttrs: function didReceiveAttrs(changes) {
    var _this2 = this;

    this._super.apply(this, arguments);
    var newAttrs = changes.newAttrs;
    var _changes$oldAttrs = changes.oldAttrs;
    var oldAttrs = _changes$oldAttrs === undefined ? {} : _changes$oldAttrs;

    RSVP.cast(this.getAttr('items')).then(function (attrItems) {
      var items = emberArray(attrItems);
      var itemsCount = _this2.get('totalItemsCount') || get(items, 'length');
      _this2.setProperties({
        _items: items,
        _positionIndex: _this2.getAttr('positionIndex'),
        _totalHeight: Math.max(itemsCount * _this2.get('itemHeight'), 0)
      });

      // Set size explicitly
      if (newAttrs.height) {
        _this2.set('size', newAttrs.height);
      } else if (newAttrs.width) {
        _this2.set('size', newAttrs.width);
      }

      // Scroll index has changed, load more data & scroll
      if (oldAttrs.scrollIndex !== newAttrs.scrollIndex) {
        _this2.scrollToVirtualItem(newAttrs.scrollIndex, newAttrs.scrollTop);
      }
    });
  },

  didRender: function didRender() {
    var itemHeight = this.get('itemHeight');
    var selector = this.getWithDefault('containerSelector', '.md-virtual-repeat-offsetter');
    var offsetter = this.$(selector).get(0);
    if (!offsetter) {
      return;
    }

    var optionElement = offsetter.firstElementChild;
    if (!optionElement) {
      return;
    }

    if (itemHeight) {
      return;
    }

    run.cancel(this._measureHeightHandler);
    this._measureHeightHandler = run.schedule('afterRender', this, function () {
      var itemsCount = this.get('totalItemsCount') || get(this, 'items.length');

      if (this.get('horizontal')) {
        this.setProperties({
          itemHeight: optionElement.offsetWidth,
          _totalHeight: Math.max(itemsCount * optionElement.offsetWidth, 0)
        });
      } else {
        this.setProperties({
          itemHeight: optionElement.offsetHeight,
          _totalHeight: Math.max(itemsCount * optionElement.offsetHeight, 0)
        });
      }
    });
  },

  endAt: computed('_startAt', '_visibleItemCount', 'items.length', function () {
    var _getProperties2 = this.getProperties('_startAt', '_visibleItemCount');

    var _startAt = _getProperties2._startAt;
    var _visibleItemCount = _getProperties2._visibleItemCount;

    var totalItemsCount = get(this, 'items.length');
    return Math.min(totalItemsCount, _startAt + _visibleItemCount);
  }).readOnly(),

  visibleItems: computed('_startAt', '_visibleItemCount', '_items', function () {

    var items = get(this, '_items');
    var startAt = get(this, '_startAt');
    var _visibleItemCount = get(this, '_visibleItemCount');
    var itemsLength = get(this, 'totalItemsCount') || get(items, 'length');
    var endAt = Math.min(itemsLength, startAt + _visibleItemCount);
    var onScrollBottomed = this.getAttr('onScrollBottomed');

    if (typeof onScrollBottomed === 'function' && startAt + _visibleItemCount - EXTRA_ROW_PADDING >= itemsLength) {
      run.next(this, onScrollBottomed, startAt, endAt);
    }

    var getAtIndex = this.get('getAtIndex');
    if (getAtIndex) {
      for (var i = startAt; i < endAt; i++) {
        if (!items[i]) {
          items[i] = getAtIndex(i);
        }
      }
    }

    return items.slice(startAt, endAt).map(function (item, index) {
      return {
        raw: item,
        actualIndex: startAt + index,
        virtualIndex: index
      };
    });
  }).readOnly(),

  scrollToVirtualItem: function scrollToVirtualItem(newIndex) {
    var toTop = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    var _getProperties3 = this.getProperties('_startAt', 'endAt');

    var _startAt = _getProperties3._startAt;
    var endAt = _getProperties3.endAt;

    if (newIndex < _startAt || newIndex > endAt) {
      var _getProperties4 = this.getProperties('_visibleItemCount', '_items');

      var _visibleItemCount = _getProperties4._visibleItemCount;
      var _items = _getProperties4._items;

      var itemsLength = _items.get('length');

      var maxVisibleItemTop = Math.max(0, itemsLength - _visibleItemCount + EXTRA_ROW_PADDING);
      var sanitizedIndex = Math.min(_startAt, maxVisibleItemTop);
      this.calculateVisibleItems(sanitizedIndex);
    }

    var itemHeight = this.get('itemHeight');
    var itemOffset = (newIndex + 1) * itemHeight;
    var offset = itemOffset - this.get('size');

    if (toTop) {
      offset = newIndex * itemHeight;
    }
    if (this.get('horizontal')) {
      this.$('.md-virtual-repeat-scroller').scrollLeft(offset);
    } else {
      this.$('.md-virtual-repeat-scroller').scrollTop(offset);
    }
  },

  lengthObserver: observer('items.length', function () {
    var totalLength = this.get('length') ? this.get('length') : this.get('items.length');
    this.set('_totalHeight', Math.max(totalLength * this.get('itemHeight'), 0));
  })

});

VirtualRepeatComponent.reopenClass({
  positionalParams: ['items']
});

export default VirtualRepeatComponent;