(function ($) {
  "use strict";

  // =======maeanmenu============
  jQuery('#mean-menu').meanmenu({
    meanMenuContainer: '.mean-menu',
    meanScreenWidth: "991"
  });

    //========  TOP Menu Sticky=============

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 1) {
          $('#sticky-header').addClass("sticky");
      } else {
          $('#sticky-header').removeClass("sticky");
      }
  });


// ====== scrollIt===========

  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0           // offste (in px) for fixed top navigation
  });

  // team-active==============
  $('.team-active').owlCarousel({
    loop:true,
    margin:20,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:false,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:4
        }
    }
});

$('.testmonial-active').owlCarousel({
  loop:true,
  margin:0,
items:1,
navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  nav:false,
dots:false,
  responsive:{
      0:{
          items:1
      },
      767:{
          items:1
      },
      992:{
          items:1
      }
  }
});

  // image
  $('.view').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true

    },
    // other options
  });


  /* video*/
  $('.video').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

      patterns: {
        youtube: {
          index: 'youtube.com/',

          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },

      },

      srcAction: 'iframe_src',
    }
  });

  // skillbar
  $('.skillbar').skillBars({
    // options here
  });

  // counter
  $('.counter').counterUp({
    delay: 10,
    time: 10000
});
    
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
})
// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

	//for menu active class
	$('.portfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

})(jQuery);	