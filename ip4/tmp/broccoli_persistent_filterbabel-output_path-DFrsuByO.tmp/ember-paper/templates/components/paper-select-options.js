define("ember-paper/templates/components/paper-select-options", ["exports"], function (exports) {
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
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-select-options.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("   ");
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
          statements: [["content", "paper-progress-circular", ["loc", [null, [3, 3], [3, 30]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "modules/ember-paper/templates/components/paper-select-options.hbs"
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
        statements: [["block", "if", [["get", "loadingMessage", ["loc", [null, [2, 8], [2, 22]]]]], [], 0, null, ["loc", [null, [2, 2], [4, 9]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
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
                  "column": 6
                },
                "end": {
                  "line": 19,
                  "column": 6
                }
              },
              "moduleName": "modules/ember-paper/templates/components/paper-select-options.hbs"
            },
            isEmpty: false,
            arity: 1,
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
            statements: [["inline", "yield", [["get", "option", ["loc", [null, [18, 16], [18, 22]]]], ["get", "select", ["loc", [null, [18, 23], [18, 29]]]]], [], ["loc", [null, [18, 8], [18, 31]]]]],
            locals: ["option"],
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
                "line": 21,
                "column": 2
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-select-options.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("md-optgroup");
            dom.setAttribute(el1, "class", "ember-power-select-group");
            dom.setAttribute(el1, "role", "option");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("label");
            dom.setAttribute(el2, "class", "ember-power-select-group-name");
            var el3 = dom.createComment("");
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
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element0, 'aria-disabled');
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
            morphs[2] = dom.createMorphAt(element0, 3, 3);
            return morphs;
          },
          statements: [["attribute", "aria-disabled", ["subexpr", "ember-power-select-true-string-if-present", [["get", "opt.disabled", ["loc", [null, [8, 108], [8, 120]]]]], [], ["loc", [null, [8, 64], [8, 122]]]]], ["content", "opt.groupName", ["loc", [null, [9, 51], [9, 68]]]], ["block", "component", [["get", "optionsComponent", ["loc", [null, [10, 19], [10, 35]]]]], ["options", ["subexpr", "readonly", [["get", "opt.options", ["loc", [null, [11, 26], [11, 37]]]]], [], ["loc", [null, [11, 16], [11, 38]]]], "select", ["subexpr", "readonly", [["get", "select", ["loc", [null, [12, 25], [12, 31]]]]], [], ["loc", [null, [12, 15], [12, 32]]]], "groupIndex", ["subexpr", "concat", [["get", "groupIndex", ["loc", [null, [13, 27], [13, 37]]]], ["get", "index", ["loc", [null, [13, 38], [13, 43]]]], "."], [], ["loc", [null, [13, 19], [13, 48]]]], "optionsComponent", ["subexpr", "readonly", [["get", "optionsComponent", ["loc", [null, [14, 35], [14, 51]]]]], [], ["loc", [null, [14, 25], [14, 52]]]], "menuParent", ["subexpr", "@mut", [["get", "menuParent", ["loc", [null, [15, 19], [15, 29]]]]], [], []], "role", "group", "class", "ember-power-select-options"], 0, null, ["loc", [null, [10, 6], [19, 20]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 22,
                  "column": 4
                },
                "end": {
                  "line": 30,
                  "column": 4
                }
              },
              "moduleName": "modules/ember-paper/templates/components/paper-select-options.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
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
            statements: [["inline", "yield", [["get", "opt", ["loc", [null, [29, 14], [29, 17]]]], ["get", "select", ["loc", [null, [29, 18], [29, 24]]]]], [], ["loc", [null, [29, 6], [29, 26]]]]],
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
                "line": 21,
                "column": 2
              },
              "end": {
                "line": 31,
                "column": 2
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-select-options.hbs"
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
          statements: [["block", "paper-option", [], ["parentComponent", ["subexpr", "@mut", [["get", "menuParent", ["loc", [null, [22, 36], [22, 46]]]]], [], []], "class", "ember-power-select-option", "aria-selected", ["subexpr", "ember-power-select-is-selected", [["get", "opt", ["loc", [null, [23, 52], [23, 55]]]], ["get", "select.selected", ["loc", [null, [23, 56], [23, 71]]]]], [], ["loc", [null, [23, 20], [23, 72]]]], "selected", ["subexpr", "if", [["subexpr", "ember-power-select-is-selected", [["get", "opt", ["loc", [null, [24, 51], [24, 54]]]], ["get", "select.selected", ["loc", [null, [24, 55], [24, 70]]]]], [], ["loc", [null, [24, 19], [24, 71]]]], "selected", null], [], ["loc", [null, [24, 15], [24, 93]]]], "aria-disabled", ["subexpr", "ember-power-select-true-string-if-present", [["get", "opt.disabled", ["loc", [null, [25, 63], [25, 75]]]]], [], ["loc", [null, [25, 20], [25, 76]]]], "aria-current", ["subexpr", "eq", [["get", "opt", ["loc", [null, [26, 23], [26, 26]]]], ["get", "select.highlighted", ["loc", [null, [26, 27], [26, 45]]]]], [], ["loc", [null, [26, 19], [26, 46]]]], "data-option-index", ["subexpr", "concat", [["get", "groupIndex", ["loc", [null, [27, 32], [27, 42]]]], ["get", "index", ["loc", [null, [27, 43], [27, 48]]]]], [], ["loc", [null, [27, 24], [27, 49]]]], "role", "option"], 0, null, ["loc", [null, [22, 4], [30, 21]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 32,
              "column": 0
            }
          },
          "moduleName": "modules/ember-paper/templates/components/paper-select-options.hbs"
        },
        isEmpty: false,
        arity: 2,
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
        statements: [["block", "if", [["get", "opt.groupName", ["loc", [null, [7, 8], [7, 21]]]]], [], 0, 1, ["loc", [null, [7, 2], [31, 9]]]]],
        locals: ["opt", "index"],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 9
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-select-options.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "select.loading", ["loc", [null, [1, 6], [1, 20]]]]], [], 0, null, ["loc", [null, [1, 0], [5, 7]]]], ["block", "each", [["get", "options", ["loc", [null, [6, 8], [6, 15]]]]], [], 1, null, ["loc", [null, [6, 0], [32, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});