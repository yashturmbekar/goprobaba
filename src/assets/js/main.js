(function($){
	"use strict";
		
	// Scroll JS
	$('.scroll-btn a, .placid-aside .navbar-nav .nav-item .nav-link, .navbar .navbar-nav .nav-item .nav-link, .about-content .default-btn, .others-option .default-btn, .aside-footer .default-btn, .hire-me-btn .default-btn, .book-trainer-content .default-btn, .about-content .default-btn, .home-banner-content .default-btn').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1500);
		e.preventDefault();
	});
	$('.placid-aside .navbar-nav .nav-item .nav-link').on('click', function(){
		$('.placid-aside').toggleClass('active-placid-aside');
		$('.responsive-burger-menu').toggleClass('active');
	});
	$('.navbar .navbar-nav li a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

	// Headroom JS
	let headerElement = document.querySelector('.headroom');
	if (headerElement){
		let headroom = new Headroom(headerElement, {
			offset: 100
		});
		headroom.init();
	}

	// Sidebar Example Demo Modal
	$(".sidebar-demo-control").on('click',  function() {
		$('.example-demo-modal').toggleClass('active');
	});
	$(".example-demo-modal-control").on('click',  function() {
		$('.example-demo-modal').removeClass('active');
	});

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 30){
			$('.navbar').addClass("is-sticky");
		}
		else{
			$('.navbar').removeClass("is-sticky");
		}
	});

	// Main Container Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 30){
			$('.main-container-sticky').addClass("is-sticky");
		}
		else{
			$('.main-container-sticky').removeClass("is-sticky");
		}
	});

	// Hide Side Menu
	$('.aside-show-hide span').on('click', function() {
		$('.main-container').toggleClass('active-main-container');
	});

	// Burger Menu
	$('.responsive-burger-menu').on('click', function() {
		$('.responsive-burger-menu').toggleClass('active');
		$('.placid-aside').toggleClass('active-placid-aside');
	});

	// Home Slides
	$('.home-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		animateOut: 'fadeOut',
		autoplayHoverPause: false,
		rtl: true,
		autoplay: true,
		mouseDrag: false,
		items: 1,
		navText: [
			"<i class='ri-arrow-right-s-line'></i>",
			"<i class='ri-arrow-left-s-line'></i>"
		],
	});
	$('.home-slides-two').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		autoplayHoverPause: true,
		animateOut:"slideOutDown",
		rtl: true,
		animateIn:"slideInDown",
		autoplay: true,
		items: 1,
		navText: [
			"<i class='ri-arrow-right-s-line'></i>",
			"<i class='ri-arrow-left-s-line'></i>"
		],
	});
	$(".home-slides-two").on("translate.owl.carousel", function(){
		$(".home-banner-content h1").removeClass("animated fadeInDown").css("opacity", "0");
		$(".home-banner-content p").removeClass("animated fadeInUp").css("opacity", "0");
		$(".home-banner-content .default-btn").removeClass("animated fadeInDown").css("opacity", "0");
	});
	$(".home-slides-two").on("translated.owl.carousel", function(){
		$(".home-banner-content h1").addClass("animated fadeInDown").css("opacity", "1");
		$(".home-banner-content p").addClass("animated fadeInUp").css("opacity", "1");
		$(".home-banner-content .default-btn").addClass("animated fadeInDown").css("opacity", "1");
	});
	
	// Typewriter JS
	var TxtType = function(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};
	TxtType.prototype.tick = function() {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];
		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
		this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
		var that = this;
		var delta = 200 - Math.random() * 100;
		if (this.isDeleting) { delta /= 2; }
		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}
		setTimeout(function() {
			that.tick();
		}, delta);
	};
	window.onload = function() {
		var elements = document.getElementsByClassName('typewrite');
		for (var i=0; i<elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-type');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtType(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".typewrite > .wrap { border-right: 0.07em solid #f4f4f4}";
		document.body.appendChild(css);
	};

	// Tabs
	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li').on('click', function (g) {
			var tab = $(this).closest('.tab'), 
			index = $(this).closest('li').index();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			tab.find('.tab-content').find('div.tabs-item').not('div.tabs-item:eq(' + index + ')').slideUp();
			tab.find('.tab-content').find('div.tabs-item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});
	})(jQuery);

	// Feedback Slides
	$('.feedback-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		rtl: true,
		navText: [
			"<i class='ri-arrow-right-s-line'></i>",
			"<i class='ri-arrow-left-s-line'></i>"
		],
	});

	// Ripple JS
	$('.water-ripple').ripples('show');

	// Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	if($('.count-box').length){
		$('.count-box').appear(function(){
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});
	
	// Instagram Slides
	$('.instagram-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		rtl: true,
		autoplayHoverPause: true,
		autoplay: true,
		navText: [
			"<i class='ri-arrow-right-s-line'></i>",
			"<i class='ri-arrow-left-s-line'></i>"
		],
		responsive: {
			0: {
				items: 2,
			},
			576: {
				items: 4,
			},
			768: {
				items: 6,
			},
			1200: {
				items: 9,
			}
		}
	});
	
	// Popup Image
	$('.popup-btn').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		}
	});

	// Count Time 
	function makeTimer() {
		var endTime = new Date("September 20, 2020 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 0);

	// Particles JS
	if(document.getElementById("particles-js")) particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 60,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 80,
					"height": 80
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "repulse"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true,
		"config_demo": {
			"hide_card": false,
			"background_color": "#b61924",
			"background_image": "",
			"background_position": "50% 50%",
			"background_repeat": "no-repeat",
			"background_size": "cover"
		}
	});

	// Team Slides
	$('.team-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		rtl: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='ri-arrow-right-s-line'></i>",
			"<i class='ri-arrow-left-s-line'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});
	
	// Blog Slides
	$('.blog-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		rtl: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='ri-arrow-right-s-line'></i>",
			"<i class='ri-arrow-left-s-line'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

}(jQuery));