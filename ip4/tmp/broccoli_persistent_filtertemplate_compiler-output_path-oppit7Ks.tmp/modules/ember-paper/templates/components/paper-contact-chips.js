export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 10
            },
            "end": {
              "line": 17,
              "column": 10
            }
          },
          "moduleName": "modules/ember-paper/templates/components/paper-contact-chips.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","md-chip-remove");
          dom.setAttribute(el1,"type","button");
          dom.setAttribute(el1,"aria-hidden","true");
          dom.setAttribute(el1,"tabindex","-1");
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","md-visually-hidden");
          var el3 = dom.createTextNode(" Remove ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element2);
          morphs[1] = dom.createMorphAt(element2,1,1);
          return morphs;
        },
        statements: [
          ["element","action",[["subexpr","action",[["get","removeItem",["loc",[null,[13,60],[13,70]]]],["get","item",["loc",[null,[13,71],[13,75]]]]],[],["loc",[null,[13,52],[13,76]]]]],[],["loc",[null,[13,43],[13,78]]]],
          ["inline","paper-icon",[],["icon","clear","size",18],["loc",[null,[14,14],[14,49]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 8
            },
            "end": {
              "line": 21,
              "column": 8
            }
          },
          "moduleName": "modules/ember-paper/templates/components/paper-contact-chips.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","md-visually-hidden");
          var el2 = dom.createTextNode(" Press delete to remove this chip. ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 3,
            "column": 4
          },
          "end": {
            "line": 23,
            "column": 4
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-contact-chips.hbs"
      },
      isEmpty: false,
      arity: 2,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("md-chip");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","md-chip-content");
        dom.setAttribute(el2,"tabindex","-1");
        dom.setAttribute(el2,"aria-hidden","true");
        var el3 = dom.createTextNode("\n          ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","md-contact-avatar");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n          ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"class","md-contact-name");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","md-chip-remove-container");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("      ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [1]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element4, [1, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element3, 'class');
        morphs[1] = dom.createAttrMorph(element5, 'src');
        morphs[2] = dom.createMorphAt(dom.childAt(element4, [3]),0,0);
        morphs[3] = dom.createMorphAt(dom.childAt(element3, [3]),1,1);
        morphs[4] = dom.createMorphAt(element3,5,5);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",["md-chip md-default-theme ",["subexpr","if",[["get","readOnly",["loc",[null,[4,52],[4,60]]]],"md-readonly"],[],["loc",[null,[4,47],[4,76]]]]," ",["subexpr","if",[["subexpr","eq",[["get","activeChip",["loc",[null,[4,86],[4,96]]]],["get","index",["loc",[null,[4,97],[4,102]]]]],[],["loc",[null,[4,82],[4,103]]]],"md-focused"],[],["loc",[null,[4,77],[4,118]]]]]]],
        ["attribute","src",["subexpr","get",[["get","item",["loc",[null,[7,27],[7,31]]]],["get","imageField",["loc",[null,[7,32],[7,42]]]]],[],["loc",[null,[7,21],[7,44]]]]],
        ["inline","get",[["get","item",["loc",[null,[9,46],[9,50]]]],["get","nameField",["loc",[null,[9,51],[9,60]]]]],[],["loc",[null,[9,40],[9,62]]]],
        ["block","unless",[["get","readOnly",["loc",[null,[12,20],[12,28]]]]],[],0,null,["loc",[null,[12,10],[17,21]]]],
        ["block","unless",[["get","readOnly",["loc",[null,[19,18],[19,26]]]]],[],1,null,["loc",[null,[19,8],[21,19]]]]
      ],
      locals: ["item","index"],
      templates: [child0, child1]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 26,
              "column": 8
            },
            "end": {
              "line": 32,
              "column": 8
            }
          },
          "moduleName": "modules/ember-paper/templates/components/paper-contact-chips.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-contact-suggestion");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"class","md-contact-avatar");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","md-contact-name");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","md-contact-email");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element1, 'src');
          morphs[1] = dom.createAttrMorph(element1, 'alt');
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
          return morphs;
        },
        statements: [
          ["attribute","src",["subexpr","get",[["get","item",["loc",[null,[28,27],[28,31]]]],["get","imageField",["loc",[null,[28,32],[28,42]]]]],[],["loc",[null,[28,21],[28,44]]]]],
          ["attribute","alt",["subexpr","get",[["get","item",["loc",[null,[28,55],[28,59]]]],["get","nameField",["loc",[null,[28,60],[28,69]]]]],[],["loc",[null,[28,49],[28,71]]]]],
          ["inline","get",[["get","item",["loc",[null,[29,48],[29,52]]]],["get","nameField",["loc",[null,[29,53],[29,62]]]]],[],["loc",[null,[29,42],[29,64]]]],
          ["inline","get",[["get","item",["loc",[null,[30,49],[30,53]]]],["get","emailField",["loc",[null,[30,54],[30,64]]]]],[],["loc",[null,[30,43],[30,66]]]]
        ],
        locals: ["item","select"],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 24,
            "column": 4
          },
          "end": {
            "line": 34,
            "column": 4
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-contact-chips.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","md-chip-input-container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("      ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        return morphs;
      },
      statements: [
        ["block","paper-autocomplete",[],["closeOnSelect",true,"onBlur",["subexpr","action",["inputBlur"],[],["loc",[null,[26,56],[26,76]]]],"onSelectionChange",["subexpr","action",["autocompleteChange"],[],["loc",[null,[26,95],[26,124]]]],"onSearchTextChange",["subexpr","action",["searchTextChange"],[],["loc",[null,[26,144],[26,171]]]],"onFocus",["subexpr","action",["inputFocus"],[],["loc",[null,[26,180],[26,201]]]],"onOpen",["subexpr","action",["inputFocus"],[],["loc",[null,[26,209],[26,230]]]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[26,243],[26,254]]]]],[],[]],"options",["subexpr","@mut",[["get","options",["loc",[null,[26,263],[26,270]]]]],[],[]],"searchField",["subexpr","@mut",[["get","searchField",["loc",[null,[26,283],[26,294]]]]],[],[]]],0,null,["loc",[null,[26,8],[32,31]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
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
          "line": 37,
          "column": 0
        }
      },
      "moduleName": "modules/ember-paper/templates/components/paper-contact-chips.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("md-chips");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("md-chips-wrap");
      dom.setAttribute(el2,"tabindex","-1");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("  ");
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
      var element6 = dom.childAt(fragment, [0]);
      var element7 = dom.childAt(element6, [1]);
      var morphs = new Array(7);
      morphs[0] = dom.createAttrMorph(element6, 'class');
      morphs[1] = dom.createAttrMorph(element7, 'class');
      morphs[2] = dom.createAttrMorph(element7, 'onkeydown');
      morphs[3] = dom.createAttrMorph(element7, 'onfocus');
      morphs[4] = dom.createAttrMorph(element7, 'onblur');
      morphs[5] = dom.createMorphAt(element7,1,1);
      morphs[6] = dom.createMorphAt(element7,2,2);
      return morphs;
    },
    statements: [
      ["attribute","class",["concat",["md-chips md-contact-chips ",["subexpr","if",[["subexpr","and",[["subexpr","not",[["get","readOnly",["loc",[null,[1,58],[1,66]]]]],[],["loc",[null,[1,53],[1,67]]]],["get","isFocused",["loc",[null,[1,68],[1,77]]]]],[],["loc",[null,[1,48],[1,78]]]],"md-focused"],[],["loc",[null,[1,43],[1,93]]]]]]],
      ["attribute","class",["concat",["md-chips md-contact-chips ",["subexpr","if",[["subexpr","and",[["subexpr","not",[["get","readOnly",["loc",[null,[2,65],[2,73]]]]],[],["loc",[null,[2,60],[2,74]]]],["get","isFocused",["loc",[null,[2,75],[2,84]]]]],[],["loc",[null,[2,55],[2,85]]]],"md-focused"],[],["loc",[null,[2,50],[2,100]]]]]]],
      ["attribute","onkeydown",["subexpr","action",["keyDown"],[],["loc",[null,[2,126],[2,146]]]]],
      ["attribute","onfocus",["subexpr","action",["chipsFocus"],[],["loc",[null,[2,155],[2,178]]]]],
      ["attribute","onblur",["subexpr","action",["chipsBlur"],[],["loc",[null,[2,186],[2,208]]]]],
      ["block","each",[["get","content",["loc",[null,[3,12],[3,19]]]]],[],0,null,["loc",[null,[3,4],[23,13]]]],
      ["block","unless",[["get","readOnly",["loc",[null,[24,14],[24,22]]]]],[],1,null,["loc",[null,[24,4],[34,15]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));