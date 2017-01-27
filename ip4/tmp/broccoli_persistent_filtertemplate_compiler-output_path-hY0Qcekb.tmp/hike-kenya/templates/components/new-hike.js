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
          "column": 0
        }
      },
      "moduleName": "hike-kenya/templates/components/new-hike.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"id","new-hike-form");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h3");
      var el3 = dom.createTextNode("Add a New Hike");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("form");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("label");
      dom.setAttribute(el3,"for","name");
      var el4 = dom.createTextNode("Name:");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("label");
      dom.setAttribute(el3,"for","location");
      var el4 = dom.createTextNode("Location:");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("label");
      dom.setAttribute(el3,"for","state");
      var el4 = dom.createTextNode("State:");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("label");
      dom.setAttribute(el3,"for","distance");
      var el4 = dom.createTextNode("Distance:");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("label");
      dom.setAttribute(el3,"for","difficulty");
      var el4 = dom.createTextNode("Difficulty:");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("label");
      dom.setAttribute(el3,"for","image");
      var el4 = dom.createTextNode("Image:");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("br");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createTextNode("Save");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0, 3]);
      var element1 = dom.childAt(element0, [25]);
      var morphs = new Array(7);
      morphs[0] = dom.createMorphAt(element0,2,2);
      morphs[1] = dom.createMorphAt(element0,6,6);
      morphs[2] = dom.createMorphAt(element0,10,10);
      morphs[3] = dom.createMorphAt(element0,14,14);
      morphs[4] = dom.createMorphAt(element0,18,18);
      morphs[5] = dom.createMorphAt(element0,22,22);
      morphs[6] = dom.createElementMorph(element1);
      return morphs;
    },
    statements: [
      ["inline","input",[],["value",["subexpr","@mut",[["get","name",["loc",[null,[4,49],[4,53]]]]],[],[]],"id","name"],["loc",[null,[4,35],[4,65]]]],
      ["inline","input",[],["value",["subexpr","@mut",[["get","location",["loc",[null,[5,57],[5,65]]]]],[],[]],"id","location"],["loc",[null,[5,43],[5,81]]]],
      ["inline","input",[],["value",["subexpr","@mut",[["get","state",["loc",[null,[6,51],[6,56]]]]],[],[]],"id","state"],["loc",[null,[6,37],[6,69]]]],
      ["inline","input",[],["value",["subexpr","@mut",[["get","distance",["loc",[null,[7,57],[7,65]]]]],[],[]],"id","distance"],["loc",[null,[7,43],[7,81]]]],
      ["inline","input",[],["value",["subexpr","@mut",[["get","difficulty",["loc",[null,[8,61],[8,71]]]]],[],[]],"id","difficulty"],["loc",[null,[8,47],[8,89]]]],
      ["inline","input",[],["value",["subexpr","@mut",[["get","image",["loc",[null,[9,51],[9,56]]]]],[],[]],"id","image"],["loc",[null,[9,37],[9,69]]]],
      ["element","action",["saveHike"],[],["loc",[null,[10,12],[10,33]]]]
    ],
    locals: [],
    templates: []
  };
}()));