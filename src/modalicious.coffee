###!
Modalicious v1.0.1 (http://okize.github.com/)
Copyright (c) 2013 | Licensed under the MIT license:
http://www.opensource.org/licenses/MIT
###

# universal module definition
((factory) ->

  if typeof exports is 'object'
    factory require('jquery')
  else if typeof define is 'function' and define.amd
    define ['jquery'], factory
  else
    factory jQuery

) ($) ->

  'use strict'

  pluginName = 'mdl'

  # default plugin options
  defaults =

    # fade, fadeAndPop, none
    animation: "fadeAndPop"

    # animtion speed
    animationSpeed: 300

    # if you click background will modal close?
    closeOnBackgroundClick: true

    # the class of a button or element that will close an open modal
    dismissModalClass: "close-reveal-modal"

  class Modal

    # manage default option extension
    constructor: (@element, options) ->
      @el = $(@element)
      @overlay = $('<div>',
        class: 'mdl-overlay'
        html: '&nbsp;'
        tabindex: '-1'
      )
      @options = $.extend({}, defaults, options)
      @init()

    # plugin initializer
    init: ->
      $('body').append @overlay
      console.log @overlay

  # wrapper around the constructor that prevents multiple instantiations
  $.fn[pluginName] = (options) ->
    @each ->
      if !$.data(@, 'plugin_#{pluginName}')
        $.data(@, 'plugin_#{pluginName}', new Modal(@, options))
      return
  return