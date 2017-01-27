define("ember-power-select/templates/components/power-select", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
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
                  "line": 24,
                  "column": 4
                },
                "end": {
                  "line": 40,
                  "column": 4
                }
              },
              "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
            },
            isEmpty: false,
            arity: 2,
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
            statements: [["inline", "yield", [["get", "opt", ["loc", [null, [39, 14], [39, 17]]]], ["get", "term", ["loc", [null, [39, 18], [39, 22]]]]], [], ["loc", [null, [39, 6], [39, 24]]]]],
            locals: ["opt", "term"],
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
                "line": 13,
                "column": 2
              },
              "end": {
                "line": 42,
                "column": 2
              }
            },
            "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            return morphs;
          },
          statements: [["block", "component", [["get", "triggerComponent", ["loc", [null, [24, 17], [24, 33]]]]], ["allowClear", ["subexpr", "readonly", [["get", "allowClear", ["loc", [null, [25, 27], [25, 37]]]]], [], ["loc", [null, [25, 17], [25, 38]]]], "buildSelection", ["subexpr", "readonly", [["get", "buildSelection", ["loc", [null, [26, 31], [26, 45]]]]], [], ["loc", [null, [26, 21], [26, 46]]]], "extra", ["subexpr", "readonly", [["get", "extra", ["loc", [null, [27, 22], [27, 27]]]]], [], ["loc", [null, [27, 12], [27, 28]]]], "listboxId", ["subexpr", "readonly", [["get", "optionsId", ["loc", [null, [28, 26], [28, 35]]]]], [], ["loc", [null, [28, 16], [28, 36]]]], "onFocus", ["subexpr", "action", ["onFocus"], [], ["loc", [null, [29, 14], [29, 32]]]], "onBlur", ["subexpr", "action", ["onBlur"], [], ["loc", [null, [30, 13], [30, 30]]]], "onInput", ["subexpr", "action", ["onInput"], [], ["loc", [null, [31, 14], [31, 32]]]], "placeholder", ["subexpr", "readonly", [["get", "placeholder", ["loc", [null, [32, 28], [32, 39]]]]], [], ["loc", [null, [32, 18], [32, 40]]]], "onKeydown", ["subexpr", "action", ["onKeydown"], [], ["loc", [null, [33, 16], [33, 36]]]], "searchEnabled", ["subexpr", "readonly", [["get", "searchEnabled", ["loc", [null, [34, 30], [34, 43]]]]], [], ["loc", [null, [34, 20], [34, 44]]]], "searchField", ["subexpr", "readonly", [["get", "searchField", ["loc", [null, [35, 28], [35, 39]]]]], [], ["loc", [null, [35, 18], [35, 40]]]], "select", ["subexpr", "readonly", [["get", "publicAPI", ["loc", [null, [36, 23], [36, 32]]]]], [], ["loc", [null, [36, 13], [36, 33]]]], "selectedItemComponent", ["subexpr", "readonly", [["get", "selectedItemComponent", ["loc", [null, [37, 38], [37, 59]]]]], [], ["loc", [null, [37, 28], [37, 60]]]]], 0, null, ["loc", [null, [24, 4], [40, 18]]]]],
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
                  "line": 57,
                  "column": 4
                },
                "end": {
                  "line": 62,
                  "column": 4
                }
              },
              "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
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
            statements: [["inline", "component", [["get", "searchMessageComponent", ["loc", [null, [58, 18], [58, 40]]]]], ["searchMessage", ["subexpr", "readonly", [["get", "searchMessage", ["loc", [null, [59, 32], [59, 45]]]]], [], ["loc", [null, [59, 22], [59, 46]]]], "select", ["subexpr", "readonly", [["get", "publicAPI", ["loc", [null, [60, 25], [60, 34]]]]], [], ["loc", [null, [60, 15], [60, 35]]]]], ["loc", [null, [58, 6], [61, 8]]]]],
            locals: [],
            templates: []
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
                      "line": 63,
                      "column": 6
                    },
                    "end": {
                      "line": 65,
                      "column": 6
                    }
                  },
                  "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
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
                statements: [["inline", "yield", [], ["to", "inverse"], ["loc", [null, [64, 8], [64, 30]]]]],
                locals: [],
                templates: []
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
                        "line": 65,
                        "column": 6
                      },
                      "end": {
                        "line": 71,
                        "column": 6
                      }
                    },
                    "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("        ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("ul");
                    dom.setAttribute(el1, "class", "ember-power-select-options");
                    dom.setAttribute(el1, "role", "listbox");
                    var el2 = dom.createTextNode("\n          ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createElement("li");
                    dom.setAttribute(el2, "class", "ember-power-select-option ember-power-select-option--no-matches-message");
                    dom.setAttribute(el2, "role", "option");
                    var el3 = dom.createTextNode("\n            ");
                    dom.appendChild(el2, el3);
                    var el3 = dom.createComment("");
                    dom.appendChild(el2, el3);
                    var el3 = dom.createTextNode("\n          ");
                    dom.appendChild(el2, el3);
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n        ");
                    dom.appendChild(el1, el2);
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode("\n      ");
                    dom.appendChild(el0, el1);
                    return el0;
                  },
                  buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
                    return morphs;
                  },
                  statements: [["content", "noMatchesMessage", ["loc", [null, [68, 12], [68, 32]]]]],
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
                      "line": 65,
                      "column": 6
                    },
                    "end": {
                      "line": 71,
                      "column": 6
                    }
                  },
                  "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
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
                statements: [["block", "if", [["get", "noMatchesMessage", ["loc", [null, [65, 16], [65, 32]]]]], [], 0, null, ["loc", [null, [65, 6], [71, 6]]]]],
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
                    "line": 62,
                    "column": 4
                  },
                  "end": {
                    "line": 72,
                    "column": 4
                  }
                },
                "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
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
              statements: [["block", "if", [["subexpr", "hasBlock", ["inverse"], [], ["loc", [null, [63, 12], [63, 32]]]]], [], 0, 1, ["loc", [null, [63, 6], [71, 13]]]]],
              locals: [],
              templates: [child0, child1]
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
                      "line": 73,
                      "column": 6
                    },
                    "end": {
                      "line": 83,
                      "column": 6
                    }
                  },
                  "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
                },
                isEmpty: false,
                arity: 2,
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
                statements: [["inline", "yield", [["get", "option", ["loc", [null, [82, 16], [82, 22]]]], ["get", "term", ["loc", [null, [82, 23], [82, 27]]]]], [], ["loc", [null, [82, 8], [82, 29]]]]],
                locals: ["option", "term"],
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
                    "line": 72,
                    "column": 4
                  },
                  "end": {
                    "line": 84,
                    "column": 4
                  }
                },
                "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("    ");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                return morphs;
              },
              statements: [["block", "component", [["get", "optionsComponent", ["loc", [null, [73, 19], [73, 35]]]]], ["class", "ember-power-select-options", "groupIndex", "", "loadingMessage", ["subexpr", "readonly", [["get", "loadingMessage", ["loc", [null, [76, 33], [76, 47]]]]], [], ["loc", [null, [76, 23], [76, 48]]]], "id", ["subexpr", "readonly", [["get", "optionsId", ["loc", [null, [77, 21], [77, 30]]]]], [], ["loc", [null, [77, 11], [77, 31]]]], "options", ["subexpr", "readonly", [["get", "publicAPI.results", ["loc", [null, [78, 26], [78, 43]]]]], [], ["loc", [null, [78, 16], [78, 44]]]], "optionsComponent", ["subexpr", "readonly", [["get", "optionsComponent", ["loc", [null, [79, 35], [79, 51]]]]], [], ["loc", [null, [79, 25], [79, 52]]]], "select", ["subexpr", "readonly", [["get", "publicAPI", ["loc", [null, [80, 25], [80, 34]]]]], [], ["loc", [null, [80, 15], [80, 35]]]]], 0, null, ["loc", [null, [73, 6], [83, 20]]]]],
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
                  "line": 62,
                  "column": 4
                },
                "end": {
                  "line": 84,
                  "column": 4
                }
              },
              "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
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
            statements: [["block", "if", [["get", "mustShowNoMessages", ["loc", [null, [62, 14], [62, 32]]]]], [], 0, 1, ["loc", [null, [62, 4], [84, 4]]]]],
            locals: [],
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
                "line": 44,
                "column": 2
              },
              "end": {
                "line": 86,
                "column": 2
              }
            },
            "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
            return morphs;
          },
          statements: [["inline", "component", [["get", "beforeOptionsComponent", ["loc", [null, [47, 16], [47, 38]]]]], ["extra", ["subexpr", "readonly", [["get", "extra", ["loc", [null, [48, 22], [48, 27]]]]], [], ["loc", [null, [48, 12], [48, 28]]]], "listboxId", ["subexpr", "readonly", [["get", "optionsId", ["loc", [null, [49, 26], [49, 35]]]]], [], ["loc", [null, [49, 16], [49, 36]]]], "onInput", ["subexpr", "action", ["onInput"], [], ["loc", [null, [50, 14], [50, 32]]]], "onKeydown", ["subexpr", "action", ["onKeydown"], [], ["loc", [null, [51, 16], [51, 36]]]], "searchEnabled", ["subexpr", "readonly", [["get", "searchEnabled", ["loc", [null, [52, 30], [52, 43]]]]], [], ["loc", [null, [52, 20], [52, 44]]]], "onFocus", ["subexpr", "action", ["onFocus"], [], ["loc", [null, [53, 14], [53, 32]]]], "onBlur", ["subexpr", "action", ["onBlur"], [], ["loc", [null, [54, 13], [54, 30]]]], "searchPlaceholder", ["subexpr", "readonly", [["get", "searchPlaceholder", ["loc", [null, [55, 34], [55, 51]]]]], [], ["loc", [null, [55, 24], [55, 52]]]], "select", ["subexpr", "readonly", [["get", "publicAPI", ["loc", [null, [56, 23], [56, 32]]]]], [], ["loc", [null, [56, 13], [56, 33]]]]], ["loc", [null, [47, 4], [56, 35]]]], ["block", "if", [["get", "mustShowSearchMessage", ["loc", [null, [57, 10], [57, 31]]]]], [], 0, 1, ["loc", [null, [57, 4], [84, 11]]]], ["inline", "component", [["get", "afterOptionsComponent", ["loc", [null, [85, 16], [85, 37]]]]], ["select", ["subexpr", "readonly", [["get", "publicAPI", ["loc", [null, [85, 55], [85, 64]]]]], [], ["loc", [null, [85, 45], [85, 65]]]], "extra", ["subexpr", "readonly", [["get", "extra", ["loc", [null, [85, 82], [85, 87]]]]], [], ["loc", [null, [85, 72], [85, 88]]]]], ["loc", [null, [85, 4], [85, 90]]]]],
          locals: [],
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
              "line": 87,
              "column": 0
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "dropdown.trigger", [], ["ariaDescribedBy", ["subexpr", "readonly", [["get", "ariaDescribedBy", ["loc", [null, [14, 30], [14, 45]]]]], [], ["loc", [null, [14, 20], [14, 46]]]], "ariaInvalid", ["subexpr", "readonly", [["get", "ariaInvalid", ["loc", [null, [15, 26], [15, 37]]]]], [], ["loc", [null, [15, 16], [15, 38]]]], "ariaLabel", ["subexpr", "readonly", [["get", "ariaLabel", ["loc", [null, [16, 24], [16, 33]]]]], [], ["loc", [null, [16, 14], [16, 34]]]], "ariaLabelledBy", ["subexpr", "readonly", [["get", "ariaLabelledBy", ["loc", [null, [17, 29], [17, 43]]]]], [], ["loc", [null, [17, 19], [17, 44]]]], "ariaRequired", ["subexpr", "readonly", [["get", "required", ["loc", [null, [18, 27], [18, 35]]]]], [], ["loc", [null, [18, 17], [18, 36]]]], "class", ["subexpr", "readonly", [["get", "concatenatedTriggerClasses", ["loc", [null, [19, 20], [19, 46]]]]], [], ["loc", [null, [19, 10], [19, 47]]]], "onKeyDown", ["subexpr", "action", ["onTriggerKeydown"], [], ["loc", [null, [20, 14], [20, 41]]]], "onFocus", ["subexpr", "action", ["onTriggerFocus"], [], ["loc", [null, [21, 12], [21, 37]]]], "onBlur", ["subexpr", "action", ["onTriggerBlur"], [], ["loc", [null, [22, 11], [22, 35]]]], "tabindex", ["subexpr", "readonly", [["get", "tabindex", ["loc", [null, [23, 23], [23, 31]]]]], [], ["loc", [null, [23, 13], [23, 32]]]]], 0, null, ["loc", [null, [13, 2], [42, 23]]]], ["block", "dropdown.content", [], ["class", ["subexpr", "readonly", [["get", "concatenatedDropdownClasses", ["loc", [null, [45, 20], [45, 47]]]]], [], ["loc", [null, [45, 10], [45, 48]]]], "to", ["subexpr", "readonly", [["get", "destination", ["loc", [null, [46, 17], [46, 28]]]]], [], ["loc", [null, [46, 7], [46, 29]]]]], 1, null, ["loc", [null, [44, 2], [86, 23]]]]],
        locals: ["dropdown"],
        templates: [child0, child1]
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
            "line": 87,
            "column": 19
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select.hbs"
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
      statements: [["block", "basic-dropdown", [], ["horizontalPosition", ["subexpr", "readonly", [["get", "horizontalPosition", ["loc", [null, [2, 31], [2, 49]]]]], [], ["loc", [null, [2, 21], [2, 50]]]], "initiallyOpened", ["subexpr", "readonly", [["get", "initiallyOpened", ["loc", [null, [3, 28], [3, 43]]]]], [], ["loc", [null, [3, 18], [3, 44]]]], "matchTriggerWidth", ["subexpr", "readonly", [["get", "matchTriggerWidth", ["loc", [null, [4, 30], [4, 47]]]]], [], ["loc", [null, [4, 20], [4, 48]]]], "onClose", ["subexpr", "action", ["onClose"], [], ["loc", [null, [5, 10], [5, 28]]]], "onOpen", ["subexpr", "action", ["onOpen"], [], ["loc", [null, [6, 9], [6, 26]]]], "registerAPI", ["subexpr", "action", ["registerAPI"], [], ["loc", [null, [7, 14], [7, 36]]]], "renderInPlace", ["subexpr", "readonly", [["get", "renderInPlace", ["loc", [null, [8, 26], [8, 39]]]]], [], ["loc", [null, [8, 16], [8, 40]]]], "verticalPosition", ["subexpr", "readonly", [["get", "verticalPosition", ["loc", [null, [9, 29], [9, 45]]]]], [], ["loc", [null, [9, 19], [9, 46]]]], "disabled", ["subexpr", "readonly", [["get", "disabled", ["loc", [null, [10, 21], [10, 29]]]]], [], ["loc", [null, [10, 11], [10, 30]]]]], 0, null, ["loc", [null, [1, 0], [87, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});