/* Custom General jQuery
-------------------------------------------------------------------*/
;(function($) {
	$(document).ready( function(e) {
			/* Header Sticky */
			$(window).scroll(function() {
				if ($(this).scrollTop() > 1){  
					$('.header').addClass("sticky");
				  }
				  else{
					$('.header').removeClass("sticky");
				  }
			});

		$('.footer-box .footer-box-title').click(function(){
			var closest_li  = $(this).closest('.footer-box');
			closest_li.siblings('.footer-box').removeClass('active');
			closest_li.siblings('.footer-box').find('.footer-box-contain').slideUp();
			closest_li.toggleClass('active');
			closest_li.find('.footer-box-contain').slideToggle()
			});
			/* footer accordian */
/*-------------------------------------------------------------------*/
// sldier START


	$(".find-slider").owlCarousel({
		loop:false,
		nav:true,
		dots:true,
		items:3,
		autoplay:false,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		smartspeed:2500,
		responsive:{
			1000:{
				items:3,
				nav:false,
		dots:false,
			},
			600:{
				items:2
			},
			400:{
				items:1
			},
			300:{
				items:1
			},
			200:{
				items:1
			}


		}
		});
		
// sldier END

		/* Responsive Menu */
		$(".navigation-open").click(function () {
		$("body").addClass("menu-action");
		});
		
		$(".menu-trigger").on("click touchstart", function(e){
		e.stopPropagation();
		e.preventDefault();
		if (jQuery(this).hasClass("nt_opended")) {
		$(this).removeClass("nt_opended").siblings(".submenu").slideToggle();
		$(this).removeClass("nt_opended").siblings(".sub-menu-level-1").slideToggle();
		$(this).removeClass("nt_opended").siblings(".sub-menu-level-5").slideToggle();
		} else {
		$(this).addClass("nt_opended").siblings(".submenu").slideToggle();
		$(this).addClass("nt_opended").siblings(".sub-menu-level-1").slideToggle();
		$(this).addClass("nt_opended").siblings(".sub-menu-level-5").slideToggle();
		}
		
		});

		 $(window).on('click touchend', function(e) {
	if (!$(e.target).hasClass("navigation-open") && !$(e.target).hasClass("navigation-close") && !$(e.target).hasClass("navigation") && $(e.target).parents(".navigation").length === 0) {
        $("body").removeClass("menu-action");
	}
});
		
		$(".navigation-close").click(function () {
		$("body").removeClass("menu-action");
		});
		/* Responsive Menu */
	
});
})(jQuery);