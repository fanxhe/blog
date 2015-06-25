$(function(){

	$(window).scroll(function(){
		var opacidad = ($(window).scrollTop() / 200)
		$('#cover').css('opacity',opacidad);

		if(($(window).scrollTop() > 500)&&($(window).scrollTop()<700)){
				// alert($(window).scrollTop());
				$('.circle_about_me').css('opacity',1);
		}
		else if($(window).scrollTop()<500) {
				$('.circle_about_me').css('opacity',0);
		}

	});

	var activarRectangulos = function(){
		var section = $('section.active');
		section.find('.rectangulo').animate({opacity: 1}, 200);
		section.find('.rectangulo1').animate({
			'background-position-x': '50%',
			'background-position-y': '50%',
		}, 100);
		section.find('.rectangulo2').animate({
			'background-position-x': "50%",
			'background-position-y': "15px",
		}, 100);
		section.find('.about_project').animate({opacity:1},200);
	}

	var desactivarRectangulos = function() {
		var section = $('section.active');
		section.find('.about_project').animate({opacity:0},200);
		section.find('.rectangulo').animate({opacity: 0}, 200);
		section.find('.rectangulo1').animate({
			'background-position-x': '-1000',
			'background-position-y': '50%',
		}, 200);
		section.find('.rectangulo2').animate({
			'background-position-x': "1000",
			'background-position-y': "50%",
		}, 200);
	};

	var bandera = false;
	$("#onepage-scroll").onepage_scroll({
		sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
	  easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
	                                   // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	  animationTime: 1000,              // AnimationTime let you define how long each section takes to animate
	  pagination: false,               // You can either show or hide the pagination. Toggle true for show, false for hide.
	  updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	  beforeMove: function(index) {
			if (bandera) {
				bandera = false;
			} else {
				console.log("beforeMove:", index)
				bandera = true;
				desactivarRectangulos();
			}
		},  // This option accepts a callback function. The function will be called before the page moves.
	  afterMove: function(index) {
			console.log("afterMove:", index)
			if (index > 2) {
				activarRectangulos();
			}
		},   // This option accepts a callback function. The function will be called after the page moves.
	  loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
	  keyboard: true,                  // You can activate the keyboard controls
	  responsiveFallback: false,       // You can fallback to normal page scroll by defining the width of the browser in which
	                                   // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
	                                   // the browser's width is less than 600, the fallback will kick in.
	  direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
	});

	// $('#about1,#about2,#about3,#about4').waypoint({
	// 	// offset: 700,
	//
	// 	handler: function(scroll){
	//
  //     var section = $(this.element);
	//
	// 		// window.location.hash  = section[0]['id'];
	//
	// 		if(scroll=="down"){
	//
	// 				section.animatescroll();
	// 				section.find('.rectangulo').animate({opacity: 1}, 80);
	// 				section.find('.rectangulo1').animate({
	// 					'background-position-x': '50%',
	// 					'background-position-y': '50%',
	// 				}, 40);
	// 				section.find('.rectangulo2').animate({
	// 					'background-position-x': "50%",
	// 					'background-position-y': "15px",
	// 				}, 40);
	// 				section.find('.about_project').animate({opacity:1},1000);
	// 		}
	//
	// 		else {
	//
	// 				section.find('.about_project').animate({opacity:0},1);
	// 				section.find('.rectangulo').animate({opacity: 0}, 80);
	// 				section.find('.rectangulo1').animate({
	// 					'background-position-x': '-1000',
	// 					'background-position-y': '50%',
	// 				}, 40);
	// 				section.find('.rectangulo2').animate({
	// 					'background-position-x': "1000",
	// 					'background-position-y': "50%",
	// 				}, 40);
	// 		}
	//  }
	// });
});




	// $('#cambiarignacio').hover(
	// 	function(){
	// 		$('#cambiarignacio').animate({opacity:1}, 50);
	// 		$(".lgignacio").css('opacity',1);
	// 		// $("#cambiarignacio").css('z-index',0);
	// 		// $("#lgignacio").css('z-index',1000);
	// 	},
	// 	function(){
	// 		$('#cambiarignacio').animate({opacity: 0}, 50);
	// 		$('.lgignacio').css('opacity',0);
	// 		// $("#cambiarignacio").css('z-index',1000);
	// 		// $("#lgignacio").css('z-index',10000);

	// });

	// $('.circle_about_me').scroll(function(){
	// 	alert("entra")

	// 	$('.circle_about_me').animate({opacity:1}, 1000);
	// });
