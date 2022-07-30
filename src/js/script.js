//SLIDER
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
//Перемещение во вкладках(табах)
$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
//для изменения информации в карточках, было фото с товаром, нажали на кнопку подробнее и у нас открылось описание товара
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

//Проверка данных в формах
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
//для проверки номера
$('input[name=phone]').mask("+38 (099) 999-99-99")
//Для отправки писем
$('form').submit(function(e){
    e.preventDefault();
    if(!$(this).valid()) {
        return;
    }
    $.ajax({
        type: "POST",
        url:"mailer/smart.php",
        data: $(this).serialize()
    
    }).done(function(){
    $(this).find("input").val("");
    $('#consult, #order').fadeOut();
    $('.overlat, #thanks').fadeIn('slow');
    $('form').trigger('reset');
    });
        return false;
    });
     //анимация поднятия вверх по странице
     $(window).scroll(function(){
        if($(this).scrollTop()>1600) {
            $('.pageup').fadeIn();
        }
        else{
            $('.pageup').fadeOut();
        }
     });
     $(".pageup").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
  });
 
