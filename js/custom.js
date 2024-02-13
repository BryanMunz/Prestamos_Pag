(function ($) {

  "use strict";

    // Pre Loader
    $(window).load(function(){
      $('.preloader').fadeOut(2000); // set duration in brackets    
    });


    // Menu
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // Home Slider
    $('.home-slider').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      dots:false,
      autoplayHoverPause: false,
      autoplayTimeout: 28000,    
      autoplay: true,
      smartSpeed: 1000,
    })


    // Smoothscroll
    $(function() {
      $('.custom-navbar a,#home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

})(jQuery);
