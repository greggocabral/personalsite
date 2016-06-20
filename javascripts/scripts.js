

function hideAll(){
	
	$("#design-text").slideUp( slideSpeed, function() {
			  });
	$("#engineering-text").slideUp( slideSpeed, function() {
			    // Animation complete.
			  });
	$("#other-text").slideUp( slideSpeed, function() {
			    // Animation complete.
			  });;
	$("#about-text").slideUp( 800, function() {
			    // Animation complete.
			  });
	 $("#photo-profile").animate({height: aboutPhotoHeight});
}


var aboutPhotoHeight;
var state;
var slideSpeed = 600;


$(document).ready(function() {

	$(".category-text").hide();

	$('#about-photo').hide().css('visibility', 'visible').fadeIn(1000);

	$("#section-about" ).click(function() {
		if (state!= 'about'){
			hideAll();

			aboutPhotoHeight = $('#about-photo').css("height");
			$("#photo-profile").animate({height: '15vh'});
			$("#about-text").slideDown( 800, function() {
			    // Animation complete.
			  });

			state = 'about';
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






