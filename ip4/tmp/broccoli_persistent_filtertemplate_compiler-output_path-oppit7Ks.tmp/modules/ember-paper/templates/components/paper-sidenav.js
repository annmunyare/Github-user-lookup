export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-sidenav.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
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
        ["inline","paper-backdrop",[],["isLockedOpen",["subexpr","@mut",[["get","isLockedOpen",["loc",[null,[3,17],[3,29]]]]],[],[]],"opaque",true,"class","md-sidenav-backdrop","onClick",["subexpr","action",["onBackdropTap"],[],["loc",[null,[6,12],[6,36]]]]],["loc",[null,[2,2],[6,38]]]]
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
            "line": 9,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-sidenav.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
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
        ["content","yield",["loc",[null,[18,2],[18,11]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type",
          "multiple-nodes"
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
      "moduleName": "modules/ember-paper/templates/components/paper-sidenav.hbs"
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
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","unless",[["get","closed",["loc",[null,[1,10],[1,16]]]]],[],0,null,["loc",[null,[1,0],[7,11]]]],
      ["block","paper-sidenav-inner",[],["class",["subexpr","@mut",[["get","class",["loc",[null,[10,8],[10,13]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[11,7],[11,11]]]]],[],[]],"position",["subexpr","@mut",[["get","position",["loc",[null,[12,11],[12,19]]]]],[],[]],"lockedOpen",["subexpr","@mut",[["get","lockedOpen",["loc",[null,[13,13],[13,23]]]]],[],[]],"isLockedOpen",["subexpr","@mut",[["get","isLockedOpen",["loc",[null,[14,15],[14,27]]]]],[],[]],"closed",["subexpr","@mut",[["get","closed",["loc",[null,[15,9],[15,15]]]]],[],[]],"closeOnClick",["subexpr","@mut",[["get","closeOnClick",["loc",[null,[16,15],[16,27]]]]],[],[]],"onToggle",["subexpr","action",["onToggle"],[],["loc",[null,[17,11],[17,30]]]]],1,null,["loc",[null,[9,0],[19,24]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));