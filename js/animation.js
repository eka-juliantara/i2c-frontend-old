$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
  $(window).scroll(function(){
    var shrinkOn=$("#header").height(),paddingAdd=$("#menu").height();
    if($(window).scrollTop()>shrinkOn)
    {
      $("#menu").css({'position':'fixed'});
      $("#theme").css({'padding-top':paddingAdd+150+'px'});
    }
    else
    {
      $("#menu").css({'position':'static'});
      $("#theme").css({'padding-top':'150px'});
    }
  });
  $("#film-pendek").click(function(){
    $("div#film-pendek").css({'display':'block'});
  });
  $("#atma-trailer").click(function(){
    $("div#atma-trailer").css({'display':'block'});
  });
  $(".pop-up").click(function(){
    $(".pop-up").css({'display':'none'});
  });
});
