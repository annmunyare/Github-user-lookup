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
              "line": 14,
              "column": 2
            },
            "end": {
              "line": 16,
              "column": 2
            }
          },
          "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element1, 'for');
          morphs[1] = dom.createAttrMorph(element1, 'class');
          morphs[2] = dom.createMorphAt(element1,0,0);
          return morphs;
        },
        statements: [
          ["attribute","for",["subexpr","concat",["ember-basic-dropdown-trigger-",["get","publicAPI.uniqueId",["loc",[null,[15,56],[15,74]]]]],[],["loc",[null,[15,15],[15,76]]]]],
          ["attribute","class",["concat",[["subexpr","if",[["get","required",["loc",[null,[15,89],[15,97]]]],"md-required"],[],["loc",[null,[15,84],[15,113]]]]]]],
          ["content","label",["loc",[null,[15,115],[15,124]]]]
        ],
        locals: [],
        templates: []
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
                "line": 30,
                "column": 4
              },
              "end": {
                "line": 48,
                "column": 4
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
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
            ["inline","yield",[["get","opt",["loc",[null,[47,14],[47,17]]]],["get","term",["loc",[null,[47,18],[47,22]]]]],[],["loc",[null,[47,6],[47,24]]]]
          ],
          locals: ["opt","term"],
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
              "line": 18,
              "column": 2
            },
            "end": {
              "line": 49,
              "column": 2
            }
          },
          "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
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
          ["block","component",[["get","triggerComponent",["loc",[null,[30,17],[30,33]]]]],["allowClear",["subexpr","readonly",[["get","allowClear",["loc",[null,[31,27],[31,37]]]]],[],["loc",[null,[31,17],[31,38]]]],"buildSelection",["subexpr","readonly",[["get","buildSelection",["loc",[null,[32,31],[32,45]]]]],[],["loc",[null,[32,21],[32,46]]]],"extra",["subexpr","readonly",[["get","extra",["loc",[null,[33,22],[33,27]]]]],[],["loc",[null,[33,12],[33,28]]]],"listboxId",["subexpr","readonly",[["get","optionsId",["loc",[null,[34,26],[34,35]]]]],[],["loc",[null,[34,16],[34,36]]]],"onFocus",["subexpr","action",["onFocus"],[],["loc",[null,[35,14],[35,32]]]],"activate",["subexpr","action",["activate"],[],["loc",[null,[36,15],[36,34]]]],"onBlur",["subexpr","action",["deactivate"],[],["loc",[null,[37,13],[37,34]]]],"onInput",["subexpr","action",["onInput"],[],["loc",[null,[38,14],[38,32]]]],"placeholder",["subexpr","readonly",[["get","placeholder",["loc",[null,[39,28],[39,39]]]]],[],["loc",[null,[39,18],[39,40]]]],"label",["subexpr","readonly",[["get","label",["loc",[null,[40,22],[40,27]]]]],[],["loc",[null,[40,12],[40,28]]]],"onKeydown",["subexpr","action",["onKeydown"],[],["loc",[null,[41,16],[41,36]]]],"searchEnabled",["subexpr","readonly",[["get","searchEnabled",["loc",[null,[42,30],[42,43]]]]],[],["loc",[null,[42,20],[42,44]]]],"searchField",["subexpr","readonly",[["get","searchField",["loc",[null,[43,28],[43,39]]]]],[],["loc",[null,[43,18],[43,40]]]],"select",["subexpr","readonly",[["get","publicAPI",["loc",[null,[44,23],[44,32]]]]],[],["loc",[null,[44,13],[44,33]]]],"selectedItemComponent",["subexpr","readonly",[["get","selectedItemComponent",["loc",[null,[45,38],[45,59]]]]],[],["loc",[null,[45,28],[45,60]]]]],0,null,["loc",[null,[30,4],[48,18]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 53,
                "column": 6
              },
              "end": {
                "line": 55,
                "column": 6
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","md-char-counter");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
            return morphs;
          },
          statements: [
            ["content","renderCharCount",["loc",[null,[54,37],[54,56]]]]
          ],
          locals: [],
          templates: []
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
                  "line": 59,
                  "column": 8
                },
                "end": {
                  "line": 64,
                  "column": 8
                }
              },
              "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
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
              dom.setAttribute(el1,"class","paper-input-error ng-enter ng-enter-active");
              dom.setAttribute(el1,"ng-message","");
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
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
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element0, 'id');
              morphs[1] = dom.createMorphAt(element0,1,1);
              return morphs;
            },
            statements: [
              ["attribute","id",["concat",["error-",["get","inputElementId",["loc",[null,[60,27],[60,41]]]],"-",["get","index",["loc",[null,[60,46],[60,51]]]]]]],
              ["content","error.message",["loc",[null,[62,12],[62,29]]]]
            ],
            locals: ["error","index"],
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
                "line": 57,
                "column": 4
              },
              "end": {
                "line": 66,
                "column": 4
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
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
            dom.setAttribute(el1,"class","md-input-messages-animation md-auto-hide");
            dom.setAttribute(el1,"ng-messages","");
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
            ["block","each",[["get","validationErrorMessages",["loc",[null,[59,16],[59,39]]]]],[],0,null,["loc",[null,[59,8],[64,17]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
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
              "line": 67,
              "column": 2
            }
          },
          "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-errors-spacer");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","maxlength",["loc",[null,[53,12],[53,21]]]]],[],0,null,["loc",[null,[53,6],[55,13]]]],
          ["block","if",[["get","isInvalidAndTouched",["loc",[null,[57,10],[57,29]]]]],[],1,null,["loc",[null,[57,4],[66,11]]]]
        ],
        locals: [],
        templates: [child0, child1]
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
                "line": 74,
                "column": 4
              },
              "end": {
                "line": 86,
                "column": 4
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
          },
          isEmpty: false,
          arity: 0,
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
            ["inline","component",[["get","beforeOptionsComponent",["loc",[null,[75,18],[75,40]]]]],["extra",["subexpr","readonly",[["get","extra",["loc",[null,[76,24],[76,29]]]]],[],["loc",[null,[76,14],[76,30]]]],"listboxId",["subexpr","readonly",[["get","optionsId",["loc",[null,[77,28],[77,37]]]]],[],["loc",[null,[77,18],[77,38]]]],"onInput",["subexpr","action",["onInput"],[],["loc",[null,[78,16],[78,34]]]],"onKeydown",["subexpr","action",["onKeydown"],[],["loc",[null,[79,18],[79,38]]]],"searchEnabled",["subexpr","readonly",[["get","searchEnabled",["loc",[null,[80,32],[80,45]]]]],[],["loc",[null,[80,22],[80,46]]]],"onFocus",["subexpr","action",["onFocus"],[],["loc",[null,[81,16],[81,34]]]],"onBlur",["subexpr","action",["deactivate"],[],["loc",[null,[82,15],[82,36]]]],"searchPlaceholder",["subexpr","readonly",[["get","searchPlaceholder",["loc",[null,[83,36],[83,53]]]]],[],["loc",[null,[83,26],[83,54]]]],"select",["subexpr","readonly",[["get","publicAPI",["loc",[null,[84,25],[84,34]]]]],[],["loc",[null,[84,15],[84,35]]]]],["loc",[null,[75,6],[85,8]]]]
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
                "line": 88,
                "column": 4
              },
              "end": {
                "line": 93,
                "column": 4
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
          },
          isEmpty: false,
          arity: 0,
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
            ["inline","component",[["get","searchMessageComponent",["loc",[null,[89,18],[89,40]]]]],["searchMessage",["subexpr","readonly",[["get","searchMessage",["loc",[null,[90,32],[90,45]]]]],[],["loc",[null,[90,22],[90,46]]]],"select",["subexpr","readonly",[["get","publicAPI",["loc",[null,[91,25],[91,34]]]]],[],["loc",[null,[91,15],[91,35]]]]],["loc",[null,[89,6],[92,8]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child2 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.6",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 94,
                    "column": 6
                  },
                  "end": {
                    "line": 96,
                    "column": 6
                  }
                },
                "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
              },
              isEmpty: false,
              arity: 0,
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
                ["inline","yield",[],["to","inverse"],["loc",[null,[95,8],[95,30]]]]
              ],
              locals: [],
              templates: []
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
                      "line": 96,
                      "column": 6
                    },
                    "end": {
                      "line": 102,
                      "column": 6
                    }
                  },
                  "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("        ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("md-content");
                  dom.setAttribute(el1,"class","ember-power-select-options");
                  dom.setAttribute(el1,"role","listbox");
                  var el2 = dom.createTextNode("\n          ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("md-option");
                  dom.setAttribute(el2,"class","ember-power-select-option ember-power-select-option--no-matches-message");
                  dom.setAttribute(el2,"role","option");
                  var el3 = dom.createTextNode("\n            ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode("\n          ");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n        ");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n      ");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]),1,1);
                  return morphs;
                },
                statements: [
                  ["content","noMatchesMessage",["loc",[null,[99,12],[99,32]]]]
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
                    "line": 96,
                    "column": 6
                  },
                  "end": {
                    "line": 102,
                    "column": 6
                  }
                },
                "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
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
                ["block","if",[["get","noMatchesMessage",["loc",[null,[96,16],[96,32]]]]],[],0,null,["loc",[null,[96,6],[102,6]]]]
              ],
              locals: [],
              templates: [child0]
            };
          }());
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.6",
              "loc": {
                "source": null,
                "start": {
                  "line": 93,
                  "column": 4
                },
                "end": {
                  "line": 103,
                  "column": 4
                }
              },
              "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
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
              ["block","if",[["subexpr","hasBlock",["inverse"],[],["loc",[null,[94,12],[94,32]]]]],[],0,1,["loc",[null,[94,6],[102,13]]]]
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
                    "line": 104,
                    "column": 6
                  },
                  "end": {
                    "line": 116,
                    "column": 6
                  }
                },
                "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
              },
              isEmpty: false,
              arity: 2,
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
                ["inline","yield",[["get","option",["loc",[null,[115,16],[115,22]]]],["get","term",["loc",[null,[115,23],[115,27]]]]],[],["loc",[null,[115,8],[115,29]]]]
              ],
              locals: ["option","term"],
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
                  "line": 103,
                  "column": 4
                },
                "end": {
                  "line": 117,
                  "column": 4
                }
              },
              "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
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
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              return morphs;
            },
            statements: [
              ["block","component",[["get","optionsComponent",["loc",[null,[104,19],[104,35]]]]],["class","ember-power-select-options","groupIndex","","loadingMessage",["subexpr","readonly",[["get","loadingMessage",["loc",[null,[107,33],[107,47]]]]],[],["loc",[null,[107,23],[107,48]]]],"id",["subexpr","readonly",[["get","optionsId",["loc",[null,[108,21],[108,30]]]]],[],["loc",[null,[108,11],[108,31]]]],"options",["subexpr","readonly",[["get","publicAPI.results",["loc",[null,[109,26],[109,43]]]]],[],["loc",[null,[109,16],[109,44]]]],"searchEnabled",["subexpr","readonly",[["get","searchEnabled",["loc",[null,[110,32],[110,45]]]]],[],["loc",[null,[110,22],[110,46]]]],"optionsComponent",["subexpr","readonly",[["get","optionsComponent",["loc",[null,[111,35],[111,51]]]]],[],["loc",[null,[111,25],[111,52]]]],"select",["subexpr","readonly",[["get","publicAPI",["loc",[null,[112,25],[112,34]]]]],[],["loc",[null,[112,15],[112,35]]]],"menuParent",["subexpr","@mut",[["get","content.menu",["loc",[null,[113,19],[113,31]]]]],[],[]]],0,null,["loc",[null,[104,6],[116,20]]]]
            ],
            locals: [],
            templates: [child0]
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.6",
            "loc": {
              "source": null,
              "start": {
                "line": 93,
                "column": 4
              },
              "end": {
                "line": 117,
                "column": 4
              }
            },
            "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
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
            ["block","if",[["get","mustShowNoMessages",["loc",[null,[93,14],[93,32]]]]],[],0,1,["loc",[null,[93,4],[117,4]]]]
          ],
          locals: [],
          templates: [child0, child1]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.6",
          "loc": {
            "source": null,
            "start": {
              "line": 69,
              "column": 2
            },
            "end": {
              "line": 119,
              "column": 2
            }
          },
          "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
        },
        isEmpty: false,
        arity: 1,
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
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
          morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","if",[["get","searchEnabled",["loc",[null,[74,10],[74,23]]]]],[],0,null,["loc",[null,[74,4],[86,11]]]],
          ["block","if",[["get","mustShowSearchMessage",["loc",[null,[88,10],[88,31]]]]],[],1,2,["loc",[null,[88,4],[117,11]]]],
          ["inline","component",[["get","afterOptionsComponent",["loc",[null,[118,16],[118,37]]]]],["select",["subexpr","readonly",[["get","publicAPI",["loc",[null,[118,55],[118,64]]]]],[],["loc",[null,[118,45],[118,65]]]],"extra",["subexpr","readonly",[["get","extra",["loc",[null,[118,82],[118,87]]]]],[],["loc",[null,[118,72],[118,88]]]]],["loc",[null,[118,4],[118,90]]]]
        ],
        locals: ["content"],
        templates: [child0, child1, child2]
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
            "line": 120,
            "column": 0
          }
        },
        "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
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
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,5,5,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,7,7,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","shouldShowLabel",["loc",[null,[14,8],[14,23]]]]],[],0,null,["loc",[null,[14,2],[16,9]]]],
        ["block","menu.trigger",[],["ariaDescribedBy",["subexpr","readonly",[["get","ariaDescribedBy",["loc",[null,[19,30],[19,45]]]]],[],["loc",[null,[19,20],[19,46]]]],"ariaInvalid",["subexpr","readonly",[["get","ariaInvalid",["loc",[null,[20,26],[20,37]]]]],[],["loc",[null,[20,16],[20,38]]]],"ariaLabel",["subexpr","readonly",[["get","ariaLabel",["loc",[null,[21,24],[21,33]]]]],[],["loc",[null,[21,14],[21,34]]]],"ariaLabelledBy",["subexpr","readonly",[["get","ariaLabelledBy",["loc",[null,[22,29],[22,43]]]]],[],["loc",[null,[22,19],[22,44]]]],"ariaRequired",["subexpr","readonly",[["get","required",["loc",[null,[23,27],[23,35]]]]],[],["loc",[null,[23,17],[23,36]]]],"class",["subexpr","readonly",[["get","concatenatedTriggerClasses",["loc",[null,[24,20],[24,46]]]]],[],["loc",[null,[24,10],[24,47]]]],"onKeyDown",["subexpr","action",["onTriggerKeydown"],[],["loc",[null,[25,14],[25,41]]]],"onFocus",["subexpr","action",["onTriggerFocus"],[],["loc",[null,[26,12],[26,37]]]],"onBlur",["subexpr","action",["deactivate"],[],["loc",[null,[27,11],[27,32]]]],"tabindex",["subexpr","readonly",[["get","tabindex",["loc",[null,[28,23],[28,31]]]]],[],["loc",[null,[28,13],[28,32]]]],"required",["subexpr","readonly",[["get","required",["loc",[null,[29,23],[29,31]]]]],[],["loc",[null,[29,13],[29,32]]]]],1,null,["loc",[null,[18,2],[49,19]]]],
        ["block","unless",[["get","hideAllMessages",["loc",[null,[51,12],[51,27]]]]],[],2,null,["loc",[null,[51,2],[67,13]]]],
        ["block","menu.content",[],["class",["subexpr","readonly",[["get","concatenatedDropdownClasses",["loc",[null,[70,20],[70,47]]]]],[],["loc",[null,[70,10],[70,48]]]],"to",["subexpr","readonly",[["get","destination",["loc",[null,[71,17],[71,28]]]]],[],["loc",[null,[71,7],[71,29]]]],"searchEnabled",["subexpr","@mut",[["get","searchEnabled",["loc",[null,[72,18],[72,31]]]]],[],[]],"dropdown",["subexpr","@mut",[["get","publicAPI",["loc",[null,[73,13],[73,22]]]]],[],[]]],3,null,["loc",[null,[69,2],[119,19]]]]
      ],
      locals: ["menu"],
      templates: [child0, child1, child2, child3]
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
          "line": 121,
          "column": 0
        }
      },
      "moduleName": "modules/ember-paper/templates/components/paper-select.hbs"
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
      ["block","paper-select-menu",[],["horizontalPosition",["subexpr","readonly",[["get","horizontalPosition",["loc",[null,[2,31],[2,49]]]]],[],["loc",[null,[2,21],[2,50]]]],"initiallyOpened",["subexpr","readonly",[["get","initiallyOpened",["loc",[null,[3,28],[3,43]]]]],[],["loc",[null,[3,18],[3,44]]]],"matchTriggerWidth",["subexpr","readonly",[["get","matchTriggerWidth",["loc",[null,[4,30],[4,47]]]]],[],["loc",[null,[4,20],[4,48]]]],"onClose",["subexpr","action",["onClose"],[],["loc",[null,[5,10],[5,28]]]],"onOpen",["subexpr","action",["onOpen"],[],["loc",[null,[6,9],[6,26]]]],"registerAPI",["subexpr","action",["registerAPI"],[],["loc",[null,[7,14],[7,36]]]],"renderInPlace",["subexpr","readonly",[["get","renderInPlace",["loc",[null,[8,26],[8,39]]]]],[],["loc",[null,[8,16],[8,40]]]],"verticalPosition",["subexpr","readonly",[["get","verticalPosition",["loc",[null,[9,29],[9,45]]]]],[],["loc",[null,[9,19],[9,46]]]],"disabled",["subexpr","readonly",[["get","disabled",["loc",[null,[10,21],[10,29]]]]],[],["loc",[null,[10,11],[10,30]]]],"searchEnabled",["subexpr","@mut",[["get","searchEnabled",["loc",[null,[11,16],[11,29]]]]],[],[]]],0,null,["loc",[null,[1,0],[120,22]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));