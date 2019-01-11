$(document).ready(function(){


//menmenu activation
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "767"
});



$('.slider-active').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    smartSpeed: 1500,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1200:{
            items:1
        }
    }
})


//testimonial-active
$('.testimonial-active').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    smartSpeed: 1500,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1200:{
            items:1
        }
    }
})


//testimonial-active
$('.brand-active').owlCarousel({
	autoPlay:true,
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        767:{
            items:4
        },
        1200:{
            items:5
        }
    }
})



//wow js
new WOW().init();


//counter up
$('.counter').counterUp({
    delay: 10,
    time: 1000
});



//magnificPopup active img
$('.img-popup').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }

});

//magnificPopup active video
$('.video-popup').magnificPopup({
  type: 'iframe'
  // other options
});




})