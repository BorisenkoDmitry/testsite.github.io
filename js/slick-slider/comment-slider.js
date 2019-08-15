$(function() {
      $('.slider-test').slick({
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-images',
      adaptiveHeight: true,
      responsive: [
       {
         breakpoint: 500,
         settings: {
           dots: false
         }
       }]
      });

      $('.slider-images').slick({
      dots: false,
      arrows: true,
      speed: 500,
      centerMode: true,
      prevArrow: $('.preview-click'),
      nextArrow: $('.next-click'),
      slidesToScroll: 1,
      focusOnSelect: true,
      slidesToShow: 3,
      asNavFor: '.slider-test',
      adaptiveHeight: true,
      responsive: [
       {
         breakpoint: 1025,
         settings: {
           slidesToShow: 3,
           centerPadding: '-100px',
           slidesToScroll: 1,
           infinite: true
         }
       },
       {
         breakpoint: 500,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           centerPadding: '0px',
           arrows: false
         }
       }]
      });
      $( ".slider-picture" ).click(function() {
          $(this).addClass("focus-image");
           $('.slider-picture').not(this).removeClass('focus-image');
});

  $('.slick-dots').addClass('clearfix').addClass('margin-center');
  if ($('.slick-dots > li > button').attr('aria-selected', 'true')) {
    $(this).addClass("slick-button-active");
  }
	});
