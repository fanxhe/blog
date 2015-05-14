$(function(){

	$(window).scroll(function(){
		var opacidad = ($(window).scrollTop() / 200)
		$('#colima').css('opacity',opacidad);
	});

	// $('#cambiarfondo').hover(
	// 	function(){
	// 		$('#cambiarfondo').animate({opacity: 1}, 1000);		
	// 	},
	// 	function(){
	// 		$('#cambiarfondo').animate({opacity: 0}, 1000);
	// });

});





