
$(document).ready(function () {
	
	//top3 전체 그래프
	var chart = bb.generate({
	  	data: {
	   	 columns: [
			["코로나", 30, 200, 100, 400, 150, 250],
			["이태원", 50, 20, 10, 40, 15, 25],
			["공무원", 130, 150, 200, 300, 200, 100]
	    	]
	  	},
	  	size:{height:280},
	 	 bindto: "#newPetitionTopChart",
		});
	
	//top3 각각 그래프
	var firstchart = bb.generate({
	  	data: {
	   	 columns: [
	   		[30, 200, 100, 400, 150, 250],
	    	]
	  	},
	  	size:{height:110,width:250},
	 	 bindto: "#newPetitionTop1Chart",
		  	axis: {
		        x: {
		        tick: {
		            text:{show:false}
		        	  }
		        	},
		        y: {
			        tick: {
			            text:{show:false}
			        }
			     }
		  	 }
		});
	
	var secondchart = bb.generate({
	  	data: {
	   	 columns: [
	   		[50, 20, 10, 40, 15, 25],
	    	]
	  	},
	  	size:{height:110,width:250},
	 	 bindto: "#newPetitionTop2Chart",
		  	axis: {
		        x: {
		        tick: {
		            text:{show:false}
		        	  }
		        	},
		        y: {
			        tick: {
			            text:{show:false}
			        }
			     }
		  	 }
		});
	
	var thirdchart = bb.generate({
	  	data: {
	   	 columns: [
	   		[130, 150, 200, 300, 200, 100],
	    	]
	  	},
	  	size:{height:110,width:250},
	  	bindto: "#newPetitionTop3Chart",
	  	axis: {
	        x: {
	        tick: {
	            text:{show:false}
	        	  }
	        	},
	        y: {
		        tick: {
		            text:{show:false}
		        }
		     }
	  	 }
	});
	
	
});
	