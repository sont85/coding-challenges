$('.invert').on('click', function(){ 
var body = $('body');
var bgColor = body.css('background-color');
var color = body.css('color');
body.css('background-color', color);
body.css('color', bgColor);
});