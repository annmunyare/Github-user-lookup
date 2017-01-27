define("ember-paper/templates/components/paper-radio-group", ["exports"], function (exports) {
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
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-radio-group.hbs"
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
      statements: [["inline", "yield", [["subexpr", "hash", [], ["radio", ["subexpr", "component", ["paper-radio"], ["toggle", ["subexpr", "@mut", [["get", "toggle", ["loc", [null, [3, 11], [3, 17]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 13], [4, 21]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [5, 15], [5, 25]]]]], [], []], "onChange", ["subexpr", "action", ["onChange"], [], ["loc", [null, [6, 13], [6, 32]]]], "parentComponent", ["subexpr", "@mut", [["get", "this", ["loc", [null, [7, 20], [7, 24]]]]], [], []], "shouldRegister", true], ["loc", [null, [2, 8], [8, 24]]]]], ["loc", [null, [1, 8], [9, 1]]]]], [], ["loc", [null, [1, 0], [9, 3]]]]],
      locals: [],
      templates: []
    };
  })());
});