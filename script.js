var par = $(".x");
// par.slideUp();

$("button").click(function(){
  par.text("Is it cool?");
  par.slideUp().slideDown();
})
