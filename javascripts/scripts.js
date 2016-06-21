
var slideSpeed = 600;


$(document).ready(function() {

	$(".category-text").hide();

	$('#about-photo').hide().css('visibility', 'visible').fadeIn(1000);

	$(".link-category" ).click(function() { 
	 		
	 		$(".category-text").slideUp(slideSpeed);

	 		$(this).next().slideDown(slideSpeed);
	});	
});






