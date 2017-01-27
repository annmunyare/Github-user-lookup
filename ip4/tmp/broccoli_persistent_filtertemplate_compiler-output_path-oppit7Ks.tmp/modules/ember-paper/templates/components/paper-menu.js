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
          "line": 26,
          "column": 0
        }
      },
      "moduleName": "modules/ember-paper/templates/components/paper-menu.hbs"
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
      ["inline","yield",[["subexpr","hash",[],["isOpen",["get","publicAPI.isOpen",["loc",[null,[2,9],[2,25]]]],"disabled",["get","publicAPI.disabled",["loc",[null,[3,11],[3,29]]]],"actions",["get","publicAPI.actions",["loc",[null,[4,10],[4,27]]]],"trigger",["subexpr","component",[["get","triggerComponent",["loc",[null,[5,21],[5,37]]]]],["tagName","md-menu","dropdown",["subexpr","readonly",[["get","publicAPI",["loc",[null,[7,23],[7,32]]]]],[],["loc",[null,[7,13],[7,33]]]],"hPosition",["subexpr","readonly",[["get","hPosition",["loc",[null,[8,24],[8,33]]]]],[],["loc",[null,[8,14],[8,34]]]],"onFocus",["subexpr","action",["handleFocus"],[],["loc",[null,[9,12],[9,34]]]],"renderInPlace",["subexpr","readonly",[["get","renderInPlace",["loc",[null,[10,28],[10,41]]]]],[],["loc",[null,[10,18],[10,42]]]],"vPosition",["subexpr","readonly",[["get","vPosition",["loc",[null,[11,24],[11,33]]]]],[],["loc",[null,[11,14],[11,34]]]]],["loc",[null,[5,10],[12,3]]]],"content",["subexpr","component",["paper-menu-content"],["dropdown",["subexpr","readonly",[["get","publicAPI",["loc",[null,[14,23],[14,32]]]]],[],["loc",[null,[14,13],[14,33]]]],"hPosition",["subexpr","readonly",[["get","hPosition",["loc",[null,[15,24],[15,33]]]]],[],["loc",[null,[15,14],[15,34]]]],"renderInPlace",["subexpr","readonly",[["get","renderInPlace",["loc",[null,[16,28],[16,41]]]]],[],["loc",[null,[16,18],[16,42]]]],"vPosition",["subexpr","readonly",[["get","vPosition",["loc",[null,[17,24],[17,33]]]]],[],["loc",[null,[17,14],[17,34]]]],"top",["subexpr","readonly",[["get","top",["loc",[null,[18,18],[18,21]]]]],[],["loc",[null,[18,8],[18,22]]]],"left",["subexpr","readonly",[["get","left",["loc",[null,[19,19],[19,23]]]]],[],["loc",[null,[19,9],[19,24]]]],"right",["subexpr","readonly",[["get","right",["loc",[null,[20,20],[20,25]]]]],[],["loc",[null,[20,10],[20,26]]]],"width",["subexpr","readonly",[["get","width",["loc",[null,[21,20],[21,25]]]]],[],["loc",[null,[21,10],[21,26]]]],"transform",["subexpr","@mut",[["get","transform",["loc",[null,[22,14],[22,23]]]]],[],[]],"transformOrigin",["subexpr","@mut",[["get","transformOrigin",["loc",[null,[23,20],[23,35]]]]],[],[]]],["loc",[null,[13,10],[24,3]]]]],["loc",[null,[1,8],[25,1]]]]],[],["loc",[null,[1,0],[25,3]]]]
    ],
    locals: [],
    templates: []
  };
}()));