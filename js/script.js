
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
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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


	var windowHeight = $(window).height();

		$(document).on('scroll', function() {
			$('#section-2').each(function() {
				var self = $(this),
				height = self.offset().top + self.height();
				if ($(document).scrollTop() + windowHeight >= height) {
					var animatetrue = $('.section-2__ul-li').addClass("animated").addClass("slideInUp").css({"opacity":"1", "animation-duration":"2s"});
					if (animatetrue) {
							$('.section-2__button').addClass("animated").addClass("slideInUp").css({"animation-delay":"1s", "opacity":"1", "animation-duration":"2s"});
					}
				}
			});
		});
		$(document).on('scroll', function() {
			$('#section-3').each(function() {
				var self = $(this),
				height = self.offset().top + self.height();
				if ($(document).scrollTop() + windowHeight >= height) {
					$(this).addClass("animated").addClass("slideInUp").css({"opacity":"1", "animation-duration":"2s"});
				}
			});
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
