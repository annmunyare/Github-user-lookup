define("ember-paper/templates/components/paper-menu-content-inner", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
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
            "line": 1,
            "column": 95
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-menu-content-inner.hbs"
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
      statements: [["inline", "yield", [["subexpr", "hash", [], ["menu-item", ["subexpr", "component", ["paper-menu-item"], ["dropdown", ["subexpr", "@mut", [["get", "dropdown", ["loc", [null, [1, 62], [1, 70]]]]], [], []], "parentComponent", ["subexpr", "@mut", [["get", "this", ["loc", [null, [1, 87], [1, 91]]]]], [], []]], ["loc", [null, [1, 24], [1, 92]]]]], ["loc", [null, [1, 8], [1, 93]]]]], [], ["loc", [null, [1, 0], [1, 95]]]]],
      locals: [],
      templates: []
    };
  })());
});