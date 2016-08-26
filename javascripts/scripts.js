
var slideSpeed = 600;


$(document).ready(function() {

	$(".category-text").hide();
	$(".sub-category-text").hide();

	$('#about-photo').hide().css('visibility', 'visible').fadeIn(1000);

	$.getJSON('descriptions.json', function(descriptions){
		console.log(descriptions);
	});


	$(".link-category" ).click(function() { 
	 		
	 		$(".category-text").slideUp(slideSpeed);
	 		$(".sub-category-text").slideUp(slideSpeed);

	 		$(this).next().slideDown(slideSpeed);
	});	

	$(".link-sub-category" ).click(function() { 
	 		
		$(".sub-category-text").slideUp(slideSpeed);

	 		$(this).next().slideDown(slideSpeed);
	});	
});






