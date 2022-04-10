(function($){
    //Owl-Carousel Start
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

}) (jQuery);