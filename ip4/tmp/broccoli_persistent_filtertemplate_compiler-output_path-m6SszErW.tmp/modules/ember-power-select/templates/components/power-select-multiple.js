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
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 51,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
        },
        isEmpty: false,
        arity: 2,
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
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","option",["loc",[null,[50,12],[50,18]]]],["get","select",["loc",[null,[50,19],[50,25]]]]],[],["loc",[null,[50,4],[50,27]]]]
        ],
        locals: ["option","select"],
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
              "line": 51,
              "column": 2
            },
            "end": {
              "line": 53,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[],["to","inverse"],["loc",[null,[52,4],[52,26]]]]
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
            "line": 54,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
        ["block","power-select",[],["afterOptionsComponent",["subexpr","@mut",[["get","afterOptionsComponent",["loc",[null,[3,26],[3,47]]]]],[],[]],"allowClear",["subexpr","@mut",[["get","allowClear",["loc",[null,[4,15],[4,25]]]]],[],[]],"ariaDescribedBy",["subexpr","@mut",[["get","ariaDescribedBy",["loc",[null,[5,20],[5,35]]]]],[],[]],"ariaInvalid",["subexpr","@mut",[["get","ariaInvalid",["loc",[null,[6,16],[6,27]]]]],[],[]],"ariaLabel",["subexpr","@mut",[["get","ariaLabel",["loc",[null,[7,14],[7,23]]]]],[],[]],"ariaLabelledBy",["subexpr","@mut",[["get","ariaLabelledBy",["loc",[null,[8,19],[8,33]]]]],[],[]],"beforeOptionsComponent",["subexpr","@mut",[["get","beforeOptionsComponent",["loc",[null,[9,27],[9,49]]]]],[],[]],"buildSelection",["subexpr","action",["buildSelection"],[],["loc",[null,[10,19],[10,44]]]],"class",["subexpr","@mut",[["get","class",["loc",[null,[11,10],[11,15]]]]],[],[]],"closeOnSelect",["subexpr","@mut",[["get","closeOnSelect",["loc",[null,[12,18],[12,31]]]]],[],[]],"defaultHighlighted",["subexpr","@mut",[["get","defaultHighlighted",["loc",[null,[13,23],[13,41]]]]],[],[]],"destination",["subexpr","@mut",[["get","destination",["loc",[null,[14,16],[14,27]]]]],[],[]],"dir",["subexpr","@mut",[["get","dir",["loc",[null,[15,8],[15,11]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[16,13],[16,21]]]]],[],[]],"dropdownClass",["subexpr","@mut",[["get","dropdownClass",["loc",[null,[17,18],[17,31]]]]],[],[]],"extra",["subexpr","@mut",[["get","extra",["loc",[null,[18,10],[18,15]]]]],[],[]],"horizontalPosition",["subexpr","@mut",[["get","horizontalPosition",["loc",[null,[19,23],[19,41]]]]],[],[]],"initiallyOpened",["subexpr","@mut",[["get","initiallyOpened",["loc",[null,[20,20],[20,35]]]]],[],[]],"loadingMessage",["subexpr","@mut",[["get","loadingMessage",["loc",[null,[21,19],[21,33]]]]],[],[]],"matcher",["subexpr","@mut",[["get","matcher",["loc",[null,[22,12],[22,19]]]]],[],[]],"matchTriggerWidth",["subexpr","@mut",[["get","matchTriggerWidth",["loc",[null,[23,22],[23,39]]]]],[],[]],"noMatchesMessage",["subexpr","@mut",[["get","noMatchesMessage",["loc",[null,[24,21],[24,37]]]]],[],[]],"onblur",["subexpr","@mut",[["get","onblur",["loc",[null,[25,11],[25,17]]]]],[],[]],"onchange",["subexpr","@mut",[["get","onchange",["loc",[null,[26,13],[26,21]]]]],[],[]],"onclose",["subexpr","@mut",[["get","onclose",["loc",[null,[27,12],[27,19]]]]],[],[]],"onfocus",["subexpr","action",["handleFocus"],[],["loc",[null,[28,12],[28,34]]]],"oninput",["subexpr","@mut",[["get","oninput",["loc",[null,[29,12],[29,19]]]]],[],[]],"onkeydown",["subexpr","action",["handleKeydown"],[],["loc",[null,[30,14],[30,38]]]],"onopen",["subexpr","action",["handleOpen"],[],["loc",[null,[31,11],[31,32]]]],"options",["subexpr","@mut",[["get","options",["loc",[null,[32,12],[32,19]]]]],[],[]],"optionsComponent",["subexpr","@mut",[["get","optionsComponent",["loc",[null,[33,21],[33,37]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[34,16],[34,27]]]]],[],[]],"registerAPI",["subexpr","readonly",[["get","registerAPI",["loc",[null,[35,26],[35,37]]]]],[],["loc",[null,[35,16],[35,38]]]],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[36,18],[36,31]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[37,13],[37,21]]]]],[],[]],"search",["subexpr","@mut",[["get","search",["loc",[null,[38,11],[38,17]]]]],[],[]],"searchEnabled",["subexpr","@mut",[["get","searchEnabled",["loc",[null,[39,18],[39,31]]]]],[],[]],"searchField",["subexpr","@mut",[["get","searchField",["loc",[null,[40,16],[40,27]]]]],[],[]],"searchMessage",["subexpr","@mut",[["get","searchMessage",["loc",[null,[41,18],[41,31]]]]],[],[]],"searchPlaceholder",["subexpr","@mut",[["get","searchPlaceholder",["loc",[null,[42,22],[42,39]]]]],[],[]],"selected",["subexpr","@mut",[["get","selected",["loc",[null,[43,13],[43,21]]]]],[],[]],"selectedItemComponent",["subexpr","@mut",[["get","selectedItemComponent",["loc",[null,[44,26],[44,47]]]]],[],[]],"tabindex",["subexpr","@mut",[["get","computedTabIndex",["loc",[null,[45,13],[45,29]]]]],[],[]],"triggerClass",["subexpr","@mut",[["get","concatenatedTriggerClass",["loc",[null,[46,17],[46,41]]]]],[],[]],"triggerComponent",["subexpr","component",[["get","triggerComponent",["loc",[null,[47,32],[47,48]]]]],["tabindex",["subexpr","@mut",[["get","tabindex",["loc",[null,[47,58],[47,66]]]]],[],[]]],["loc",[null,[47,21],[47,67]]]],"verticalPosition",["subexpr","@mut",[["get","verticalPosition",["loc",[null,[48,21],[48,37]]]]],[],[]]],0,1,["loc",[null,[2,2],[53,19]]]]
      ],
      locals: [],
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
              "line": 55,
              "column": 2
            },
            "end": {
              "line": 104,
              "column": 2
            }
          },
          "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
        },
        isEmpty: false,
        arity: 2,
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
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","option",["loc",[null,[103,12],[103,18]]]],["get","select",["loc",[null,[103,19],[103,25]]]]],[],["loc",[null,[103,4],[103,27]]]]
        ],
        locals: ["option","select"],
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
            "line": 54,
            "column": 0
          },
          "end": {
            "line": 105,
            "column": 0
          }
        },
        "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
        ["block","power-select",[],["afterOptionsComponent",["subexpr","@mut",[["get","afterOptionsComponent",["loc",[null,[56,26],[56,47]]]]],[],[]],"allowClear",["subexpr","@mut",[["get","allowClear",["loc",[null,[57,15],[57,25]]]]],[],[]],"ariaDescribedBy",["subexpr","@mut",[["get","ariaDescribedBy",["loc",[null,[58,20],[58,35]]]]],[],[]],"ariaInvalid",["subexpr","@mut",[["get","ariaInvalid",["loc",[null,[59,16],[59,27]]]]],[],[]],"ariaLabel",["subexpr","@mut",[["get","ariaLabel",["loc",[null,[60,14],[60,23]]]]],[],[]],"ariaLabelledBy",["subexpr","@mut",[["get","ariaLabelledBy",["loc",[null,[61,19],[61,33]]]]],[],[]],"beforeOptionsComponent",["subexpr","@mut",[["get","beforeOptionsComponent",["loc",[null,[62,27],[62,49]]]]],[],[]],"buildSelection",["subexpr","action",["buildSelection"],[],["loc",[null,[63,19],[63,44]]]],"class",["subexpr","@mut",[["get","class",["loc",[null,[64,10],[64,15]]]]],[],[]],"closeOnSelect",["subexpr","@mut",[["get","closeOnSelect",["loc",[null,[65,18],[65,31]]]]],[],[]],"defaultHighlighted",["subexpr","@mut",[["get","defaultHighlighted",["loc",[null,[66,23],[66,41]]]]],[],[]],"destination",["subexpr","@mut",[["get","destination",["loc",[null,[67,16],[67,27]]]]],[],[]],"dir",["subexpr","@mut",[["get","dir",["loc",[null,[68,8],[68,11]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[69,13],[69,21]]]]],[],[]],"dropdownClass",["subexpr","@mut",[["get","dropdownClass",["loc",[null,[70,18],[70,31]]]]],[],[]],"extra",["subexpr","@mut",[["get","extra",["loc",[null,[71,10],[71,15]]]]],[],[]],"horizontalPosition",["subexpr","@mut",[["get","horizontalPosition",["loc",[null,[72,23],[72,41]]]]],[],[]],"initiallyOpened",["subexpr","@mut",[["get","initiallyOpened",["loc",[null,[73,20],[73,35]]]]],[],[]],"loadingMessage",["subexpr","@mut",[["get","loadingMessage",["loc",[null,[74,19],[74,33]]]]],[],[]],"matcher",["subexpr","@mut",[["get","matcher",["loc",[null,[75,12],[75,19]]]]],[],[]],"matchTriggerWidth",["subexpr","@mut",[["get","matchTriggerWidth",["loc",[null,[76,22],[76,39]]]]],[],[]],"noMatchesMessage",["subexpr","@mut",[["get","noMatchesMessage",["loc",[null,[77,21],[77,37]]]]],[],[]],"onblur",["subexpr","@mut",[["get","onblur",["loc",[null,[78,11],[78,17]]]]],[],[]],"onchange",["subexpr","@mut",[["get","onchange",["loc",[null,[79,13],[79,21]]]]],[],[]],"onclose",["subexpr","@mut",[["get","onclose",["loc",[null,[80,12],[80,19]]]]],[],[]],"onfocus",["subexpr","action",["handleFocus"],[],["loc",[null,[81,12],[81,34]]]],"oninput",["subexpr","@mut",[["get","oninput",["loc",[null,[82,12],[82,19]]]]],[],[]],"onkeydown",["subexpr","action",["handleKeydown"],[],["loc",[null,[83,14],[83,38]]]],"onopen",["subexpr","action",["handleOpen"],[],["loc",[null,[84,11],[84,32]]]],"options",["subexpr","@mut",[["get","options",["loc",[null,[85,12],[85,19]]]]],[],[]],"optionsComponent",["subexpr","@mut",[["get","optionsComponent",["loc",[null,[86,21],[86,37]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[87,16],[87,27]]]]],[],[]],"registerAPI",["subexpr","readonly",[["get","registerAPI",["loc",[null,[88,26],[88,37]]]]],[],["loc",[null,[88,16],[88,38]]]],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[89,18],[89,31]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[90,13],[90,21]]]]],[],[]],"search",["subexpr","@mut",[["get","search",["loc",[null,[91,11],[91,17]]]]],[],[]],"searchEnabled",["subexpr","@mut",[["get","searchEnabled",["loc",[null,[92,18],[92,31]]]]],[],[]],"searchField",["subexpr","@mut",[["get","searchField",["loc",[null,[93,16],[93,27]]]]],[],[]],"searchMessage",["subexpr","@mut",[["get","searchMessage",["loc",[null,[94,18],[94,31]]]]],[],[]],"searchPlaceholder",["subexpr","@mut",[["get","searchPlaceholder",["loc",[null,[95,22],[95,39]]]]],[],[]],"selected",["subexpr","@mut",[["get","selected",["loc",[null,[96,13],[96,21]]]]],[],[]],"selectedItemComponent",["subexpr","@mut",[["get","selectedItemComponent",["loc",[null,[97,26],[97,47]]]]],[],[]],"tabindex",["subexpr","@mut",[["get","computedTabIndex",["loc",[null,[98,13],[98,29]]]]],[],[]],"triggerClass",["subexpr","@mut",[["get","concatenatedTriggerClass",["loc",[null,[99,17],[99,41]]]]],[],[]],"triggerComponent",["subexpr","component",[["get","triggerComponent",["loc",[null,[100,32],[100,48]]]]],["tabindex",["subexpr","@mut",[["get","tabindex",["loc",[null,[100,58],[100,66]]]]],[],[]]],["loc",[null,[100,21],[100,67]]]],"verticalPosition",["subexpr","@mut",[["get","verticalPosition",["loc",[null,[101,21],[101,37]]]]],[],[]]],0,null,["loc",[null,[55,2],[104,19]]]]
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
          "line": 106,
          "column": 0
        }
      },
      "moduleName": "modules/ember-power-select/templates/components/power-select-multiple.hbs"
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
      ["block","if",[["subexpr","hasBlock",["inverse"],[],["loc",[null,[1,6],[1,26]]]]],[],0,1,["loc",[null,[1,0],[105,7]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));