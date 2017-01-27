export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type"
        ]
      },
      "revision": "Ember@2.4.6",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 4,
          "column": 3
        }
      },
      "moduleName": "modules/ember-paper/templates/components/paper-card-header-text.hbs"
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
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["inline","yield",[["subexpr","hash",[],["title",["subexpr","component",["paper-card-header-title"],[],["loc",[null,[2,8],[2,45]]]],"subhead",["subexpr","component",["paper-card-header-subhead"],[],["loc",[null,[3,10],[3,49]]]]],["loc",[null,[1,8],[4,1]]]]],[],["loc",[null,[1,0],[4,3]]]]
    ],
    locals: [],
    templates: []
  };
}()));