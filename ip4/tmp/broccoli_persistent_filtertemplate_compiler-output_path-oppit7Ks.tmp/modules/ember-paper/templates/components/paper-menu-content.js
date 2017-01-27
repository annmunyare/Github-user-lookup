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
                "line": 15,
                "column": 6
              },
              "end": {
                "line": 17,
                "column": 6
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-menu-content.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
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
            ["inline","yield",[["get","innerContentHash",["loc",[null,[16,16],[16,32]]]]],[],["loc",[null,[16,8],[16,34]]]]
          ],
          locals: ["innerContentHash"],
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
              "line": 19,
              "column": 2
            }
          },
          "moduleName": "modules/ember-paper/templates/components/paper-menu-content.hbs"
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
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[1] = dom.createAttrMorph(element0, 'id');
          morphs[2] = dom.createAttrMorph(element0, 'class');
          morphs[3] = dom.createAttrMorph(element0, 'style');
          morphs[4] = dom.createAttrMorph(element0, 'dir');
          morphs[5] = dom.createMorphAt(element0,1,1);
          return morphs;
        },
        statements: [
          ["inline","paper-backdrop",[],["class","md-menu-backdrop md-click-catcher"],["loc",[null,[8,4],[8,64]]]],
          ["attribute","id",["get","dropdownId",["loc",[null,[10,11],[10,21]]]]],
          ["attribute","class",["concat",["ember-basic-dropdown-content ",["get","class",["loc",[null,[11,44],[11,49]]]]," ",["subexpr","if",[["get","renderInPlace",["loc",[null,[11,57],[11,70]]]],"ember-basic-dropdown-content--in-place"],[],["loc",[null,[11,52],[11,113]]]]," ",["subexpr","if",[["get","hPosition",["loc",[null,[11,119],[11,128]]]],["subexpr","concat",["ember-basic-dropdown-content--",["get","hPosition",["loc",[null,[11,170],[11,179]]]]],[],["loc",[null,[11,129],[11,180]]]]],[],["loc",[null,[11,114],[11,182]]]]," ",["subexpr","if",[["get","vPosition",["loc",[null,[11,188],[11,197]]]],["subexpr","concat",["ember-basic-dropdown-content--",["get","vPosition",["loc",[null,[11,239],[11,248]]]]],[],["loc",[null,[11,198],[11,249]]]]],[],["loc",[null,[11,183],[11,251]]]],"\n      md-open-menu-container md-whiteframe-z2 md-clickable ",["subexpr","if",[["get","isActive",["loc",[null,[12,64],[12,72]]]],"md-active"],[],["loc",[null,[12,59],[12,86]]]]]]],
          ["attribute","style",["get","style",["loc",[null,[13,14],[13,19]]]]],
          ["attribute","dir",["get","dir",["loc",[null,[14,12],[14,15]]]]],
          ["block","paper-menu-content-inner",[],["width",["subexpr","@mut",[["get","width",["loc",[null,[15,40],[15,45]]]]],[],[]],"dense",["subexpr","@mut",[["get","dense",["loc",[null,[15,52],[15,57]]]]],[],[]],"dropdown",["subexpr","@mut",[["get","dropdown",["loc",[null,[15,67],[15,75]]]]],[],[]]],0,null,["loc",[null,[15,6],[17,35]]]]
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
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-menu-content.hbs"
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
        ["block","ember-wormhole",[],["to",["subexpr","@mut",[["get","to",["loc",[null,[2,23],[2,25]]]]],[],[]],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[2,40],[2,53]]]]],[],[]]],0,null,["loc",[null,[2,2],[19,21]]]]
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
          "line": 21,
          "column": 0
        }
      },
      "moduleName": "modules/ember-paper/templates/components/paper-menu-content.hbs"
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
      ["block","if",[["get","dropdown.isOpen",["loc",[null,[1,6],[1,21]]]]],[],0,null,["loc",[null,[1,0],[20,7]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));