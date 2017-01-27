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
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "modules/ember-basic-dropdown/templates/components/basic-dropdown/content.hbs"
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
            dom.setAttribute(el1,"class","ember-basic-dropdown-overlay");
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
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 13,
              "column": 2
            }
          },
          "moduleName": "modules/ember-basic-dropdown/templates/components/basic-dropdown/content.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [2]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createAttrMorph(element0, 'id');
          morphs[2] = dom.createAttrMorph(element0, 'class');
          morphs[3] = dom.createAttrMorph(element0, 'style');
          morphs[4] = dom.createAttrMorph(element0, 'dir');
          morphs[5] = dom.createMorphAt(element0,1,1);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","if",[["get","overlay",["loc",[null,[3,10],[3,17]]]]],[],0,null,["loc",[null,[3,4],[5,11]]]],
          ["attribute","id",["get","dropdownId",["loc",[null,[7,11],[7,21]]]]],
          ["attribute","class",["concat",["ember-basic-dropdown-content ",["get","class",["loc",[null,[8,44],[8,49]]]]," ",["subexpr","if",[["get","renderInPlace",["loc",[null,[8,57],[8,70]]]],"ember-basic-dropdown-content--in-place"],[],["loc",[null,[8,52],[8,113]]]]," ",["subexpr","if",[["get","hPosition",["loc",[null,[8,119],[8,128]]]],["subexpr","concat",["ember-basic-dropdown-content--",["get","hPosition",["loc",[null,[8,170],[8,179]]]]],[],["loc",[null,[8,129],[8,180]]]]],[],["loc",[null,[8,114],[8,182]]]]," ",["subexpr","if",[["get","vPosition",["loc",[null,[8,188],[8,197]]]],["subexpr","concat",["ember-basic-dropdown-content--",["get","vPosition",["loc",[null,[8,239],[8,248]]]]],[],["loc",[null,[8,198],[8,249]]]]],[],["loc",[null,[8,183],[8,251]]]]," ",["get","animationClass",["loc",[null,[8,254],[8,268]]]]]]],
          ["attribute","style",["get","style",["loc",[null,[9,14],[9,19]]]]],
          ["attribute","dir",["get","dir",["loc",[null,[10,12],[10,15]]]]],
          ["content","yield",["loc",[null,[11,6],[11,15]]]]
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
        "moduleName": "modules/ember-basic-dropdown/templates/components/basic-dropdown/content.hbs"
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
        ["block","ember-wormhole",[],["to",["subexpr","@mut",[["get","to",["loc",[null,[2,23],[2,25]]]]],[],[]],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[2,40],[2,53]]]]],[],[]]],0,null,["loc",[null,[2,2],[13,21]]]]
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
          "column": 7
        }
      },
      "moduleName": "modules/ember-basic-dropdown/templates/components/basic-dropdown/content.hbs"
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
      ["block","if",[["get","dropdown.isOpen",["loc",[null,[1,6],[1,21]]]]],[],0,null,["loc",[null,[1,0],[14,7]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));