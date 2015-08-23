$(function(){

		$(window).scroll(function(){
			var opacidad = ($(window).scrollTop() / 200)
			$('#cover').css('opacity',opacidad);
		});


		var activarRectangulos = function(){
			var section = $('div.active');
			section.find('.rectangulo').animate({opacity:1}, 200);
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
			var section = $('div.active');
			section.find('.about_project').animate({opacity:0},200);
			section.find('.rectangulo').animate({opacity:0}, 200);
			section.find('.rectangulo1').animate({
				'background-position-x': '-1000',
				'background-position-y': '50%',
			}, 200);
			section.find('.rectangulo2').animate({
				'background-position-x': "1000",
				'background-position-y': "50%",
			}, 200);
		};


    $('#fullpage').fullpage({
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection:false,
        scrollBar:true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        normalScrollElements: '#home',//secciones q se comportaran con scroll normal
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,//sensibilidad del scroll
				slidesNavigation: true,
				loopHorizontal: false,// Si estas en la ultima que no te regrese a la primera
				controlArrows: false,
				anchors: ['welcome','team', 'about'],

				afterSlideLoad:function(active){
					activarRectangulos();
				},

				onSlideLeave: function(active){
					desactivarRectangulos();
				}

		});


});
