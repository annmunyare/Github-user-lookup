export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "triple-curlies"
      },
      "revision": "Ember@2.4.6",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 6,
          "column": 0
        }
      },
      "moduleName": "modules/ember-paper/templates/components/paper-progress-linear.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","md-dashed");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","md-bar md-bar1");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","md-bar md-bar2");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [3]);
      var element2 = dom.childAt(element0, [5]);
      var morphs = new Array(3);
      morphs[0] = dom.createAttrMorph(element0, 'class');
      morphs[1] = dom.createAttrMorph(element1, 'style');
      morphs[2] = dom.createAttrMorph(element2, 'style');
      return morphs;
    },
    statements: [
      ["attribute","class",["concat",["md-container ",["get","queryModeClass",["loc",[null,[1,27],[1,41]]]]]]],
      ["attribute","style",["get","bar1Style",["loc",[null,[3,38],[3,47]]]]],
      ["attribute","style",["get","bar2Style",["loc",[null,[4,38],[4,47]]]]]
    ],
    locals: [],
    templates: []
  };
}()));