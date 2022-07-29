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
$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

$('.catalog-item__link').each(function(i){
    $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__info').eq(i).toggleClass('catalog-item__info_active');
    })
  });
  $('.catalog-item__back').each(function(i){
    $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__info').eq(i).toggleClass('catalog-item__info_active');
    })
  });
//modal
$('[data-modal=consult]').on('click', function(){
    $('.overlay, #consult').fadeIn();
});

$('.modal__close').on('click', function(){
    $('.overlay, #consult, #thanks, #order').fadeOut();
});
$('.button_mini').each(function(i){
$(this).on('click', function()  {
    $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
    $('.overlay, #order').fadeIn();
})
});


function validateForms(form) {
    $(form).validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста, введите своё имя",
            phone: "Пожалуйста, введите свой номер",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Ваша почта должна содержать name@domain.com"
            }
          }
    });
}
validateForms('#consult-form')
validateForms('#consult form')
validateForms('#order form')

$('input[name=phone]').mask("+38 (099) 999-99-99")
  });