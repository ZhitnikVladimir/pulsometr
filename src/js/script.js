$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
        dotsClass: 'slick-dots',
                }
            },

        ]
              
        
});
  });