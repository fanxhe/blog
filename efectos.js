$(function(){

	$(window).scroll(function(){
		var opacidad = ($(window).scrollTop() / 200)
		$('#colima').css('opacity',opacidad);
				

		if(($(window).scrollTop() > 500)&&($(window).scrollTop()<700)){
				// alert($(window).scrollTop());
				$('.circle_about_me').css('opacity',1);
		}
		else if($(window).scrollTop()<500) {
				$('.circle_about_me').css('opacity',0);
		}

	});

	$('#lg').hover(
		function(){
			$('#cambiarfondo').animate({opacity: 0.7}, 50);	
			$("#lg").css('opacity',1);
		},
		function(){
			$('#cambiarfondo').animate({opacity: 0}, 50);
			$('#lg').css('opacity',0);
	});


	// $('.circle_about_me').scroll(function(){
	// 	alert("entra")

	// 	$('.circle_about_me').animate({opacity:1}, 1000);
	// });
});





