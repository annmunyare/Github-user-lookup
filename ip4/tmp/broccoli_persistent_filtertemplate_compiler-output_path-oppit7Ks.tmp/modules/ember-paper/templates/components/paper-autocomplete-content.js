export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 4
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-autocomplete-content.hbs"
          },
          isEmpty: false,
          arity: 2,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","yield",[["get","virtualItems",["loc",[null,[10,14],[10,26]]]]],[],["loc",[null,[10,6],[10,28]]]]
          ],
          locals: ["rawItems","virtualItems"],
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
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 12,
              "column": 2
            }
          },
          "moduleName": "modules/ember-paper/templates/components/paper-autocomplete-content.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["inline","paper-backdrop",[],["class","md-click-catcher"],["loc",[null,[3,4],[3,47]]]],
          ["block","paper-virtual-repeat",[["subexpr","readonly",[["get","select.results",["loc",[null,[4,38],[4,52]]]]],[],["loc",[null,[4,28],[4,53]]]]],["id",["subexpr","readonly",[["get","dropdownId",["loc",[null,[5,19],[5,29]]]]],[],["loc",[null,[5,9],[5,30]]]],"class",["subexpr","concat",[["get","dropdownId",["loc",[null,[6,20],[6,30]]]]," md-autocomplete-suggestions-container"," ember-basic-dropdown-content ",["subexpr","if",[["get","renderInPlace",["loc",[null,[6,109],[6,122]]]],"ember-basic-dropdown-content--in-place "],[],["loc",[null,[6,105],[6,165]]]],["subexpr","if",[["get","hPosition",["loc",[null,[6,170],[6,179]]]],["subexpr","concat",["ember-basic-dropdown-content--",["get","hPosition",["loc",[null,[6,221],[6,230]]]]," "],[],["loc",[null,[6,180],[6,235]]]]],[],["loc",[null,[6,166],[6,236]]]],["subexpr","if",[["get","vPosition",["loc",[null,[6,241],[6,250]]]],["subexpr","concat",["ember-basic-dropdown-content--",["get","vPosition",["loc",[null,[6,292],[6,301]]]]," "],[],["loc",[null,[6,251],[6,306]]]],"md-whiteframe-z1 "],[],["loc",[null,[6,237],[6,327]]]],["get","animationClass",["loc",[null,[6,328],[6,342]]]]],[],["loc",[null,[6,12],[6,343]]]],"containerSelector",".md-autocomplete-suggestions","scrollIndex",["subexpr","readonly",[["get","select.scrollIndex",["loc",[null,[8,28],[8,46]]]]],[],["loc",[null,[8,18],[8,47]]]],"positionCoordinates",["subexpr","readonly",[["get","positionCoordinates",["loc",[null,[9,36],[9,55]]]]],[],["loc",[null,[9,26],[9,56]]]]],0,null,["loc",[null,[4,4],[11,29]]]]
        ],
        locals: [],
        templates: [child0]
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
        "moduleName": "modules/ember-paper/templates/components/paper-autocomplete-content.hbs"
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
        ["block","ember-wormhole",[],["to",["subexpr","@mut",[["get","to",["loc",[null,[2,23],[2,25]]]]],[],[]],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[2,40],[2,53]]]]],[],[]]],0,null,["loc",[null,[2,2],[12,21]]]]
      ],
      locals: [],
      templates: [child0]
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
          "line": 14,
          "column": 0
        }
      },
      "moduleName": "modules/ember-paper/templates/components/paper-autocomplete-content.hbs"
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
      ["block","if",[["get","dropdown.isOpen",["loc",[null,[1,6],[1,21]]]]],[],0,null,["loc",[null,[1,0],[13,7]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));