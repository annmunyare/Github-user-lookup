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
          "line": 27,
          "column": 0
        }
      },
      "moduleName": "modules/ember-paper/templates/components/paper-autocomplete-dropdown.hbs"
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
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","yield",[["subexpr","hash",[],["isOpen",["get","publicAPI.isOpen",["loc",[null,[2,9],[2,25]]]],"disabled",["get","publicAPI.disabled",["loc",[null,[3,11],[3,29]]]],"actions",["get","publicAPI.actions",["loc",[null,[4,10],[4,27]]]],"trigger",["subexpr","component",[["get","triggerComponent",["loc",[null,[5,21],[5,37]]]]],["appRoot",["subexpr","readonly",[["get","appRoot",["loc",[null,[6,22],[6,29]]]]],[],["loc",[null,[6,12],[6,30]]]],"dropdown",["subexpr","readonly",[["get","publicAPI",["loc",[null,[7,23],[7,32]]]]],[],["loc",[null,[7,13],[7,33]]]],"hPosition",["subexpr","readonly",[["get","hPosition",["loc",[null,[8,24],[8,33]]]]],[],["loc",[null,[8,14],[8,34]]]],"onFocus",["subexpr","action",["handleFocus"],[],["loc",[null,[9,12],[9,34]]]],"renderInPlace",["subexpr","readonly",[["get","renderInPlace",["loc",[null,[10,28],[10,41]]]]],[],["loc",[null,[10,18],[10,42]]]],"vPosition",["subexpr","readonly",[["get","vPosition",["loc",[null,[11,24],[11,33]]]]],[],["loc",[null,[11,14],[11,34]]]]],["loc",[null,[5,10],[12,3]]]],"content",["subexpr","component",[["get","contentComponent",["loc",[null,[13,21],[13,37]]]]],["appRoot",["subexpr","readonly",[["get","appRoot",["loc",[null,[14,22],[14,29]]]]],[],["loc",[null,[14,12],[14,30]]]],"dropdown",["subexpr","readonly",[["get","publicAPI",["loc",[null,[15,23],[15,32]]]]],[],["loc",[null,[15,13],[15,33]]]],"hPosition",["subexpr","readonly",[["get","hPosition",["loc",[null,[16,24],[16,33]]]]],[],["loc",[null,[16,14],[16,34]]]],"renderInPlace",["subexpr","readonly",[["get","renderInPlace",["loc",[null,[17,28],[17,41]]]]],[],["loc",[null,[17,18],[17,42]]]],"vPosition",["subexpr","readonly",[["get","vPosition",["loc",[null,[18,24],[18,33]]]]],[],["loc",[null,[18,14],[18,34]]]],"positionCoordinates",["subexpr","hash",[],["top",["get","top",["loc",[null,[20,10],[20,13]]]],"left",["get","left",["loc",[null,[21,11],[21,15]]]],"right",["get","right",["loc",[null,[22,12],[22,17]]]],"width",["get","width",["loc",[null,[23,12],[23,17]]]]],["loc",[null,[19,24],[24,5]]]]],["loc",[null,[13,10],[25,3]]]]],["loc",[null,[1,8],[26,1]]]]],[],["loc",[null,[1,0],[26,3]]]]
    ],
    locals: [],
    templates: []
  };
}()));