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

  // SMART LANDING SCROLL
  if ($(".smart-category").length) {
    $(".chose-mirror").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
    });
  }

  //SMART TXT ANIMATION
  if ($(".smart-category").length) {
    var target = $('.high-tech .reveal');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    $(window).scroll(function () {
      var winScrollTop = $(this).scrollTop();
      if (winScrollTop > scrollToElem + 300 && !$(".high-tech h2").hasClass("printed") && $(window).width() >= '768') {
        $(".high-tech h2").addClass("printing");
        setTimeout(function () {
          $(".high-tech h2").removeClass("printing");
          $(".high-tech h2").addClass("printed");

        }, 550);
        setTimeout(function () {
          $(".high-tech p").addClass("txtFadeIn");
        }, 550);
      }
    });
    $(document).ready(function () {
      var target = $('.combination .reveal');
      var targetPos = target.offset().top;
      var winHeight = $(window).height();
      var scrollToElem = targetPos - winHeight;
      $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem + 300 && !$(".combination h2").hasClass("printed") && $(window).width() >= '768') {
          $(".combination h2").addClass("printing");
          setTimeout(function () {
            $(".combination h2").removeClass("printing");
            $(".combination h2").addClass("printed");

          }, 550);
          setTimeout(function () {
            $(".combination p").addClass("txtFadeIn");
          }, 550);
        }
      });
    });
    $(document).ready(function () {
      var target = $('.health .reveal');
      var targetPos = target.offset().top;
      var winHeight = $(window).height();
      var scrollToElem = targetPos - winHeight;
      $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem + 300 && !$(".health h2").hasClass("printed") && $(window).width() >= '768') {
          $(".health h2").addClass("printing");
          setTimeout(function () {
            $(".health h2").removeClass("printing");
            $(".health h2").addClass("printed");
          }, 550);
          setTimeout(function () {
            $(".health p").addClass("txtFadeIn");
          }, 550);
        }
      });
    });
    $(document).ready(function () {
      var target = $('.resist .reveal');
      var targetPos = target.offset().top;
      var winHeight = $(window).height();
      var scrollToElem = targetPos - winHeight;
      $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem + 300 && !$(".resist h2").hasClass("printed") && $(window).width() >= '768') {
          $(".resist h2").addClass("printing");
          setTimeout(function () {
            $(".resist h2").removeClass("printing");
            $(".resist h2").addClass("printed");
          }, 550);
          setTimeout(function () {
            $(".resist p").addClass("txtFadeIn");
          }, 550);
        }
      });
    });
    $(document).ready(function () {
      var target = $('.media .reveal');
      var targetPos = target.offset().top;
      var winHeight = $(window).height();
      var scrollToElem = targetPos - winHeight;
      $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem + 300 && !$(".media h2").hasClass("printed") && $(window).width() >= '768') {
          $(".media h2").addClass("printing");
          setTimeout(function () {
            $(".media h2").removeClass("printing");
            $(".media h2").addClass("printed");
          }, 550);
          setTimeout(function () {
            $(".media p").addClass("txtFadeIn");
          }, 550);
        }
      });
    });
    $(document).ready(function () {
      var target = $('.google-play .reveal');
      var targetPos = target.offset().top;
      var winHeight = $(window).height();
      var scrollToElem = targetPos - winHeight;
      $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem + 300 && !$(".google-play h2").hasClass("printed") && $(window).width() >= '768') {
          $(".google-play h2").addClass("printing");
          setTimeout(function () {
            $(".google-play h2").removeClass("printing");
            $(".google-play h2").addClass("printed");
          }, 550);
          setTimeout(function () {
            $(".google-play p").addClass("txtFadeIn");
          }, 550);
        }
      });
    });

  }
  //SMART POPOVER
  $(function () {
    if ($(".smart-category").length) {
      $('[data-toggle="smart-popover"]').popover({
        trigger: 'click',
        container: ".smart-category",
        html: true
      });
    }
  });

  function getWindowWidth() {
    var windowWidth = $(window).width();
    return windowWidth;
  }

  // STICKY FILTER
  if ($(".filter").length) {
    $(window).scroll(function () {
      var filterTopOffsetDynamic = document.querySelector(".filter").getBoundingClientRect().top;
      if (filterTopOffsetDynamic <= 90 && getWindowWidth() >= 768) {
        $('.filter').addClass('filter--top');
      } else {
        $('.filter').removeClass('filter--top');
      }
    });
  }

  if ($(window).width() < 1200) {
    $(".filter__search-field").focus(function () {
      $(".filter__search").addClass("active-search")
      $(".filter__params").css("opacity", 0)
    });
    $(".filter__search-field").focusout(function () {
      $(".filter__search").removeClass("active-search")
      $(".filter__params").css("opacity", 1)
    });
  }

  var seoTxtH = $(".seo-txt").height();
  $(".seo-txt").height(235);
  if (seoTxtH > 235) {
    $(".seo-txt__expand").removeClass("d-none");
    $(".seo-txt__collapse").addClass("d-none");
  }
  $(".seo-txt__expand").on("click", function () {
    $(".seo-txt").animate({ height: seoTxtH }, 300);
    $(".seo-txt__expand").addClass("d-none");
    $(".seo-txt__collapse").removeClass("d-none");
    $(".seo-txt").removeClass("collapsed");
  });
  $(".seo-txt__collapse").on("click", function () {
    $(".seo-txt").animate({ height: 235 }, 300);
    $(".seo-txt__expand").removeClass("d-none");
    $(".seo-txt__collapse").addClass("d-none");
    $(".seo-txt").addClass("collapsed");
  });

});
