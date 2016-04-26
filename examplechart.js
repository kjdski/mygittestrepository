$(document).ready(function () {
   /* set no cache */    
   		$.ajaxSetup({ cache: false });
 
        var w = 500,
		    h = 500;

		var svg = d3.select("#chart")
			.append("svg")
			.attr("width", w)
			.attr("height", h);


			d3.json("timecard-data.json", function(data) {
			console.log(data[0]);
		  					   		
			//d3.json("timecard-data2.json", function(json) {
		   	//dataset = json;
			//var data = json.items;
			
			var max_n = 0;
			for (var d in data) {
			max_n = Math.max(data[d].hours, max_n);
			}

		   	
			var dx = w / max_n;
			var dy = h / data.length;	   
		
			// hours
			var bars = svg.selectAll(".bar")
				.data(data)
				.enter()
				.append("rect")
				.attr("font-family", "sans-serif")
   				.attr("font-size", "11px")
   				.attr("fill", "blue")
				.attr("class", function(d, i) {return "bar " + d.organization;})
				.attr("x", function(d, i) {return 0;})
				.attr("y", function(d, i) {return dy*i;})
				.attr("width", function(d, i) {return dx*d.hours})
				.attr("height", dy);
	
				
			// organization
			var text = svg.selectAll("text")
				.data(data)
				.enter()
				.append("text")
				.attr("class", function(d, i) {return "organization " + d.organization;})
				.attr("x", 15)
				.attr("y", function(d, i) {return dy*i + 25;})
				.attr("font-family", "sans-serif")
   				.attr("font-size", "11px")
   				.attr("fill", "black")
				.text( function (d) {return d.organization + " (" + d.hours  + ")";})
				.each( function (d) {return d.ActiveEmployee + " (" - d.hours  - ")";})
				.attr("font-size", "15px")
				.style("font-weight", "bold");
			
			
		});
});