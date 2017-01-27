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
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-autocomplete-trigger.hbs"
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
        ["inline","paper-input",[],["label",["subexpr","@mut",[["get","extra.label",["loc",[null,[3,10],[3,21]]]]],[],[]],"value",["subexpr","@mut",[["get","text",["loc",[null,[4,10],[4,14]]]]],[],[]],"flex",true,"required",["subexpr","readonly",[["get","required",["loc",[null,[6,23],[6,31]]]]],[],["loc",[null,[6,13],[6,32]]]],"passThru",["subexpr","readonly",[["get","passThru",["loc",[null,[7,23],[7,31]]]]],[],["loc",[null,[7,13],[7,32]]]],"validationErrorMessages",["subexpr","readonly",[["get","validationErrorMessages",["loc",[null,[8,38],[8,61]]]]],[],["loc",[null,[8,28],[8,62]]]],"disabled",["subexpr","readonly",[["get","disabled",["loc",[null,[9,23],[9,31]]]]],[],["loc",[null,[9,13],[9,32]]]],"onChange",["subexpr","action",["handleInputLocal"],[],["loc",[null,[10,13],[10,40]]]],"onFocus",["subexpr","action",[["get","onFocus",["loc",[null,[11,20],[11,27]]]]],[],["loc",[null,[11,12],[11,28]]]],"onBlur",["subexpr","action",[["get","onBlur",["loc",[null,[12,19],[12,25]]]]],[],["loc",[null,[12,11],[12,26]]]],"onKeyDown",["subexpr","action",["handleKeydown"],[],["loc",[null,[13,14],[13,38]]]]],["loc",[null,[2,2],[13,40]]]]
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
            "line": 14,
            "column": 0
          },
          "end": {
            "line": 42,
            "column": 0
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-autocomplete-trigger.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("input");
        dom.setAttribute(el1,"type","search");
        dom.setAttribute(el1,"class","ember-paper-autocomplete-search-input flex");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(24);
        morphs[0] = dom.createAttrMorph(element0, 'value');
        morphs[1] = dom.createAttrMorph(element0, 'placeholder');
        morphs[2] = dom.createAttrMorph(element0, 'oninput');
        morphs[3] = dom.createAttrMorph(element0, 'onchange');
        morphs[4] = dom.createAttrMorph(element0, 'onfocus');
        morphs[5] = dom.createAttrMorph(element0, 'onblur');
        morphs[6] = dom.createAttrMorph(element0, 'onkeydown');
        morphs[7] = dom.createAttrMorph(element0, 'disabled');
        morphs[8] = dom.createAttrMorph(element0, 'onmousedown');
        morphs[9] = dom.createAttrMorph(element0, 'accept');
        morphs[10] = dom.createAttrMorph(element0, 'autocomplete');
        morphs[11] = dom.createAttrMorph(element0, 'autosave');
        morphs[12] = dom.createAttrMorph(element0, 'form');
        morphs[13] = dom.createAttrMorph(element0, 'formaction');
        morphs[14] = dom.createAttrMorph(element0, 'formenctype');
        morphs[15] = dom.createAttrMorph(element0, 'formmethod');
        morphs[16] = dom.createAttrMorph(element0, 'formnovalidate');
        morphs[17] = dom.createAttrMorph(element0, 'formtarget');
        morphs[18] = dom.createAttrMorph(element0, 'inputmode');
        morphs[19] = dom.createAttrMorph(element0, 'pattern');
        morphs[20] = dom.createAttrMorph(element0, 'readonly');
        morphs[21] = dom.createAttrMorph(element0, 'selectionDirection');
        morphs[22] = dom.createAttrMorph(element0, 'spellcheck');
        morphs[23] = dom.createAttrMorph(element0, 'step');
        return morphs;
      },
      statements: [
        ["attribute","value",["get","text",["loc",[null,[16,12],[16,16]]]]],
        ["attribute","placeholder",["subexpr","readonly",[["get","placeholder",["loc",[null,[18,27],[18,38]]]]],[],["loc",[null,[18,16],[18,40]]]]],
        ["attribute","oninput",["subexpr","action",["handleInputLocal"],[],["loc",[null,[19,12],[19,41]]]]],
        ["attribute","onchange",["subexpr","action",["handleInputLocal"],[],["loc",[null,[20,13],[20,42]]]]],
        ["attribute","onfocus",["subexpr","action",[["get","onFocus",["loc",[null,[21,21],[21,28]]]]],[],["loc",[null,[21,12],[21,30]]]]],
        ["attribute","onblur",["subexpr","action",[["get","onBlur",["loc",[null,[22,20],[22,26]]]]],[],["loc",[null,[22,11],[22,28]]]]],
        ["attribute","onkeydown",["subexpr","action",["handleKeydown"],[],["loc",[null,[23,14],[23,40]]]]],
        ["attribute","disabled",["subexpr","readonly",[["get","disabled",["loc",[null,[24,24],[24,32]]]]],[],["loc",[null,[24,13],[24,34]]]]],
        ["attribute","onmousedown",["subexpr","action",["stopPropagation"],[],["loc",[null,[25,16],[25,44]]]]],
        ["attribute","accept",["get","passThru.accept",["loc",[null,[27,13],[27,28]]]]],
        ["attribute","autocomplete",["get","passThru.autocomplete",["loc",[null,[28,19],[28,40]]]]],
        ["attribute","autosave",["get","passThru.autosave",["loc",[null,[29,15],[29,32]]]]],
        ["attribute","form",["get","passThru.form",["loc",[null,[30,11],[30,24]]]]],
        ["attribute","formaction",["get","passThru.formaction",["loc",[null,[31,17],[31,36]]]]],
        ["attribute","formenctype",["get","passThru.formenctype",["loc",[null,[32,18],[32,38]]]]],
        ["attribute","formmethod",["get","passThru.formmethod",["loc",[null,[33,17],[33,36]]]]],
        ["attribute","formnovalidate",["get","passThru.formnovalidate",["loc",[null,[34,21],[34,44]]]]],
        ["attribute","formtarget",["get","passThru.formtarget",["loc",[null,[35,17],[35,36]]]]],
        ["attribute","inputmode",["get","passThru.inputmode",["loc",[null,[36,16],[36,34]]]]],
        ["attribute","pattern",["get","passThru.pattern",["loc",[null,[37,14],[37,30]]]]],
        ["attribute","readonly",["get","passThru.readonly",["loc",[null,[38,15],[38,32]]]]],
        ["attribute","selectionDirection",["get","passThru.selectionDirection",["loc",[null,[39,25],[39,52]]]]],
        ["attribute","spellcheck",["get","passThru.spellcheck",["loc",[null,[40,17],[40,36]]]]],
        ["attribute","step",["get","passThru.step",["loc",[null,[41,11],[41,24]]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.6",
        "loc": {
          "source": null,
          "start": {
            "line": 43,
            "column": 0
          },
          "end": {
            "line": 45,
            "column": 0
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-autocomplete-trigger.hbs"
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
        ["inline","paper-progress-linear",[],["class",["subexpr","concat",[["subexpr","if",[["get","extra.label",[]],"md-inline"],[],[]]," "],[],[]]],["loc",[null,[44,2],[44,69]]]]
      ],
      locals: [],
      templates: []
    };
  }());
  var child3 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 47,
              "column": 2
            },
            "end": {
              "line": 49,
              "column": 2
            }
          },
          "moduleName": "modules/ember-paper/templates/components/paper-autocomplete-trigger.hbs"
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
          ["inline","paper-icon",["close"],[],["loc",[null,[48,4],[48,26]]]]
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
            "line": 46,
            "column": 0
          },
          "end": {
            "line": 50,
            "column": 0
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-autocomplete-trigger.hbs"
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
        ["block","paper-reset-button",[],["onReset",["subexpr","action",["clear"],[],["loc",[null,[47,32],[47,48]]]],"tabindex","-1"],0,null,["loc",[null,[47,2],[49,25]]]]
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
          "line": 51,
          "column": 0
        }
      },
      "moduleName": "modules/ember-paper/templates/components/paper-autocomplete-trigger.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
      morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","if",[["get","extra.label",["loc",[null,[1,6],[1,17]]]]],[],0,1,["loc",[null,[1,0],[42,7]]]],
      ["block","if",[["subexpr","and",[["get","select.loading",["loc",[null,[43,11],[43,25]]]],["get","select.isActive",["loc",[null,[43,26],[43,41]]]]],[],["loc",[null,[43,6],[43,42]]]]],[],2,null,["loc",[null,[43,0],[45,7]]]],
      ["block","if",[["subexpr","and",[["subexpr","or",[["get","selected",["loc",[null,[46,15],[46,23]]]],["get","text",["loc",[null,[46,24],[46,28]]]]],[],["loc",[null,[46,11],[46,29]]]],["get","allowClear",["loc",[null,[46,30],[46,40]]]],["subexpr","not",[["get","select.disabled",["loc",[null,[46,46],[46,61]]]]],[],["loc",[null,[46,41],[46,62]]]]],[],["loc",[null,[46,6],[46,63]]]]],[],3,null,["loc",[null,[46,0],[50,7]]]]
    ],
    locals: [],
    templates: [child0, child1, child2, child3]
  };
}()));