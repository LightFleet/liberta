$(function () {

  $('.search-form__toggle').on('click', function () {
    $('.search-form').toggleClass('show');
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

});
