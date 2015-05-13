$(function(){
	$(window).scroll(function(){
		var opacidad = ($(window).scrollTop() / 200)
		$('#colima').css('opacity', opacidad);
	});
});