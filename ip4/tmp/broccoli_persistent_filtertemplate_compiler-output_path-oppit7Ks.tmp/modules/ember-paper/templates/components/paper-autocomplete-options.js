export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-autocomplete-options.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        dom.setAttribute(el1,"role","option");
        dom.setAttribute(el1,"tabindex","0");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createAttrMorph(element0, 'aria-selected');
        morphs[2] = dom.createAttrMorph(element0, 'aria-disabled');
        morphs[3] = dom.createAttrMorph(element0, 'aria-current');
        morphs[4] = dom.createAttrMorph(element0, 'data-option-index');
        morphs[5] = dom.createAttrMorph(element0, 'data-option-actual-index');
        morphs[6] = dom.createMorphAt(element0,1,1);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",["ember-power-select-option ",["subexpr","if",[["subexpr","eq",[["get","opt.raw",["loc",[null,[2,48],[2,55]]]],["get","select.highlighted",["loc",[null,[2,56],[2,74]]]]],[],["loc",[null,[2,44],[2,75]]]],"selected"],[],["loc",[null,[2,39],[2,88]]]]]]],
        ["attribute","aria-selected",["concat",[["subexpr","ember-power-select-is-selected",[["get","opt.raw",["loc",[null,[3,52],[3,59]]]],["get","select.selected",["loc",[null,[3,60],[3,75]]]]],[],["loc",[null,[3,19],[3,77]]]]]]],
        ["attribute","aria-disabled",["subexpr","ember-power-select-true-string-if-present",[["get","opt.disabled",["loc",[null,[4,62],[4,74]]]]],[],["loc",[null,[4,18],[4,76]]]]],
        ["attribute","aria-current",["concat",[["subexpr","eq",[["get","opt.raw",["loc",[null,[5,23],[5,30]]]],["get","select.highlighted",["loc",[null,[5,31],[5,49]]]]],[],["loc",[null,[5,18],[5,51]]]]]]],
        ["attribute","data-option-index",["concat",[["get","groupIndex",["loc",[null,[6,25],[6,35]]]],["get","opt.virtualIndex",["loc",[null,[6,39],[6,55]]]]]]],
        ["attribute","data-option-actual-index",["concat",[["get","groupIndex",["loc",[null,[7,32],[7,42]]]],["get","opt.actualIndex",["loc",[null,[7,46],[7,61]]]]]]],
        ["inline","yield",[["get","opt.raw",["loc",[null,[10,12],[10,19]]]],["get","select",["loc",[null,[10,20],[10,26]]]]],[],["loc",[null,[10,4],[10,28]]]]
      ],
      locals: ["opt"],
      templates: []
    };
  }());
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
          "line": 13,
          "column": 0
        }
      },
      "moduleName": "modules/ember-paper/templates/components/paper-autocomplete-options.hbs"
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
      ["block","each",[["get","options",["loc",[null,[1,8],[1,15]]]]],[],0,null,["loc",[null,[1,0],[12,9]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));