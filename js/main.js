$(document).ready(function(){
  $('.text__visible').click(function () {
    $('.text__hidden').show('normal')
    $('.text__visible').hide('normal')
  })

  $("form").submit(function (e) { // Устанавливаем событие отправки для формы
             e.preventDefault();
              var form_data = $(this).serialize(); // Собираем все данные из формы
              $.ajax({
                  type: "POST", // Метод отправки
                  url: "mail.php", // Путь до php файла отправителя
                  data: form_data
              });
          });

  $('.footer__logo').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
        duration: 800,
        easing: "swing"

    });
  })

  $('.contact__btn, .footer__btn').click(function () {
    $('.modal__wrapper').show();
  })

  $('.form__btn').click(function () {
    $('.modal__wrapper').hide();
    $('.modal__end-wrapper').show('normal');
    setTimeout(close, 4000)
    function close () {
      $('.modal__end-wrapper').hide('normal');
    }
  })

  $('.md-modal__close').click(function () {
    $('.modal__wrapper').hide();
  })

  $('.mobile-menu__btn').click(function () {
    $('.mobile-menu__container').toggleClass('menu__open');
  })

  $('#eng').click(function () {
    $('.modal__title').html('Здравствуйте, меня интересует курс «Legal English»')
    $('.modal__wrapper').show();
  })

  $('#eng:last-child').click(function () {
    $('.modal__title').html('Здравствуйте, меня интересует курс «Legal English»')
    $('.modal__wrapper').show();
  })

  $('#wrt').click(function () {
    $('.modal__title').html('Здравствуйте, меня интересует курс «Legal Writing»')
    $('.modal__wrapper').show();
  })

  $('#wrt:last-child').click(function () {
    $('.modal__title').html('Здравствуйте, меня интересует курс «Legal Writing»')
    $('.modal__wrapper').show();
  })

  $('#new').click(function () {
    $('.modal__title').html('Здравствуйте, меня интересует курс «Подготовка к TOLES и ILEC»: ')
    $('.modal__wrapper').show();
  })

  $('#new:last-child').click(function () {
    $('.modal__title').html('Здравствуйте, меня интересует курс «Подготовка к TOLES и ILEC»: ')
    $('.modal__wrapper').show();
  })

  var margin = 50;
     $(".menu__list li a, .mobile-menu__link").click(function() {
       $('.mobile-menu__container').removeClass('menu__open');
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top+margin+ "px"
        }, {
           duration: 800,
           easing: "swing"
        });
        return false;
     });

})
