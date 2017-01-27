define("ember-paper/templates/components/paper-chips", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 8
              },
              "end": {
                "line": 12,
                "column": 8
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-chips.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "item", ["loc", [null, [11, 18], [11, 22]]]]], [], ["loc", [null, [11, 10], [11, 24]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 8
              },
              "end": {
                "line": 14,
                "column": 8
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-chips.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "item", ["loc", [null, [13, 16], [13, 24]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 8
              },
              "end": {
                "line": 22,
                "column": 8
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-chips.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "class", "md-chip-remove");
            dom.setAttribute(el1, "type", "button");
            dom.setAttribute(el1, "aria-hidden", "true");
            dom.setAttribute(el1, "tabindex", "-1");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "class", "md-visually-hidden");
            var el3 = dom.createTextNode(" Remove ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'onclick');
            morphs[1] = dom.createMorphAt(element0, 1, 1);
            return morphs;
          },
          statements: [["attribute", "onclick", ["subexpr", "action", [["get", "removeItem", ["loc", [null, [18, 58], [18, 68]]]], ["get", "item", ["loc", [null, [18, 69], [18, 73]]]]], [], ["loc", [null, [18, 49], [18, 75]]]]], ["inline", "paper-icon", [], ["icon", "clear", "size", 18], ["loc", [null, [19, 12], [19, 47]]]]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 24,
                "column": 6
              },
              "end": {
                "line": 26,
                "column": 6
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-chips.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "md-visually-hidden");
            var el2 = dom.createTextNode(" Press delete to remove this chip. ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 2
            },
            "end": {
              "line": 28,
              "column": 2
            }
          },
          "moduleName": "modules/ember-paper/templates/components/paper-chips.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("md-chip");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "md-chip-content");
          dom.setAttribute(el2, "tabindex", "-1");
          dom.setAttribute(el2, "aria-hidden", "true");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "md-chip-remove-container");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
          morphs[3] = dom.createMorphAt(element1, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["md-chip md-default-theme ", ["subexpr", "if", [["get", "readOnly", ["loc", [null, [8, 50], [8, 58]]]], "md-readonly"], [], ["loc", [null, [8, 45], [8, 74]]]], " ", ["subexpr", "if", [["subexpr", "eq", [["get", "activeChip", ["loc", [null, [8, 84], [8, 94]]]], ["get", "index", ["loc", [null, [8, 95], [8, 100]]]]], [], ["loc", [null, [8, 80], [8, 101]]]], "md-focused"], [], ["loc", [null, [8, 75], [8, 116]]]]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [10, 14], [10, 22]]]]], [], 0, 1, ["loc", [null, [10, 8], [14, 15]]]], ["block", "unless", [["get", "readOnly", ["loc", [null, [17, 18], [17, 26]]]]], [], 2, null, ["loc", [null, [17, 8], [22, 19]]]], ["block", "unless", [["get", "readOnly", ["loc", [null, [24, 16], [24, 24]]]]], [], 3, null, ["loc", [null, [24, 6], [26, 17]]]]],
        locals: ["item", "index"],
        templates: [child0, child1, child2, child3]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.6",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 44,
                    "column": 10
                  },
                  "end": {
                    "line": 46,
                    "column": 10
                  }
                },
                "moduleName": "modules/ember-paper/templates/components/paper-chips.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("            ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["inline", "yield", [["get", "item", ["loc", [null, [45, 20], [45, 24]]]]], [], ["loc", [null, [45, 12], [45, 26]]]]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.6",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 46,
                    "column": 10
                  },
                  "end": {
                    "line": 48,
                    "column": 10
                  }
                },
                "moduleName": "modules/ember-paper/templates/components/paper-chips.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("            ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("span");
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
                return morphs;
              },
              statements: [["content", "item", ["loc", [null, [47, 18], [47, 26]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 32,
                  "column": 8
                },
                "end": {
                  "line": 49,
                  "column": 8
                }
              },
              "moduleName": "modules/ember-paper/templates/components/paper-chips.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [44, 16], [44, 24]]]]], [], 0, 1, ["loc", [null, [44, 10], [48, 17]]]]],
            locals: ["item"],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 31,
                "column": 6
              },
              "end": {
                "line": 50,
                "column": 6
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-chips.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "paper-autocomplete", [], ["options", ["subexpr", "@mut", [["get", "options", ["loc", [null, [33, 18], [33, 25]]]]], [], []], "closeOnSelect", true, "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [35, 22], [35, 33]]]]], [], []], "searchField", ["subexpr", "@mut", [["get", "searchField", ["loc", [null, [36, 22], [36, 33]]]]], [], []], "noMatchesMessage", ["subexpr", "@mut", [["get", "noMatchesMessage", ["loc", [null, [37, 27], [37, 43]]]]], [], []], "onBlur", ["subexpr", "action", ["inputBlur"], [], ["loc", [null, [38, 17], [38, 37]]]], "onSelectionChange", ["subexpr", "action", ["autocompleteChange"], [], ["loc", [null, [39, 28], [39, 57]]]], "onSearchTextChange", ["subexpr", "action", ["searchTextChange"], [], ["loc", [null, [40, 29], [40, 56]]]], "onFocus", ["subexpr", "action", ["inputFocus"], [], ["loc", [null, [41, 18], [41, 39]]]], "onOpen", ["subexpr", "action", ["inputFocus"], [], ["loc", [null, [42, 17], [42, 38]]]], "onCreate", ["subexpr", "action", ["addItem"], [], ["loc", [null, [43, 19], [43, 37]]]]], 0, null, ["loc", [null, [32, 8], [49, 31]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 50,
                "column": 6
              },
              "end": {
                "line": 58,
                "column": 6
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-chips.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "input", [], ["tabindex", "0", "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [52, 22], [52, 33]]]]], [], []], "aria-label", "Add Tag", "value", ["subexpr", "@mut", [["get", "newChipValue", ["loc", [null, [54, 16], [54, 28]]]]], [], []], "focus-in", "inputFocus", "focus-out", "inputBlur", "enter", ["subexpr", "action", ["addItem", ["get", "newChipValue", ["loc", [null, [57, 34], [57, 46]]]]], [], ["loc", [null, [57, 16], [57, 47]]]]], ["loc", [null, [51, 8], [57, 49]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 2
            },
            "end": {
              "line": 60,
              "column": 2
            }
          },
          "moduleName": "modules/ember-paper/templates/components/paper-chips.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "md-chip-input-container");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "if", [["subexpr", "or", [["get", "requireMatch", ["loc", [null, [31, 16], [31, 28]]]], ["get", "options", ["loc", [null, [31, 29], [31, 36]]]]], [], ["loc", [null, [31, 12], [31, 37]]]]], [], 0, 1, ["loc", [null, [31, 6], [58, 13]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 62,
            "column": 0
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-chips.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("md-chips-wrap");
        dom.setAttribute(el1, "tabindex", "-1");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element2, 'class');
        morphs[1] = dom.createAttrMorph(element2, 'onkeydown');
        morphs[2] = dom.createAttrMorph(element2, 'onfocus');
        morphs[3] = dom.createAttrMorph(element2, 'onblur');
        morphs[4] = dom.createMorphAt(element2, 1, 1);
        morphs[5] = dom.createMorphAt(element2, 2, 2);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["md-chips ", ["subexpr", "if", [["subexpr", "and", [["subexpr", "not", [["get", "readOnly", ["loc", [null, [2, 33], [2, 41]]]]], [], ["loc", [null, [2, 28], [2, 42]]]], ["get", "isFocused", ["loc", [null, [2, 43], [2, 52]]]]], [], ["loc", [null, [2, 23], [2, 53]]]], "md-focused"], [], ["loc", [null, [2, 18], [2, 68]]]]]]], ["attribute", "onkeydown", ["subexpr", "action", ["keyDown"], [], ["loc", [null, [4, 12], [4, 32]]]]], ["attribute", "onfocus", ["subexpr", "action", ["chipsFocus"], [], ["loc", [null, [5, 10], [5, 33]]]]], ["attribute", "onblur", ["subexpr", "action", ["chipsBlur"], [], ["loc", [null, [6, 9], [6, 31]]]]], ["block", "each", [["get", "content", ["loc", [null, [7, 10], [7, 17]]]]], [], 0, null, ["loc", [null, [7, 2], [28, 11]]]], ["block", "unless", [["get", "readOnly", ["loc", [null, [29, 12], [29, 20]]]]], [], 1, null, ["loc", [null, [29, 2], [60, 13]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});