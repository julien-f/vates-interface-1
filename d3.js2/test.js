var svg = d3.select("#viz")
	.append("svg")
	.attr("width", 1000)
	.attr("height", 1000);    


d3.csv("data.csv",function(csv) {
  // we first sort the data
 
  csv.sort(function(a,b) {return b.population-a.population;});
 
  // then we create the marks, which we put in an initial position
 
  svg.selectAll("circle").data(csv).enter()
    .append("circle")
    .attr("cx",function(d) {return x(0);})
    .attr("cy",function(d) {return y(0);})
    .attr("r",function(d) {return r(0);})
 
    .style("fill",function(d) {return c(d.continent);})
    .style("opacity",function(d) {return o(+d.GDPcap);})
 
      .append("title")
      .text(function(d) {return d.country;})
   
  // now we initiate - moving the marks to their position
 
  svg.selectAll("circle").transition().duration(1000)
    .attr("cx",function(d) {return x(+d.GERD);})
    .attr("cy",function(d) {return y(+d.growth);})
    .attr("r",function(d) {return r(Math.sqrt(+d.population));})
})







/*
//Variable		
var centrex = 500;
var centrey = 500;
var espace = 100;
var angle,Nx,Ny,angleP,x,y;
var radPool,radPoolenfant;

var sampleSVG = d3.select("#viz")
	.append("svg")
	.attr("width", 1000)
	.attr("height", 1000);    


for (var i = 0, n = data.length; i < n; ++i)
		{
			angleP = 360/data.length;
			angle = angleP*i;
			var radPool = angle * Math.PI / 180
			x = Math.cos(radPool) * espace + centrex ;		  				    			  		 
			y = Math.sin(radPool) * espace + centrey ;
			sampleSVG.append("circle")
				.style("stroke", "gray")
				.style("fill", "green")
				.attr("r", 25)
				.attr("cx", x)
				.attr("cy", y)
					
			for (var j = 0, m = data[i].hosts ? data[i].hosts.length : 0; j < m; ++j)
			{
				angleH = angleP/data[i].hosts.length *j - ( angleP / 2 ) + angleP*i ; 
				radPoolenfant = angleH * Math.PI / 180;
				Nx = Math.cos(radPoolenfant) * espace * 1.5 + x ;		  				    			  		 
				Ny = Math.sin(radPoolenfant) * espace * 1.5 + y ;
				
				sampleSVG.append("line")
					.style("stroke", "black")
					.attr("x1",x )
					.attr("y1",y)
					.attr("x2",Nx)
					.attr("y2", Ny)		
								
				sampleSVG.append("circle")
					.style("stroke", "gray")
					.style("fill", "blue")
					.attr("r", 25)
					.attr("cx", Nx)
					.attr("cy", Ny)
			}

		}
*/