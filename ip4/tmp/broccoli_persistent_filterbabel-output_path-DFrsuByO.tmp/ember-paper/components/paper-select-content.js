define('ember-paper/components/paper-select-content', ['exports', 'ember', 'ember-paper/components/paper-menu-content', 'ember-paper/templates/components/paper-select-content'], function (exports, _ember, _emberPaperComponentsPaperMenuContent, _emberPaperTemplatesComponentsPaperSelectContent) {
  /**
   * @module ember-paper
   */
  'use strict';

  var run = _ember['default'].run;
  var $ = _ember['default'].$;

  function waitForAnimations(element, callback) {
    var computedStyle = window.getComputedStyle(element);
    if (computedStyle.transitionDuration && computedStyle.transitionDuration !== '0s') {
      (function () {
        var eventCallback = function eventCallback() {
          element.removeEventListener('transitionend', eventCallback);
          callback();
        };
        element.addEventListener('transitionend', eventCallback);
      })();
    } else if (computedStyle.animationName !== 'none' && computedStyle.animationPlayState === 'running') {
      (function () {
        var eventCallback = function eventCallback() {
          element.removeEventListener('animationend', eventCallback);
          callback();
        };
        element.addEventListener('animationend', eventCallback);
      })();
    } else {
      callback();
    }
  }

  /**
   * @class PaperSelectContent
   * @extends PaperMenuContent
   */
  exports['default'] = _emberPaperComponentsPaperMenuContent['default'].extend({
    layout: _emberPaperTemplatesComponentsPaperSelectContent['default'],

    animateIn: function animateIn() {
      var _this = this;

      run.next(function () {
        run.scheduleOnce('afterRender', _this, function () {
          var dropdown = _this.get('dropdown');
          dropdown.actions.reposition();
          _this.set('isActive', true);
          _this.dropdownElement.style.transform = '';
        });
      });
    },
    animateOut: function animateOut(dropdownElement) {
      var _this2 = this;

      var parentElement = this.get('renderInPlace') ? dropdownElement.parentElement.parentElement : dropdownElement.parentElement;
      var clone = dropdownElement.cloneNode(true);
      clone.id = clone.id + '--clone';
      var $clone = $(clone);
      parentElement.appendChild(clone);
      $(clone.children[0].children[0]).scrollTop($(dropdownElement.children[0].children[0]).scrollTop());
      window.requestAnimationFrame(function () {
        if (!_this2.get('isDestroyed')) {
          _this2.set('isActive', false);
          $clone.addClass('md-leave');
          waitForAnimations(clone, function () {
            $clone.removeClass('md-active');
            parentElement.removeChild(clone);
          });
        }
      });
    }
  });
});