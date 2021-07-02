$(function () {

  $('.search-form__toggle').on('click', function () {
    $('.search-form').toggleClass('show');
  })

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
