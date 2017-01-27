define("ember-paper/templates/components/paper-card", ["exports"], function (exports) {
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
            "line": 8,
            "column": 3
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-card.hbs"
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
      statements: [["inline", "yield", [["subexpr", "hash", [], ["title", ["subexpr", "component", ["paper-card-title"], [], ["loc", [null, [2, 8], [2, 38]]]], "content", ["subexpr", "component", ["paper-card-content"], [], ["loc", [null, [3, 10], [3, 42]]]], "actions", ["subexpr", "component", ["paper-card-actions"], [], ["loc", [null, [4, 10], [4, 42]]]], "header", ["subexpr", "component", ["paper-card-header"], [], ["loc", [null, [5, 9], [5, 40]]]], "image", ["subexpr", "component", ["paper-card-image"], [], ["loc", [null, [6, 8], [6, 38]]]], "media", ["subexpr", "component", ["paper-card-media"], [], ["loc", [null, [7, 8], [7, 38]]]]], ["loc", [null, [1, 8], [8, 1]]]]], [], ["loc", [null, [1, 0], [8, 3]]]]],
      locals: [],
      templates: []
    };
  })());
});