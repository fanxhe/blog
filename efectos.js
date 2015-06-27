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
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#bloque1',
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
				slidesNavigation: true,
				loopHorizontal: false,
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
