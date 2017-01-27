define('ember-paper/components/paper-autocomplete-trigger', ['exports', 'ember', 'ember-paper/templates/components/paper-autocomplete-trigger'], function (exports, _ember, _emberPaperTemplatesComponentsPaperAutocompleteTrigger) {
  'use strict';

  var Component = _ember['default'].Component;
  var isPresent = _ember['default'].isPresent;
  var isBlank = _ember['default'].isBlank;
  var run = _ember['default'].run;
  var get = _ember['default'].get;
  var computed = _ember['default'].computed;

  exports['default'] = Component.extend({
    layout: _emberPaperTemplatesComponentsPaperAutocompleteTrigger['default'],
    tagName: 'md-autocomplete-wrap',
    classNames: ['md-show-clear-button'],
    classNameBindings: ['noLabel:md-whiteframe-z1', 'select.isOpen:md-menu-showing'],

    noLabel: computed.not('extra.label'),
    _innerText: computed.oneWay('searchText'),

    text: computed('selected', 'searchText', '_innerText', {
      get: function get() {
        var _getProperties = this.getProperties('selected', 'searchText', '_innerText');

        var selected = _getProperties.selected;
        var searchText = _getProperties.searchText;
        var _innerText = _getProperties._innerText;

        if (selected) {
          return this.getSelectedAsText();
        }
        return searchText ? searchText : _innerText;
      },
      set: function set(_, v) {
        var _getProperties2 = this.getProperties('selected', 'searchText');

        var selected = _getProperties2.selected;
        var searchText = _getProperties2.searchText;

        this.set('_innerText', v);

        // searchText should always win
        if (!selected && isPresent(searchText)) {
          return searchText;
        }

        return v;
      }
    }),

    // Lifecycle hooks
    didUpdateAttrs: function didUpdateAttrs(_ref) {
      var oldAttrs = _ref.oldAttrs;
      var newAttrs = _ref.newAttrs;

      this._super.apply(this, arguments);
      /*
       * We need to update the input field with value of the selected option whenever we're closing
       * the select box. But we also close the select box when we're loading search results and when
       * we remove input text -- so protect against this
       */
      if (oldAttrs.select.isOpen && !newAttrs.select.isOpen && !newAttrs.loading && newAttrs.searchText) {
        this.set('text', this.getSelectedAsText());
      }

      if (newAttrs.lastSearchedText !== oldAttrs.lastSearchedText) {
        if (isBlank(newAttrs.lastSearchedText)) {
          run.schedule('actions', null, newAttrs.select.actions.close, null, true);
        } else {
          run.schedule('actions', null, newAttrs.select.actions.open);
        }
      } else if (!isBlank(newAttrs.lastSearchedText) && get(this, 'options.length') === 0 && this.get('loading')) {
        run.schedule('actions', null, newAttrs.select.actions.close, null, true);
      } else if (oldAttrs.loading && !newAttrs.loading && newAttrs.options.length > 0) {
        run.schedule('actions', null, newAttrs.select.actions.open);
      }
    },

    // Actions
    actions: {
      stopPropagation: function stopPropagation(e) {
        e.stopPropagation();
      },

      clear: function clear(e) {
        e.stopPropagation();
        this.set('text', '');
        this.get('select').actions.select(null);
        this.get('onInput')({ target: { value: '' } });
        this.get('onFocus')(e);
        this.$('input').focus();
      },

      handleKeydown: function handleKeydown(e) {
        var isLetter = e.keyCode >= 48 && e.keyCode <= 90 || e.keyCode === 32; // Keys 0-9, a-z or SPACE
        var isSpecialKeyWhileClosed = !isLetter && !this.get('select.isOpen') && [13, 27, 38, 40].indexOf(e.keyCode) > -1;
        if (isLetter || isSpecialKeyWhileClosed) {
          e.stopPropagation();
        }
      },

      handleInputLocal: function handleInputLocal(e) {
        // If something is already selected when the user types, it should clear selection
        if (this.get('selected')) {
          this.get('select').actions.select(null);
        }
        this.get('onInput')(e.target ? e : { target: { value: e } });
        this.set('text', e.target ? e.target.value : e);
      }
    },
    // Methods
    getSelectedAsText: function getSelectedAsText() {
      var labelPath = this.get('extra.labelPath');
      if (labelPath) {
        return this.get('selected.' + labelPath);
      } else {
        return this.get('selected');
      }
    }
  });
});