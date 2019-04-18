// JavaScript Document
$(document).on('ready',ejecutar_codigo)

var ubicacion;
var ancho;
var alto;

function ejecutar_codigo (){
//  'ui.strict';

  var object_positon = $("#objeto_1").position();

  $('#balloon').css('display','none');

  ancho = $("#objeto_1").width();
  alto = $("#objeto_1").height();

  $("#focus_to_heading_link").click(
    function(){
      $('#balloon').css({
        'display':'block',
        'background-color':'#FFF',
        'top':object_positon.top-alto,
        'left':object_positon.left+ancho
      }
    );
      $('#objeto_1').addClass('fat-focused-elm');
      $('#heading').addClass('fat-focused-elm');
      $('#campo_alumbra').addClass('fat-focused-elm');
      $('#fat-dim-overlay').css('display','block');
    }
  );

  $('#fat-dim-overlay').click(
    function(){
      $('#balloon').css('display','none');
      $(this).css('display','none');
    }
  );
};

$(document).on("ready",inicio);

function inicio(){	
 


/*var slider = {};
 
slider.initQuery = '#slider';
 
slider.slider = $( slider.initQuery + " ul,ul"+slider.initQuery);
slider.slides = slider.slider.find('li');
slider.number = slider.slides.length;
slider.actual = 0;
slider.height = 0;
slider.width = 0;
 
for(i=0;i<slider.number;i++)
{
  var w = $(slider.slides[i]).width();
  var h = $(slider.slides[i]).height();
  slider.height = ( h > slider.height  ) ?  h : slider.height;	
  slider.width = ( w > slider.width  ) ? w : slider.width;	
}

slider.slider.css({
  overflow: "hidden",
  width: slider.width,  
  height: slider.height,
  position: 'relative'
});
 
for (var i=0;i<slider.number;i++)
{
  var sl = $(slider.slides[i]);
  sl.attr('class',sl.attr('class') + " slider-slide-"+i);
  sl.css({
    position : 'absolute',
    left : slider.width * i	
  });
}
 
slider.go = function (where) {
  if (where == 'next')
  {
    slider.actual = ( slider.actual < slider.number-1) ? slider.actual*1 + 1 : 0;
  }
  else if (where == 'prev')
  {
    slider.actual = ( slider.actual > 0) ? slider.actual - 1 : slider.number-1;
  }
  else
  {
    slider.actual = where;
  }
 
  for (var i=0;i<slider.number;i++)
  {
    var sl = $(slider.slides[i]);
    sl.animate({
       left : slider.width * (i - slider.actual)
    },2000);
  }
};


$(slider.initQuery).append("<a href='#next' class='slider-prev'>Anterior</a><a href='#next' class='slider-next'>Siguiente</a>");
 

$(slider.initQuery + " .slider-next").click(function () {
  slider.go('next');
  return false;	
});
$(slider.initQuery + " .slider-prev").click(function () {
  slider.go('prev');
  return false;	
});
 
 
$('a.ir-al-elemento-6').click(function() { 
  slider.go( 6 );
});
 
 
var autoSlider = setInterval(function () {
	slider.go("next");
	$("a.slider-button-"+slider.actual).click();
},3000); */
 
};