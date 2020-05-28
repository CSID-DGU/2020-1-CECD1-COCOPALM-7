
$(document).ready(function () {
	var chart = bb.generate({
	  	data: {
	   	 columns: [
			["코로나", 30, 200, 100, 400, 150, 250],
			["이태원", 50, 20, 10, 40, 15, 25],
			["공문원", 130, 150, 200, 300, 200, 100]
	    	]
	  	},
	  	size:{height:300},
	 	 bindto: "#newPetitionTopChart",
		});
});
	