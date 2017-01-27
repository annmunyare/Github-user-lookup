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
          "line": 23,
          "column": 0
        }
      },
      "moduleName": "modules/ember-paper/templates/components/paper-form.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","yield",[["subexpr","hash",[],["isValid",["get","isValid",["loc",[null,[2,10],[2,17]]]],"isInvalid",["get","isInvalid",["loc",[null,[3,12],[3,21]]]],"input",["subexpr","component",["paper-input"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[5,20],[5,24]]]]],[],[]],"onValidityChange",["subexpr","action",["onValidityChange"],[],["loc",[null,[6,21],[6,48]]]]],["loc",[null,[4,8],[7,3]]]],"submit-button",["subexpr","component",["paper-button"],["onClick",["subexpr","action",["onSubmit"],[],["loc",[null,[9,12],[9,31]]]],"type","submit"],["loc",[null,[8,16],[11,3]]]],"select",["subexpr","component",["paper-select"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[13,19],[13,23]]]]],[],[]],"onValidityChange",["subexpr","action",["onValidityChange"],[],["loc",[null,[14,20],[14,47]]]]],["loc",[null,[12,9],[15,3]]]],"autocomplete",["subexpr","component",["paper-autocomplete"],["parentComponent",["subexpr","@mut",[["get","this",["loc",[null,[17,19],[17,23]]]]],[],[]],"onValidityChange",["subexpr","action",["onValidityChange"],[],["loc",[null,[18,20],[18,47]]]]],["loc",[null,[16,15],[19,3]]]],"onSubmit",["subexpr","action",["onSubmit"],[],["loc",[null,[20,11],[20,30]]]]],["loc",[null,[1,8],[21,1]]]]],[],["loc",[null,[1,0],[21,3]]]]
    ],
    locals: [],
    templates: []
  };
}()));