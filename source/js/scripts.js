$(function () {

  $('.search-form__toggle').on('click', function () {

    $('.header__phone').toggleClass('d-xl-block');
    $('.search-form__field').toggleClass('show');
    $('.search-form__field.show').focus();

    $('.search-form__field').on('focusout', function () {
      $('.search-form__field').removeClass('show');
      setTimeout(function () {
        $('.header__phone').addClass('d-xl-block');
      }, 400);
      if ($(window).width() < 576) {
        setTimeout(function () {
          $('.header__logo--m').removeClass('d-none');
        }, 400);
      }
    });

    if ($(window).width() < 576) {
      $('.header__logo--m').toggleClass('d-none');
    }

  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= 150) {
      $('.header').addClass('in-top');
    } else {
      $('.header').removeClass('in-top');
    }
  });

  $('.main-carousel__video-close, .main-carousel__video-cancel').on('click', function (e) {
    e.preventDefault();
    $('.main-carousel__video-wrap').attr('style', 'display: none !important');
  });

  if ($(window).width() >= 1280) {
    var $paraElm = $('.section-parallax');
    parallaxThis($paraElm);

    $(window).on('scroll', function () {
      parallaxThis($paraElm);
    });

    function parallaxThis($elm) {
      $elm.each(function () {
        var $p = $(this), $pos = $p.offset().top,
          $bg = $('.section-parallax__bg', $p),
          $pr = ($pos - $(window).scrollTop()) / ($(window).height() + $p.height()) * 100,
          $shift = Math.round($bg.height() / 130 * $pr);
        $bg.css({ marginTop: -$shift });
      });
    }
  }

  $('.posts-slider').slick({
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });

  $('.contacts__form .btn-toggle').on('click', function () {
    $('.contacts__form').toggleClass('expanded');
    $(this).toggleClass('active');
  });

  $('.shops .btn-toggle').on('click', function () {
    $('.shops__list').toggleClass('expanded');
    $(this).toggleClass('active');
  });

  if ($(".shops-slider").length) {
    $('.shops-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    });
  }

});
