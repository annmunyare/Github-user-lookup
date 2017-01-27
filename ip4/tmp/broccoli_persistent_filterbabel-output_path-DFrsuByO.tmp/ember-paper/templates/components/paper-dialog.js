define("ember-paper/templates/components/paper-dialog", ["exports"], function (exports) {
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
                  "line": 9,
                  "column": 4
                },
                "end": {
                  "line": 18,
                  "column": 4
                }
              },
              "moduleName": "modules/ember-paper/templates/components/paper-dialog.hbs"
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
            statements: [["content", "yield", ["loc", [null, [17, 6], [17, 15]]]]],
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
                "line": 8,
                "column": 2
              },
              "end": {
                "line": 19,
                "column": 2
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-dialog.hbs"
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
          statements: [["block", "paper-dialog-inner", [], ["class", ["subexpr", "readonly", [["get", "class", ["loc", [null, [10, 22], [10, 27]]]]], [], ["loc", [null, [10, 12], [10, 28]]]], "origin", ["subexpr", "@mut", [["get", "origin", ["loc", [null, [11, 13], [11, 19]]]]], [], []], "defaultedParent", ["subexpr", "@mut", [["get", "defaultedParent", ["loc", [null, [12, 22], [12, 37]]]]], [], []], "defaultedOpenFrom", ["subexpr", "@mut", [["get", "defaultedOpenFrom", ["loc", [null, [13, 24], [13, 41]]]]], [], []], "defaultedCloseTo", ["subexpr", "@mut", [["get", "defaultedCloseTo", ["loc", [null, [14, 23], [14, 39]]]]], [], []], "fullscreen", ["subexpr", "@mut", [["get", "fullscreen", ["loc", [null, [15, 17], [15, 27]]]]], [], []], "focusOnOpen", ["subexpr", "@mut", [["get", "focusOnOpen", ["loc", [null, [16, 18], [16, 29]]]]], [], []]], 0, null, ["loc", [null, [9, 4], [18, 27]]]]],
          locals: [],
          templates: [child0]
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
              "line": 20,
              "column": 0
            }
          },
          "moduleName": "modules/ember-paper/templates/components/paper-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
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
        statements: [["inline", "paper-backdrop", [], ["locked-open", ["subexpr", "@mut", [["get", "isLockedOpen", ["loc", [null, [3, 16], [3, 28]]]]], [], []], "opaque", true, "fixed", ["subexpr", "unless", [["get", "parent", ["loc", [null, [5, 18], [5, 24]]]], true], [], ["loc", [null, [5, 10], [5, 30]]]], "class", "md-dialog-backdrop", "onClick", ["subexpr", "action", ["outsideClicked"], [], ["loc", [null, [7, 12], [7, 37]]]]], ["loc", [null, [2, 2], [7, 39]]]], ["block", "paper-dialog-container", [], ["class", ["subexpr", "readonly", [["get", "dialogContainerClass", ["loc", [null, [8, 44], [8, 64]]]]], [], ["loc", [null, [8, 34], [8, 65]]]], "outsideClicked", ["subexpr", "action", ["outsideClicked"], [], ["loc", [null, [8, 81], [8, 106]]]]], 0, null, ["loc", [null, [8, 2], [19, 29]]]]],
        locals: [],
        templates: [child0]
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
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-dialog.hbs"
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
      statements: [["block", "ember-wormhole", [], ["to", ["subexpr", "@mut", [["get", "destinationId", ["loc", [null, [1, 21], [1, 34]]]]], [], []]], 0, null, ["loc", [null, [1, 0], [20, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});