$(document).ready(function(){
	//AL STEEL BUILD YOUR OWN METAL BUILDING SCRIPT

	var colorToChange = "siding";


	//** swap metal siding **//
	$( ".color-choice" ).click(function() {
  		 var myColor = event.target.id;
  		 var sidingURL = "img/siding/";
  		 var roofURL = "img/roof/";
  		 var trimURL = "img/trim/";  		 


  		 if(colorToChange == "siding"){
  		 	$('#siding').attr("src", sidingURL+myColor+'.png');
  		 } else if(colorToChange == "roof"){
  		 	$('#roof').attr("src", roofURL+myColor+'.png');
  		 } else if(colorToChange == "trim"){
  		 	$('#trim').attr("src", trimURL+myColor+'.png');
  		 }
	});

	$( "#siding-tab" ).click(function() {
		$( ".siding-tab" ).addClass("selected");
		$( ".roof-tab" ).removeClass("selected");
		$( ".trim-tab" ).removeClass("selected");

		colorToChange = "siding";
	});
	$( "#roof-tab" ).click(function() {
		$( ".siding-tab" ).removeClass("selected");
		$( ".roof-tab" ).addClass("selected");
		$( ".trim-tab" ).removeClass("selected");

		colorToChange = "roof";
	});
	$( "#trim-tab" ).click(function() {
		$( ".siding-tab" ).removeClass("selected");
		$( ".roof-tab" ).removeClass("selected");
		$( ".trim-tab" ).addClass("selected");

		colorToChange = "trim";
	});



	//doors / windows functions

	//END WALL - DOORS
	$("#walkin-end-left").change(function() {
	    if(this.checked) {
	    	$('.walkin-end-left img').attr("src", 'img/doors/end-left.png');
	    	$('.walkin-end-left').css("display", "inline-block");       
		} else{ 
			$('.walkin-end-left').hide();
		}
	});
	$("#walkin-end-center").change(function() {
	    if(this.checked) {
	        $('.walkin-end-center img').attr("src", 'img/doors/end-center.png');
	    	$('.walkin-end-center').css("display", "inline-block");
		} else{ 
			$('.walkin-end-center').hide();
		}
	});
	$("#walkin-end-right").change(function() {
	    if(this.checked) {
	        $('.walkin-end-right img').attr("src", 'img/doors/end-right.png');
	    	$('.walkin-end-right').css("display", "inline-block");
		} else{ 
			$('.walkin-end-right').hide();
		}
	});

	//SIDE WALL - DOORS
	$("#walkin-side-left").change(function() {
	    if(this.checked) {
	    	$('.walkin-side-left img').attr("src", 'img/doors/side-left.png');
	    	$('.walkin-side-left').css("display", "inline-block");	       
		} else{ 
			$('.walkin-side-left').hide();
		}
	});
	$("#walkin-side-center").change(function() {
	    if(this.checked) {
	        $('.walkin-side-center img').attr("src", 'img/doors/side-center.png');
	    	$('.walkin-side-center').css("display", "inline-block");
		} else{ 
			$('.walkin-side-center').hide();
		}
	});
	$("#walkin-side-right").change(function() {
	    if(this.checked) {
	        $('.walkin-side-right img').attr("src", 'img/doors/side-right.png');
	    	$('.walkin-side-right').css("display", "inline-block");
		} else{ 
			$('.walkin-side-right').hide();
		}
	});


	//END WALL - WINDOWS
	$("#windows-end-left").change(function() {
	    if(this.checked) {
	    	$('.walkin-end-left img').attr("src", 'img/windows/end-left.png');
	    	$('.walkin-end-left').css("display", "inline-block");       
		} else{ 
			$('.walkin-end-left').hide();
		}
	});
	$("#windows-end-center").change(function() {
	    if(this.checked) {
	        $('.walkin-end-center img').attr("src", 'img/windows/end-center.png');
	    	$('.walkin-end-center').css("display", "inline-block");
		} else{ 
			$('.walkin-end-center').hide();
		}
	});
	$("#windows-end-right").change(function() {
	    if(this.checked) {
	        $('.walkin-end-right img').attr("src", 'img/windows/end-right.png');
	    	$('.walkin-end-right').css("display", "inline-block");
		} else{ 
			$('.walkin-end-right').hide();
		}
	});

	//SIDE WALL - WINDOWS
	$("#windows-side-left").change(function() {
	    if(this.checked) {
	    	$('.walkin-side-left img').attr("src", 'img/windows/side-left.png');
	    	$('.walkin-side-left').css("display", "inline-block");	       
		} else{ 
			$('.walkin-side-left').hide();
		}
	});
	$("#windows-side-center").change(function() {
	    if(this.checked) {
	        $('.walkin-side-center img').attr("src", 'img/windows/side-center.png');
	    	$('.walkin-side-center').css("display", "inline-block");
		} else{ 
			$('.walkin-side-center').hide();
		}
	});
	$("#windows-side-right").change(function() {
	    if(this.checked) {
	        $('.walkin-side-right img').attr("src", 'img/windows/side-right.png');
	    	$('.walkin-side-right').css("display", "inline-block");
		} else{ 
			$('.walkin-side-right').hide();
		}
	});


	//ROLL UP DOORS
	$("#rollup-end").change(function() {
	    if(this.checked) {
	    	$('.walkin-end-center img').attr("src", 'img/roll-up-end.png');
	    	$('.walkin-end-center').css("display", "inline-block");	       
	    	$('.walkin-end-center').addClass('roll-up-end');
		} else{ 
			$('.walkin-end-center').removeClass('roll-up-end');
			$('.walkin-end-center').hide();
		}
	});

	$("#rollup-side").change(function() {
	    if(this.checked) {
	    	$('.walkin-side-center img').attr("src", 'img/roll-up-side.png');
	    	$('.walkin-side-center').css("display", "inline-block");	       
	    	$('.walkin-side-center').addClass('roll-up-side');
		} else{ 
			$('.walkin-side-center').removeClass('roll-up-side');
			$('.walkin-side-center').hide();
		}
	});
});