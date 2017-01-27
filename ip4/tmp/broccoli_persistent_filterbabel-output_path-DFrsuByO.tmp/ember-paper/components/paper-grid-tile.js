define('ember-paper/components/paper-grid-tile', ['exports', 'ember', 'ember-paper/templates/components/paper-grid-tile', 'ember-paper/components/paper-grid-list'], function (exports, _ember, _emberPaperTemplatesComponentsPaperGridTile, _emberPaperComponentsPaperGridList) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var inject = _ember['default'].inject;
  var get = _ember['default'].get;

  /**
   * @class PaperGridTile
   * @extends Ember.Component
   */
  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperGridTile['default'],
    tagName: 'md-grid-tile',

    constants: inject.service(),

    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);

      this.get('gridList').registerGridTile(this);
      this.get('gridList').send('invalidateTiles');

      this._watchResponsiveAttributes(['md-colspan', 'md-rowspan'], function (mediaName) {
        _this.get('gridList').send('invalidateLayout', mediaName);
      });
    },

    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);

      this.get('gridList').send('invalidateLayout');
    },

    gridList: computed(function () {
      return this.nearestOfType(_emberPaperComponentsPaperGridList['default']);
    }),

    _watchResponsiveAttributes: function _watchResponsiveAttributes(attrNames, watchFn) {
      var _this2 = this;

      var checkObserverValues = function checkObserverValues(sender, key) {
        var oldValue = _this2.get('old' + key);
        var newValue = sender.get(key);

        if (oldValue !== newValue) {
          watchFn();
        }
      };

      attrNames.forEach(function (attrName) {
        if (get(_this2, attrName)) {
          _this2.set('old' + attrName, get(_this2, attrName));

          _this2.addObserver(attrName, checkObserverValues);
        }

        for (var mediaName in _this2.get('constants.MEDIA')) {
          var normalizedName = attrName + '-' + mediaName;
          if (get(_this2, normalizedName)) {
            _this2.set('old' + normalizedName, get(_this2, normalizedName));

            _this2.addObserver(normalizedName, checkObserverValues);
          }
        }
      });
    }

  });
});