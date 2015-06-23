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

	$('#about1,#about2,#about3,#about4').waypoint({
		handler: function(scroll){
      var section = $(this.element);
			if(scroll== "down"){
					section.find('.rectangulo').animate({opacity: 1}, 80);
					section.find('.rectangulo1').animate({
						'background-position-x': '50%',
						'background-position-y': '50%',
					}, 40);
					section.find('.rectangulo2').animate({
						'background-position-x': "50%",
						'background-position-y': "15px",
					}, 40);
					section.find('.about_project').animate({opacity:1},1000);
			}
			else {
					section.find('.about_project').animate({opacity:0},1);
					section.find('.rectangulo').animate({opacity: 0}, 80);
					section.find('.rectangulo1').animate({
						'background-position-x': '-1000',
						'background-position-y': '50%',
					}, 40);
					section.find('.rectangulo2').animate({
						'background-position-x': "1000",
						'background-position-y': "50%",
					}, 40);
			}
		}
	});




	// var waypoint = new waypoint({
	// 	element: document.getElementBy
	//
	// 	function(){
	// 				$('.fondo_central').animate ({opacity:1},25);
	// 				$('.about_project').animate ({opacity:1},1);
	// 	});
	//
	// });



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
});
