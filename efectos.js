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





