define('ember-paper/components/paper-menu-item', ['exports', 'ember', 'ember-paper/templates/components/paper-menu-item', 'ember-paper/mixins/child-mixin'], function (exports, _ember, _emberPaperTemplatesComponentsPaperMenuItem, _emberPaperMixinsChildMixin) {
  /**
   * @module ember-paper
   */
  'use strict';

  var Component = _ember['default'].Component;

  /**
   * @class PaperMenuItem
   * @extends Ember.Component
   * @uses ChildMixin
   */
  exports['default'] = Component.extend(_emberPaperMixinsChildMixin['default'], {
    layout: _emberPaperTemplatesComponentsPaperMenuItem['default'],
    tagName: 'md-menu-item',
    disabled: false,

    actions: {
      handleClick: function handleClick(event) {
        this.get('dropdown.actions').close();
        this.sendAction('onClick', event);
      }
    },
    mouseEnter: function mouseEnter() {
      if (!this.get('disabled')) {
        this.$('button').focus();
      }
    }

  });
});