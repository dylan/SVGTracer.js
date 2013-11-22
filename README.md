SVGTracer.js
============

##Installation
Include script after the jQuery library:
```
<script src="path/to/SVGTracer.js"></script>
```

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
Sets the duration of the transition.

###easing
Sets the what sort of easing to use during the transition.
