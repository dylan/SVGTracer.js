SVGTracer.js
============

##Installation
Include script after the jQuery library:
```
<script src="path/to/SVGTracer.js"></script>
```

##Prep
Make sure that you create your SVGs using paths with normal(center-aligned) strokes.

##Usage
Include this in your page, and set it up on an(some) element(s).
```
<script src="path/to/SVGTracer.js"></script>
<script>
  $(document).ready(function(){
    $('#mySVG')
      .svgTracer({duration:'2s'})       //Set it up
      .svgTracer('play')                //Play it
      .svgTracert('reverse);            //Reverse it
      .svgTracert('setDuration','3s')   //Change how long it takes
      .svgTracert('setEasing','linear') //Change how it eases
      .data('svgTracer').isVisible      //Can be we seen?
  });
</script>
```

##Options

###duration
Sets the duration of the transition. [See here.](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)

###easing
Sets the what sort of easing to use during the transition. [See here.](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
