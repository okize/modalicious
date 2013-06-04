/*!
Modalicious v1.0.1 (http://okize.github.com/)
Copyright (c) 2013 | Licensed under the MIT license:
http://www.opensource.org/licenses/MIT
*/


(function() {
  (function(factory) {
    if (typeof exports === 'object') {
      return factory(require('jquery'));
    } else if (typeof define === 'function' && define.amd) {
      return define(['jquery'], factory);
    } else {
      return factory(jQuery);
    }
  })(function($) {
    'use strict';
    var Modal, defaults, pluginName;

    pluginName = 'mdl';
    defaults = {
      animation: "fadeAndPop",
      animationSpeed: 300,
      closeOnBackgroundClick: true,
      dismissModalClass: "close-reveal-modal"
    };
    Modal = (function() {
      function Modal(element, options) {
        this.element = element;
        this.el = $(this.element);
        this.overlay = $('<div>', {
          "class": 'mdl-overlay',
          html: '&nbsp;',
          tabindex: '-1'
        });
        this.options = $.extend({}, defaults, options);
        this.init();
      }

      Modal.prototype.init = function() {
        $('body').append(this.overlay);
        return $('body').on('keyup', function(e) {
          return console.log(e.which);
        });
      };

      Modal.prototype.show = function() {
        return console.log('show modal');
      };

      Modal.prototype.hide = function() {
        return console.log('hide modal');
      };

      return Modal;

    })();
    $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, 'plugin_#{pluginName}')) {
          $.data(this, 'plugin_#{pluginName}', new Modal(this, options));
        }
      });
    };
  });

}).call(this);
