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
          "line": 13,
          "column": 6
        }
      },
      "moduleName": "modules/ember-paper/templates/components/paper-progress-circular.hbs"
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
      dom.setAttribute(el2,"class","md-spinner-wrapper");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","md-inner ");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","md-gap");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","md-left");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","md-half-circle");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","md-right");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","md-half-circle");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [1, 1]);
      var element2 = dom.childAt(element1, [1]);
      var element3 = dom.childAt(element1, [3, 1]);
      var element4 = dom.childAt(element1, [5, 1]);
      var morphs = new Array(5);
      morphs[0] = dom.createAttrMorph(element0, 'class');
      morphs[1] = dom.createAttrMorph(element0, 'style');
      morphs[2] = dom.createAttrMorph(element2, 'style');
      morphs[3] = dom.createAttrMorph(element3, 'style');
      morphs[4] = dom.createAttrMorph(element4, 'style');
      return morphs;
    },
    statements: [
      ["attribute","class",["concat",["md-scale-wrapper ",["get","spinnerClass",["loc",[null,[1,31],[1,43]]]]]]],
      ["attribute","style",["get","scaleWrapperStyle",["loc",[null,[1,55],[1,72]]]]],
      ["attribute","style",["get","gapStyle",["loc",[null,[4,34],[4,42]]]]],
      ["attribute","style",["get","leftStyle",["loc",[null,[6,44],[6,53]]]]],
      ["attribute","style",["get","rightStyle",["loc",[null,[9,44],[9,54]]]]]
    ],
    locals: [],
    templates: []
  };
}()));