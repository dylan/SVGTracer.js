do ($=jQuery) ->
  class SVGTracer

    defaults:
      duration: '1.3333s'
      easing:   'ease-in-out'

    constructor: (element, options) ->
      @options = $.extend({}, @defaults, options)

      @isVisible = false

      @$element = $(element)
      @paths = @$element.find('path, polygon')
      @paths
        .each (i,path)=>
          length = @_getLength(path);
          $(path)
            .css('stroke-dashoffset', length)
            .css('stroke-dasharray',"#{length} #{length}")
          path.getBoundingClientRect()

    play: (instant)->
      cssOpts = {}
      cssOpts['transition'] = "stroke-dashoffset #{@options.duration} #{@options.easing}"
      cssOpts['stroke-dashoffset'] = '0'

      if instant
        cssOpts['transition']= 'none'

      @paths.each (i,path)=>
        $(path).css(cssOpts)

      @isVisible = true

    reverse: (instant)->
      cssOpts = {}
      cssOpts['transition'] = "stroke-dashoffset #{@options.duration} #{@options.easing}"
      if instant
        cssOpts['transition']= 'none'

      @paths.each (i,path)=>
        $(path).css(cssOpts)
        @_setOffsetToLength(path)

      @isVisible = false

    setDuration: (time)->
      if time? and typeof time is 'string'
        @options.duration = time
      else
        $.error("setDuration only accepts Strings, example: 2s");

    setEasing: (easing)->
      if easing? and typeof easing is 'string'
        @options.easing = easing
      else
        $.error("setEasing only accepts Strings, example: ease-in-out");

    _setOffsetToLength:(path)->
      $(path).css('stroke-dashoffset',@_getLength(path))

    _getLength: (path)->
      length = path.getTotalLength()


  # Define the plugin
  $.fn.extend svgTracer: (option, args...) ->
    @each ->
      $this = $(this)
      data = $this.data('svgTracer')

      if !data
        $this.data 'svgTracer', (data = new SVGTracer(this, option))
      else if typeof option is 'string'
        data[option].apply(data, args)
