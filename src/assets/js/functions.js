(function ($) {

	"use strict";

	// Preload
    $(window).on("load", function (){  // makes sure the whole site is loaded
		'use strict';
		$('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({
			'overflow': 'visible'
		});
		var $hero= $('.hero_home .content');
		var $hero_v= $('#hero_video .content ');
		$hero.find('h3, p, form').addClass('fadeInUp animated');
		$hero.find('.btn_1').addClass('fadeIn animated');
		$hero_v.find('.h3, p, form').addClass('fadeInUp animated');
		$(window).scroll();
	})

	// Sticky nav + scroll to top
	var $headerStick = $('.header_sticky');
	var $toTop = $('#toTop');
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 1) {
			$headerStick.addClass("sticky");
		} else {
			$headerStick.removeClass("sticky");
		};
		if ($(this).scrollTop() != 0) {
			$toTop.fadeIn();
		} else {
			$toTop.fadeOut();
		}
	});
	$toTop.on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});

	// Menu
	$('a.open_close').on("click", function () {
		$('.main-menu').toggleClass('show');
		$('.layer').toggleClass('layer-is-visible');
		$('header.static').toggleClass('header_sticky sticky');
		$('body').toggleClass('body_freeze');
	});
	$('a.show-submenu').on("click", function () {
		$(this).next().toggleClass("show_normal");
	});

	// Hamburger icon 
	var toggles = document.querySelectorAll(".cmn-toggle-switch");
	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};
	function toggleHandler(toggle) {
		toggle.addEventListener("click", function (e) {
			e.preventDefault();
			(this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
		});
	};

	// WoW - animation on scroll
	var wow = new WOW({
		boxClass: 'wow', // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset: 0, // distance to the element when triggering the animation (default is 0)
		mobile: true, // trigger animations on mobile devices (default is true)
		live: true, // act on asynchronously loaded content (default is true)
		callback: function (box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null // optional scroll container selector, otherwise use window
	});
	wow.init();

	// Carousel
	$('#reccomended, #staff').owlCarousel({
		center: true,
		items: 2,
		loop: true,
		margin: 10,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});

	// Selectbox
	$(".selectbox").selectbox();

	// Sticky horizontal results list page
	$("#results").stick_in_parent({
		offset_top: 0
	});

	// Sticky sidebar
	$('#sidebar').theiaStickySidebar({
		additionalMarginTop: 95
	});

	// Tooltips
	$('[data-toggle="tooltip"]').tooltip();
	
	// Detail page func
	$('#booking_date').dateDropper();
		$('#booking_time').timeDropper({
			setCurrentTime: false,
			meridians: true,
			primaryColor: "#e74e84",
			borderColor: "#e74e84",
			minutesInterval: '15'
		});
		
		var $sticky_nav= $('#secondary_nav');
		$sticky_nav.stick_in_parent();
		$sticky_nav.find('ul li a').on('click', function(e) {
			e.preventDefault();
			var target = this.hash;
			var $target = $(target);
			$('html, body').animate({
				'scrollTop': $target.offset().top - 95
			}, 800, 'swing');
		});
		$sticky_nav.find('ul li a').on('click', function() {
		$sticky_nav.find('.active').removeClass('active');
		$(this).addClass('active');
		});
	
	// Faq section
	$('#faq_box a[href^="#"]').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			   if (target.length) {
				 $('html,body').animate({
					 scrollTop: target.offset().top -185
				}, 800);
				return false;
			}
		}
	});
	$('ul#cat_nav li a').on('click', function () {
		$('ul#cat_nav li a.active').removeClass('active');
		$(this).addClass('active');
	});
	// Accordion
	function toggleChevron(e) {
		$(e.target)
			.prev('.card-header')
			.find("i.indicator")
			.toggleClass('icon_minus_alt2 icon_plus_alt2');
	}
	$('.accordion').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);
		function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".indicator")
            .toggleClass('icon_minus_alt2 icon_plus_alt2');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);
	
	// Show Password
	$('#password, #password1, #password2').hidePassword('focus', {
		toggle: {
			className: 'my-toggle'
		}
	});

	$(function () {
		var $sections = $('.form-section');

		function navigateTo(index) {
			// Mark the current section with the class 'current'
			$sections
				.removeClass('current')
				.eq(index)
				.addClass('current');
			// Show only the navigation buttons that make sense for the current section:
			$('.form-navigation .previous').toggle(index > 0);
			var atTheEnd = index >= $sections.length - 1;
			$('.form-navigation .next').toggle(!atTheEnd);
			$('.form-navigation [type=submit]').toggle(atTheEnd);
		}

		function curIndex() {
			// Return the current index by looking at which section has the class 'current'
			return $sections.index($sections.filter('.current'));
		}

		// Previous button is easy, just go back
		$('.form-navigation .previous').click(function () {
			navigateTo(curIndex() - 1);
		});

		// Next button goes forward iff current block validates
		$('.form-navigation .next').click(function () {
			$('.demo-form').parsley().whenValidate({
				group: 'block-' + curIndex()
			}).done(function () {
				navigateTo(curIndex() + 1);
			});
		});

		// Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
		$sections.each(function (index, section) {
			$(section).find(':input').attr('data-parsley-group', 'block-' + index);
		});
		navigateTo(0); // Start at the beginning
	});

	var swiper = new Swiper('.lab-slide .swiper-container', {
		slidesPerView: 6,
		spaceBetween: 10,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints: {
			1024: {
				slidesPerView: 5,
				spaceBetween: 40,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			}
		}
	});

	var swiper = new Swiper('.category-doc .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 10,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints: {
			1024: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			}
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	
	$('.column').theiaStickySidebar({
		additionalMarginTop: 30
	});

	$('.add-cart-sticky').theiaStickySidebar({
		additionalMarginTop: 80
	});

	var swiper = new Swiper('.popular-tests-section .swiper-container', {
		slidesPerView: 3,
		slidesPerColumn: 3,
		spaceBetween: 15,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		},
		breakpoints: {
			1024: {
			  slidesPerView: 3,
			  spaceBetween: 15,
			},
			768: {
			  slidesPerView: 2,
			  spaceBetween: 15,
			},
			640: {
			  slidesPerView: 1,
			  spaceBetween: 15,
			},
			320: {
			  slidesPerView: 1,
			  spaceBetween: 10,
			}
		}
	});

})(window.jQuery);









(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  
	
  })(jQuery);