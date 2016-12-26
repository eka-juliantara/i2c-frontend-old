$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });

  $(".flexslider").hover(function(){
    $(".flexslider").flexslider("pause");
  },function(){
    $(".flexslider").flexslider("play");
  });

  $(window).scroll(function(){
    var shrinkOn=$("#header").height(),paddingAdd=$("#header").height();
    if($(window).scrollTop()>shrinkOn+12)
    {
      $("#menu").css({'position':'fixed'});
      $("#theme").css({'margin-top':paddingAdd+'px'});
    }
    else
    {
      $("#menu").css({'position':'static'});
      $("#theme").css({'margin-top':'0px'});
    }
  });
  $("#film-pendek").click(function(){
    $("div#film-pendek").css({'display':'block'});
  });
  $("#atma-trailer").click(function(){
    $("div#atma-trailer").css({'display':'block'});
  });

  $( "body" ).keydown(function(e) {
      if(e.which == 27)
      {
        $(".pop-up").css({'display':'none'});
      }
  });

  $(".fancy-img").fancybox({
    'transitionIn' : 'elastic',
    'transitionOut' : 'elastic',
    'speedIn' : 600,
    'speedOut' : 200,
    'overlayShow' : false
  });

  window.sr = ScrollReveal().reveal('#theme .container,#about .container,#category .container,#rule .container,#winner .container,#timeline,#registration .container,#footer .container,.section-title,.content-title,#form,#form-header',{ reset: true });
});
