import Ember from 'ember';
import Component from 'ember-component';
import layout from '../templates/components/power-select';
import fallbackIfUndefined from '../utils/computed-fallback-if-undefined';
import { assert } from 'ember-metal/utils';
import { isBlank } from 'ember-utils';
import { isEmberArray } from 'ember-array/utils';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import { scheduleOnce } from 'ember-runloop';
import { defaultMatcher, indexOfOption, optionAtIndex, filterOptions, countOptions, defaultHighlighted, advanceSelectableOption } from '../utils/group-utils';
import { task, timeout } from 'ember-concurrency';

var isEqual = Ember.isEqual;

// Copied from Ember. It shouldn't be necessary in Ember 2.5+
var assign = Object.assign || function EmberAssign(original) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (!arg) {
      continue;
    }

    var updates = Object.keys(arg);

    for (var _i = 0; _i < updates.length; _i++) {
      var prop = updates[_i];
      original[prop] = arg[prop];
    }
  }

  return original;
};

function concatWithProperty(strings, property) {
  if (property) {
    strings.push(property);
  }
  return strings.join(' ');
}

function toPlainArray(collection) {
  return collection.toArray ? collection.toArray() : collection;
}

var initialState = {
  options: [], // Contains the resolved collection of options
  results: [], // Contains the active set of results
  resultsCount: 0, // Contains the number of results incuding those nested/disabled
  selected: undefined, // Contains the resolved selected option
  highlighted: undefined, // Contains the currently highlighted option (if any)
  searchText: '', // Contains the text of the current search
  lastSearchedText: '', // Contains the text of the last finished search
  loading: false, // Truthy if there is a pending promise that will update the results
  isActive: false, // Truthy if the trigger is focused. Other subcomponents can mark it as active depending on other logic.
  // Private API (for now)
  _expirableSearchText: ''
};

export default Component.extend({
  // HTML
  layout: layout,
  tagName: '',

  // Options
  searchEnabled: fallbackIfUndefined(true),
  matchTriggerWidth: fallbackIfUndefined(true),
  matcher: fallbackIfUndefined(defaultMatcher),
  loadingMessage: fallbackIfUndefined('Loading options...'),
  noMatchesMessage: fallbackIfUndefined('No results found'),
  searchMessage: fallbackIfUndefined('Type to search'),
  closeOnSelect: fallbackIfUndefined(true),
  defaultHighlighted: fallbackIfUndefined(defaultHighlighted),

  afterOptionsComponent: fallbackIfUndefined(null),
  beforeOptionsComponent: fallbackIfUndefined('power-select/before-options'),
  optionsComponent: fallbackIfUndefined('power-select/options'),
  selectedItemComponent: fallbackIfUndefined(null),
  triggerComponent: fallbackIfUndefined('power-select/trigger'),
  searchMessageComponent: fallbackIfUndefined('power-select/search-message'),

  // Private state
  publicAPI: initialState,

  // Lifecycle hooks
  init: function init() {
    var _this = this;

    this._super.apply(this, arguments);
    this._publicAPIActions = {
      search: function search() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return _this.send.apply(_this, ['search'].concat(args));
      },
      highlight: function highlight() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return _this.send.apply(_this, ['highlight'].concat(args));
      },
      select: function select() {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return _this.send.apply(_this, ['select'].concat(args));
      },
      choose: function choose() {
        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        return _this.send.apply(_this, ['choose'].concat(args));
      },
      scrollTo: function scrollTo() {
        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }

        return scheduleOnce.apply(undefined, ['afterRender', _this, _this.send, 'scrollTo'].concat(args));
      }
    };
    assert('{{power-select}} requires an `onchange` function', this.get('onchange') && typeof this.get('onchange') === 'function');
  },

  willDestroy: function willDestroy() {
    this._super.apply(this, arguments);
    this._removeObserversInOptions();
    this._removeObserversInSelected();
    var action = this.get('registerAPI');
    if (action) {
      action(null);
    }
  },

  // CPs
  selected: computed({
    get: function get() {
      return null;
    },
    set: function set(_, selected) {
      if (selected && selected.then) {
        this.get('_updateSelectedTask').perform(selected);
      } else {
        scheduleOnce('actions', this, this.updateSelection, selected);
      }
      return selected;
    }
  }),

  options: computed({
    get: function get() {
      return [];
    },
    set: function set(_, options, oldOptions) {
      if (options === oldOptions) {
        return options;
      }
      if (options && options.then) {
        this.get('_updateOptionsTask').perform(options);
      } else {
        scheduleOnce('actions', this, this.updateOptions, options);
      }
      return options;
    }
  }),

  optionMatcher: computed('searchField', 'matcher', function () {
    var _getProperties = this.getProperties('matcher', 'searchField');

    var matcher = _getProperties.matcher;
    var searchField = _getProperties.searchField;

    if (searchField && matcher === defaultMatcher) {
      return function (option, text) {
        return matcher(get(option, searchField), text);
      };
    } else {
      return function (option, text) {
        return matcher(option, text);
      };
    }
  }),

  concatenatedTriggerClasses: computed('triggerClass', 'publicAPI.isActive', function () {
    var classes = ['ember-power-select-trigger'];
    if (this.get('publicAPI.isActive')) {
      classes.push('ember-power-select-trigger--active');
    }
    return concatWithProperty(classes, this.get('triggerClass'));
  }),

  concatenatedDropdownClasses: computed('dropdownClass', 'publicAPI.isActive', function () {
    var classes = ['ember-power-select-dropdown'];
    if (this.get('publicAPI.isActive')) {
      classes.push('ember-power-select-dropdown--active');
    }
    return concatWithProperty(classes, this.get('dropdownClass'));
  }),

  mustShowSearchMessage: computed('publicAPI.{loading,searchText,resultsCount}', 'search', 'searchMessage', function () {
    var publicAPI = this.get('publicAPI');
    return !publicAPI.loading && publicAPI.searchText.length === 0 && !!this.get('search') && !!this.get('searchMessage') && publicAPI.resultsCount === 0;
  }),

  mustShowNoMessages: computed('search', 'publicAPI.{lastSearchedText,resultsCount,loading}', function () {
    var publicAPI = this.get('publicAPI');
    return !publicAPI.loading && publicAPI.resultsCount === 0 && (!this.get('search') || publicAPI.lastSearchedText.length > 0);
  }),

  // Actions
  actions: {
    registerAPI: function registerAPI(dropdown) {
      if (!dropdown) {
        return;
      }
      var publicAPI = assign({}, this.get('publicAPI'), dropdown);
      publicAPI.actions = assign({}, dropdown.actions, this._publicAPIActions);
      this.setProperties({
        publicAPI: publicAPI,
        optionsId: 'ember-power-select-options-' + publicAPI.uniqueId
      });
      var action = this.get('registerAPI');
      if (action) {
        action(publicAPI);
      }
    },

    onOpen: function onOpen(_, e) {
      var action = this.get('onopen');
      if (action && action(this.get('publicAPI'), e) === false) {
        return false;
      }
      if (e) {
        this.openingEvent = e;
        if (e.type === 'keydown' && (e.keyCode === 38 || e.keyCode === 40)) {
          e.preventDefault();
        }
      }
      this.resetHighlighted();
    },

    onClose: function onClose(_, e) {
      var action = this.get('onclose');
      if (action && action(this.get('publicAPI'), e) === false) {
        return false;
      }
      if (e) {
        this.openingEvent = null;
      }
      this.updateState({ highlighted: undefined });
    },

    onInput: function onInput(e) {
      var term = e.target.value;
      var action = this.get('oninput');
      var publicAPI = this.get('publicAPI');
      var correctedTerm = undefined;
      if (action) {
        correctedTerm = action(e.target.value, publicAPI, e);
        if (correctedTerm === false) {
          return;
        }
      }
      publicAPI.actions.search(typeof correctedTerm === 'string' ? correctedTerm : term);
    },

    highlight: function highlight(option /* , e */) {
      if (option && get(option, 'disabled')) {
        return;
      }
      this.updateState({ highlighted: option });
    },

    select: function select(selected /* , e */) {
      var publicAPI = this.get('publicAPI');
      if (!isEqual(publicAPI.selected, selected)) {
        this.get('onchange')(selected, publicAPI);
      }
    },

    search: function search(term) {
      if (isBlank(term)) {
        this._resetSearch();
      } else if (this.get('search')) {
        this._performSearch(term);
      } else {
        this._performFilter(term);
      }
    },

    choose: function choose(selected, e) {
      if (e && e.clientY) {
        if (this.openingEvent && this.openingEvent.clientY) {
          if (Math.abs(this.openingEvent.clientY - e.clientY) < 2) {
            return;
          }
        }
      }
      var publicAPI = this.get('publicAPI');
      publicAPI.actions.select(this.get('buildSelection')(selected, publicAPI), e);
      if (this.get('closeOnSelect')) {
        publicAPI.actions.close(e);
        return false;
      }
    },

    // keydowns handled by the trigger provided by ember-basic-dropdown
    onTriggerKeydown: function onTriggerKeydown(_, e) {
      var onkeydown = this.get('onkeydown');
      if (onkeydown && onkeydown(this.get('publicAPI'), e) === false) {
        return false;
      }
      if (e.keyCode >= 48 && e.keyCode <= 90) {
        // Keys 0-9, a-z or SPACE
        this.get('triggerTypingTask').perform(e);
      } else if (e.keyCode === 32) {
        // Space
        return this._handleKeySpace(e);
      } else {
        return this._routeKeydown(e);
      }
    },

    // keydowns handled by inputs inside the component
    onKeydown: function onKeydown(e) {
      var onkeydown = this.get('onkeydown');
      if (onkeydown && onkeydown(this.get('publicAPI'), e) === false) {
        return false;
      }
      return this._routeKeydown(e);
    },

    scrollTo: function scrollTo(option /* , e */) {
      if (!self.document || !option) {
        return;
      }
      var publicAPI = this.get('publicAPI');
      var optionsList = self.document.getElementById('ember-power-select-options-' + publicAPI.uniqueId);
      if (!optionsList) {
        return;
      }
      var index = indexOfOption(publicAPI.results, option);
      if (index === -1) {
        return;
      }
      var optionElement = optionsList.querySelectorAll('[data-option-index]').item(index);
      var optionTopScroll = optionElement.offsetTop - optionsList.offsetTop;
      var optionBottomScroll = optionTopScroll + optionElement.offsetHeight;
      if (optionBottomScroll > optionsList.offsetHeight + optionsList.scrollTop) {
        optionsList.scrollTop = optionBottomScroll - optionsList.offsetHeight;
      } else if (optionTopScroll < optionsList.scrollTop) {
        optionsList.scrollTop = optionTopScroll;
      }
    },

    onTriggerFocus: function onTriggerFocus(_, event) {
      this.send('activate');
      var action = this.get('onfocus');
      if (action) {
        action(this.get('publicAPI'), event);
      }
    },

    onFocus: function onFocus(event) {
      this.send('activate');
      var action = this.get('onfocus');
      if (action) {
        action(this.get('publicAPI'), event);
      }
    },

    onTriggerBlur: function onTriggerBlur(_, event) {
      this.send('deactivate');
      var action = this.get('onblur');
      if (action) {
        action(this.get('publicAPI'), event);
      }
    },

    onBlur: function onBlur(event) {
      this.send('deactivate');
      var action = this.get('onblur');
      if (action) {
        action(this.get('publicAPI'), event);
      }
    },

    activate: function activate() {
      this.updateState({ isActive: true });
    },

    deactivate: function deactivate() {
      this.updateState({ isActive: false });
    }
  },

  // Tasks
  triggerTypingTask: task(regeneratorRuntime.mark(function callee$0$0(e) {
    var publicAPI, term, matches, firstMatch;
    return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          publicAPI = this.get('publicAPI');
          term = publicAPI._expirableSearchText + String.fromCharCode(e.keyCode);

          this.updateState({ _expirableSearchText: term });
          matches = this.filter(publicAPI.options, term, true);

          if (get(matches, 'length') > 0) {
            firstMatch = optionAtIndex(matches, 0);

            if (firstMatch !== undefined) {
              if (publicAPI.isOpen) {
                publicAPI.actions.highlight(firstMatch.option, e);
                publicAPI.actions.scrollTo(firstMatch.option, e);
              } else {
                publicAPI.actions.select(firstMatch.option, e);
              }
            }
          }
          context$1$0.next = 7;
          return timeout(1000);

        case 7:
          this.updateState({ _expirableSearchText: '' });

        case 8:
        case 'end':
          return context$1$0.stop();
      }
    }, callee$0$0, this);
  })).restartable(),

  _updateSelectedTask: task(regeneratorRuntime.mark(function callee$0$0(selectionPromise) {
    var selection;
    return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.next = 2;
          return selectionPromise;

        case 2:
          selection = context$1$0.sent;

          this.updateSelection(selection);

        case 4:
        case 'end':
          return context$1$0.stop();
      }
    }, callee$0$0, this);
  })).restartable(),

  _updateOptionsTask: task(regeneratorRuntime.mark(function callee$0$0(optionsPromise) {
    var options;
    return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          this.updateState({ loading: true });
          context$1$0.prev = 1;
          context$1$0.next = 4;
          return optionsPromise;

        case 4:
          options = context$1$0.sent;

          this.updateOptions(options);

        case 6:
          context$1$0.prev = 6;

          this.updateState({ loading: false });
          return context$1$0.finish(6);

        case 9:
        case 'end':
          return context$1$0.stop();
      }
    }, callee$0$0, this, [[1,, 6, 9]]);
  })).restartable(),

  handleAsyncSearchTask: task(regeneratorRuntime.mark(function callee$0$0(term, searchThenable) {
    var results, resultsArray;
    return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.prev = 0;

          this.updateState({ loading: true });
          context$1$0.next = 4;
          return searchThenable;

        case 4:
          results = context$1$0.sent;
          resultsArray = toPlainArray(results);

          this.updateState({
            results: resultsArray,
            lastSearchedText: term,
            resultsCount: countOptions(results),
            loading: false
          });
          this.resetHighlighted();
          context$1$0.next = 13;
          break;

        case 10:
          context$1$0.prev = 10;
          context$1$0.t0 = context$1$0['catch'](0);

          this.updateState({ lastSearchedText: term, loading: false });

        case 13:
          context$1$0.prev = 13;

          if (typeof searchThenable.cancel === 'function') {
            searchThenable.cancel();
          }
          return context$1$0.finish(13);

        case 16:
        case 'end':
          return context$1$0.stop();
      }
    }, callee$0$0, this, [[0, 10, 13, 16]]);
  })).restartable(),

  // Methods
  filter: function filter(options, term) {
    var skipDisabled = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    return filterOptions(options || [], term, this.get('optionMatcher'), skipDisabled);
  },

  updateOptions: function updateOptions(options) {
    this._removeObserversInOptions();
    if (!options) {
      return;
    }
    if (options && options.addObserver) {
      options.addObserver('[]', this, this._updateOptionsAndResults);
      this._observedOptions = options;
    }
    this._updateOptionsAndResults(options);
  },

  updateSelection: function updateSelection(selection) {
    this._removeObserversInSelected();
    if (isEmberArray(selection)) {
      if (selection && selection.addObserver) {
        selection.addObserver('[]', this, this._updateSelectedArray);
        this._observedSelected = selection;
      }
      this._updateSelectedArray(selection);
    } else if (selection !== this.get('publicAPI').selected) {
      this.updateState({ selected: selection, highlighted: selection });
    }
  },

  resetHighlighted: function resetHighlighted() {
    var publicAPI = this.get('publicAPI');
    var defaultHightlighted = this.get('defaultHighlighted');
    var highlighted = undefined;
    if (typeof defaultHightlighted === 'function') {
      highlighted = defaultHightlighted(publicAPI);
    } else {
      highlighted = defaultHightlighted;
    }
    this.updateState({ highlighted: highlighted });
  },

  buildSelection: function buildSelection(option /* , select */) {
    return option;
  },

  _updateOptionsAndResults: function _updateOptionsAndResults(opts) {
    if (get(this, 'isDestroyed')) {
      return;
    }
    var options = toPlainArray(opts);
    var publicAPI = undefined;
    if (this.get('search')) {
      // external search
      publicAPI = this.updateState({ options: options, results: options, resultsCount: countOptions(options), loading: false });
    } else {
      // filter
      publicAPI = this.get('publicAPI');
      var results = isBlank(publicAPI.searchText) ? options : this.filter(options, publicAPI.searchText);
      publicAPI = this.updateState({ results: results, options: options, resultsCount: countOptions(results), loading: false });
    }
    if (publicAPI.isOpen) {
      this.resetHighlighted();
    }
  },

  _updateSelectedArray: function _updateSelectedArray(selection) {
    if (get(this, 'isDestroyed')) {
      return;
    }
    this.updateState({ selected: toPlainArray(selection) });
  },

  _resetSearch: function _resetSearch() {
    var results = this.get('publicAPI').options;
    this.get('handleAsyncSearchTask').cancelAll();
    this.updateState({
      results: results,
      searchText: '',
      lastSearchedText: '',
      resultsCount: countOptions(results),
      loading: false
    });
  },

  _performFilter: function _performFilter(term) {
    var results = this.filter(this.get('publicAPI').options, term);
    this.updateState({ results: results, searchText: term, lastSearchedText: term, resultsCount: countOptions(results) });
    this.resetHighlighted();
  },

  _performSearch: function _performSearch(term) {
    var searchAction = this.get('search');
    var publicAPI = this.updateState({ searchText: term });
    var search = searchAction(term, publicAPI);
    if (!search) {
      publicAPI = this.updateState({ lastSearchedText: term });
    } else if (search.then) {
      this.get('handleAsyncSearchTask').perform(term, search);
    } else {
      var resultsArray = toPlainArray(search);
      this.updateState({ results: resultsArray, lastSearchedText: term, resultsCount: countOptions(resultsArray) });
      this.resetHighlighted();
    }
  },

  _routeKeydown: function _routeKeydown(e) {
    if (e.keyCode === 38 || e.keyCode === 40) {
      // Up & Down
      return this._handleKeyUpDown(e);
    } else if (e.keyCode === 13) {
      // ENTER
      return this._handleKeyEnter(e);
    } else if (e.keyCode === 9) {
      // Tab
      return this._handleKeyTab(e);
    } else if (e.keyCode === 27) {
      // ESC
      return this._handleKeyESC(e);
    }
  },

  _handleKeyUpDown: function _handleKeyUpDown(e) {
    var publicAPI = this.get('publicAPI');
    if (publicAPI.isOpen) {
      e.preventDefault();
      e.stopPropagation();
      var step = e.keyCode === 40 ? 1 : -1;
      var newHighlighted = advanceSelectableOption(publicAPI.results, publicAPI.highlighted, step);
      publicAPI.actions.highlight(newHighlighted, e);
      publicAPI.actions.scrollTo(newHighlighted);
    } else {
      publicAPI.actions.open(e);
    }
  },

  _handleKeyEnter: function _handleKeyEnter(e) {
    var publicAPI = this.get('publicAPI');
    if (publicAPI.isOpen && publicAPI.highlighted !== undefined) {
      publicAPI.actions.choose(publicAPI.highlighted, e);
      return false;
    }
  },

  _handleKeySpace: function _handleKeySpace(e) {
    var publicAPI = this.get('publicAPI');
    if (publicAPI.isOpen && publicAPI.highlighted !== undefined) {
      publicAPI.actions.choose(publicAPI.highlighted, e);
      return false;
    }
  },

  _handleKeyTab: function _handleKeyTab(e) {
    this.get('publicAPI').actions.close(e);
  },

  _handleKeyESC: function _handleKeyESC(e) {
    this.get('publicAPI').actions.close(e);
  },

  _removeObserversInOptions: function _removeObserversInOptions() {
    if (this._observedOptions) {
      this._observedOptions.removeObserver('[]', this, this._updateOptionsAndResults);
    }
  },

  _removeObserversInSelected: function _removeObserversInSelected() {
    if (this._observedSelected) {
      this._observedSelected.removeObserver('[]', this, this._updateSelectedArray);
    }
  },

  updateState: function updateState(changes) {
    var newState = set(this, 'publicAPI', assign({}, this.get('publicAPI'), changes));
    var registerAPI = this.get('registerAPI');
    if (registerAPI) {
      registerAPI(newState);
    }
    return newState;
  }
});