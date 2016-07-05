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
  		 } else if(colorToChange == "siding"){
  		 	$('#roof').attr("src", sidingURL+myColor+'.png');
  		 } else if(colorToChange == "siding"){
  		 	$('#trim').attr("src", sidingURL+myColor+'.png');
  		 }
  		 
  		
  		 

	});

});