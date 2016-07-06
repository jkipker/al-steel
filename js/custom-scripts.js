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
  		 	console.log('sidingURL = '+sidingURL+' '+myColor);
  		 } else if(colorToChange == "roof"){
  		 	$('#roof').attr("src", roofURL+myColor+'.png');
  		 	console.log('roofURL = '+roofURL+' '+myColor);
  		 } else if(colorToChange == "trim"){
  		 	$('#trim').attr("src", trimURL+myColor+'.png');
  		 	console.log('trimURL = '+trimURL+' '+myColor);
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

});