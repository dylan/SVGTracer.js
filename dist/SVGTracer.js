var __slice = [].slice;

(function($) {
  var SVGTracer;
  SVGTracer = (function() {
    SVGTracer.prototype.defaults = {
      duration: '1.3333s',
      easing: 'ease-in-out'
    };

    function SVGTracer(element, options) {
      var _this = this;
      this.options = $.extend({}, this.defaults, options);
      this.isVisible = false;
      this.$element = $(element);
      this.paths = this.$element.find('path, polygon');
      this.paths.each(function(i, path) {
        var length;
        length = _this._getLength(path);
        $(path).css('stroke-dashoffset', length).css('stroke-dasharray', "" + length + " " + length);
        return path.getBoundingClientRect();
      });
    }

    SVGTracer.prototype.play = function(instant) {
      var cssOpts,
        _this = this;
      cssOpts = {};
      cssOpts['transition'] = "stroke-dashoffset " + this.options.duration + " " + this.options.easing;
      cssOpts['stroke-dashoffset'] = '0';
      if (instant) {
        cssOpts['transition'] = 'none';
      }
      this.paths.each(function(i, path) {
        return $(path).css(cssOpts);
      });
      return this.isVisible = true;
    };

    SVGTracer.prototype.reverse = function(instant) {
      var cssOpts,
        _this = this;
      cssOpts = {};
      cssOpts['transition'] = "stroke-dashoffset " + this.options.duration + " " + this.options.easing;
      if (instant) {
        cssOpts['transition'] = 'none';
      }
      this.paths.each(function(i, path) {
        $(path).css(cssOpts);
        return _this._setOffsetToLength(path);
      });
      return this.isVisible = false;
    };

    SVGTracer.prototype.setDuration = function(time) {
      if ((time != null) && typeof time === 'string') {
        return this.options.duration = time;
      } else {
        return $.error("setDuration only accepts Strings, example: 2s");
      }
    };

    SVGTracer.prototype.setEasing = function(easing) {
      if ((easing != null) && typeof easing === 'string') {
        return this.options.easing = easing;
      } else {
        return $.error("setEasing only accepts Strings, example: ease-in-out");
      }
    };

    SVGTracer.prototype._setOffsetToLength = function(path) {
      return $(path).css('stroke-dashoffset', this._getLength(path));
    };

    SVGTracer.prototype._getLength = function(path) {
      var length;
      return length = path.getTotalLength();
    };

    return SVGTracer;

  })();
  return $.fn.extend({
    svgTracer: function() {
      var args, option;
      option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return this.each(function() {
        var $this, data;
        $this = $(this);
        data = $this.data('svgTracer');
        if (!data) {
          return $this.data('svgTracer', (data = new SVGTracer(this, option)));
        } else if (typeof option === 'string') {
          return data[option].apply(data, args);
        }
      });
    }
  });
})(jQuery);

/*
//@ sourceMappingURL=SVGTracer.js.map
*/