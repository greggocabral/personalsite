

function hideAll(){
	
	$(".category-text").slideUp( slideSpeed, function() {
			    // Animation complete.
			  });

}


var state;
var slideSpeed = 600;


$(document).ready(function() {

	$(".category-text").hide();

	$('#about-photo').hide().css('visibility', 'visible').fadeIn(1000);



	$("#section-about" ).click(function() {
		if (state!= 'about'){
			hideAll();
			$("#about-text").slideDown( 400, function() {
			  });
			state = 'about';
		}
	});	

	$(".link-category" ).click(function() {
		if (state!= 'design'){
			hideAll();
			$(this).slideDown(slideSpeed, function() {
			    // Animation complete.
			  });
			state = 'design';
		}
	});	


	$("#design-link" ).click(function() {
		if (state!= 'design'){
			hideAll();
			$("#design-text").slideDown(slideSpeed, function() {
			    // Animation complete.
			  });
			state = 'design';
		}
	});	

	$("#engineering-link" ).click(function() {
		if (state!= 'engineering'){
			hideAll();
			$("#engineering-text").slideDown( slideSpeed, function() {
			    // Animation complete.
			  });
			state = 'engineering';
		}
	});	

	$("#other-link" ).click(function() {
		if (state!= 'other'){
			hideAll();
			$("#other-text").slideDown( slideSpeed, function() {
			    // Animation complete.
			  });
			state = 'other';
		}
		
	});	

	


});






