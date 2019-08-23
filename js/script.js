
$(function(){
	$('.header-hamburger__button').click(function(){
		$(this).toggleClass('is-active');
		$('.header-nav').slideToggle(250);

	});

	$('.section-3__slider').slick({
		dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true,
		rows: 1,
		responsive: [
			{
	      breakpoint: 1260,
	      settings: {
					dots: true,
					arrows: false
	      }
	    },
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
				dots: true,
				arrows: false
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
				dots: true,
				arrows: false
      },
		}
  ]
	});

	$("a[href^='#']").click(function(){
	  var _href = $(this).attr("href");
	  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	  return false;
  });

	$(".section-2__button button-style").click(function(){
    var _href = $("#section-4");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
	});

	$(".section-1__textblock-button").click(function(){
    var _href = $("#section-2");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
	});

	$(".section-2__button").click(function(){
		var _href = $("#section-4");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

		$('.open-modal').click (function(){
			$('.modal-window').fadeIn(300).css({'display':'flex'});
			$('body').css({'overflow':'hidden'});
		});

		$('#modal-window').click (function(){
			if (event.target == this) {
				$('.modal-window').fadeOut(300);
				$('body').css({'overflow':'	visible'});
			}
		});

		$('.modal-window__container__button__close').click (function(){
				$('.modal-window').fadeOut(300);
				$('body').css({'overflow':'	visible'});
		});
		$('.modal-window__container__button__send').click (function(){
				$('.modal-window').fadeOut(300);
				$('body').css({'overflow':'	visible'});
		});
});
