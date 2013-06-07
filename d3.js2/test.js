var data = [
	{
		"num":0,
		"label": "Pool 1",
		"hosts": [
			{
				"label": "Host 1",
				"vms": [
					{ "label": "VM 1" },
					{ "label": "VM 2" },
					{ "label": "VM 3" },
					{ "label": "VM 4" },
					{ "label": "VM 5" },
				]
			},
			{
				"label": "Host 2",
				"vms": [
					{ "label": "VM 1" },
					{ "label": "VM 2" },
					{ "label": "VM 3" },
				]
			},
		]
	},
	{
		"num":1,
		"label": "Pool 2",
		"hosts": [
			{
				"label": "Host 1",
				"vms": [
					{ "label": "VM 1" },
					{ "label": "VM 2" },
					{ "label": "VM 3" },
					{ "label": "VM 4" },
					{ "label": "VM 5" },
					{ "label": "VM 6" },
					{ "label": "VM 7" },
				]
			}
		]
	},
		{
		"num":2,
		"label": "Pool 3",
		"hosts": [
			{
				"label": "Host 1",
				"vms": [
					{ "label": "VM 1" },
					{ "label": "VM 2" },
					{ "label": "VM 3" },
					{ "label": "VM 4" },
					{ "label": "VM 5" },
				]
			},
		]
	},
		{
		"num":3,
		"label": "Pool 4",
		"hosts": [
			{
				"label": "Host 1",
				"vms": [
					{ "label": "VM 1" },
					{ "label": "VM 2" },
					{ "label": "VM 3" },
					{ "label": "VM 4" },
					{ "label": "VM 5" },
				]
			},
			{
				"label": "Host 2",
				"vms": [
					{ "label": "VM 1" },
					{ "label": "VM 2" },
					{ "label": "VM 3" },
				]
			},
		]
	},
		{
		"num":4,
		"label": "Pool 3",
		"hosts": [
			{
				"label": "Host 1",
				"vms": [
					{ "label": "VM 1" },
					{ "label": "VM 2" },
					{ "label": "VM 3" },
					{ "label": "VM 4" },
					{ "label": "VM 5" },
				]
			},
		]
	},
];




var width = 1000,
    height = 1000, 
    margin = 50;
    
var svg=d3.select("body").append("svg").attr("width",width).attr("height",height);

var x=d3.scale.linear().domain([0,5]).range([margin,width-margin]);
var y=d3.scale.linear().domain([-10,10]).range([height-margin,margin]);

var o=d3.scale.linear().domain([10000,100000]).range([.5,1]);
var r=d3.scale.linear().domain([0,500]).range([25,25]);

var c=d3.scale.category10().domain(["Africa","America","Asia","Europe","Oceania"]);

svg.selectAll(".h").data(d3.range(-8,10,2)).enter()
  .append("line").classed("h",1)
  .attr("x1",margin).attr("x2",height-margin)
  .attr("y1",y).attr("y2",y)
  
svg.selectAll(".v").data(d3.range(1,5)).enter()
  .append("line").classed("v",1)
  .attr("y1",margin).attr("y2",width-margin)
  .attr("x1",x).attr("x2",x )


var GERD=[
2.21367, 2.74826, 1.96158, 1.80213, 0.39451, 1.52652, 3.01937, 1.44122, 3.84137, 2.20646, 2.78056, 0.5921, 1.14821, 2.64107, 1.78988, 4.2504, 1.26841, 3.33499, 3.3609, 1.67862, 0.41322, 1.81965, 1.13693, 1.75922, 0.67502, 1.65519, 1.24252, 0.48056, 1.85642, 0.92523, 1.38357, 3.61562, 2.99525, 0.84902, 1.82434, 2.78518
];

var growth=[
2.48590317, 3.10741128, 1.89308521, 3.21494841, 5.19813626, 1.65489834, 1.04974368, 7.63563272, 2.85477157, 1.47996142, 2.99558644, -6.90796403, 1.69192342, -3.99988322, -0.42935239, 4.84602001, 0.43108032, 3.96559062, 6.16184325, 2.67806902, 5.56185685, 1.18517739, 2.33052515, 1.59773989, 4.34962928, -1.60958484, 4.03428262, 3.34920254, -0.17459255, 2.784, -0.06947685, 3.93555895, 2.71404473, 9.00558548, 2.09209263, 3.02171711
];

var GDPcap=[
40718.78167, 42118.46375, 38809.66436, 39069.91407, 15106.73205, 25956.76492, 40169.83173, 22403.02459, 37577.71225, 34147.98907, 39389.25874, 26878.00015, 21731.55484, 35641.55402, 40457.94273, 28595.68799, 32580.06572, 33751.23348, 29101.34563, 86226.3276, 15200.22119, 43455.30129, 29870.67748, 57230.89, 19882.99226, 25425.59561, 19833, 24429.61828, 27559.75186, 10497.583, 32779.3288, 41526.2995, 46621.77334, 15666.18783, 35715.4691, 46587.61843
];

var population=[22319.07, 8427.318, 10590.44, 33909.7, 17248.45, 10286.3, 5495.246, 1335.347, 5366.482, 62747.78, 82852.47, 11312.16, 9993.116, 308.038, 4394.382, 7623.6, 59059.66, 126912.8, 48988.83, 483.701, 109219.9, 16480.79, 4291.9, 4789.628, 37725.21, 10684.97, 142822.5, 5404.493, 2029.418, 50384.55, 44835.48, 9276.365, 7889.345, 73497, 62761.35, 313232
];

var country=["Australia", "Austria", "Belgium", "Canada", "Chile", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Israel", "Italy", "Japan", "Korea", "Luxembourg", "Mexico", "Netherlands", "New Zealand", "Norway", "Poland", "Portugal", "Russian Federation", "Slovak Republic", "Slovenia", "South Africa", "Spain", "Sweden", "Switzerland", "Turkey", "United Kingdom", "United States"
];

var continent=["Oceania", "Europe", "Europe", "America", "America", "Europe", "Europe", "Europe", "Europe", "Europe", "Europe", "Europe", "Europe", "Europe", "Europe", "Asia", "Europe", "Asia", "Asia", "Europe", "America", "Europe", "Oceania", "Europe", "Europe", "Europe", "Europe", "Europe", "Europe", "Africa", "Europe", "Europe", "Europe", "Europe", "Europe", "America"
];


svg.selectAll("circle").data(country).enter()
  .append("circle")
  
  .attr("cx",function(d,i) {return x(GERD[i]);})
  .attr("cy",function(d,i) {return y(growth[i]);}) 
  .attr("r", 25)
  .style("fill",function(d,i) {return c(continent[i]);})
  .style("opacity",function(d,i) {return o(GDPcap[i]);})
 
    .append("title")
    .text(String)

    
    
    
    
    
        
/*var centrex = 500;
var centrey = 500;
var espace = 100;
var angle,Nx,Ny,angleP,x,y;
var radPool,radPoolenfant;

circleRadii = [30,70,110]

var svgContainer = d3.select("#viz").append("svg")
.attr("width", 1000)
.attr("height", 1000);
 
var circles = svgContainer.selectAll("circle")
.data(data)
.enter()
.append("circle")

angleP = 360/data.length;
var pool_i = 0;
angle = angleP*(function (d) { return data_i++; });
var radPool = angle * Math.PI / 180;
var x,y;
x = Math.cos(radPool) * espace + centrex;		  				    			  		 
y = Math.sin(radPool) * espace + centrey;
			
			
var circleAttributes = circles
.attr("cx", x)
.attr("cy", y)
.attr("r", 25)
.style("fill", 'green') ;

*/



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
			var radPool = angle * Math.PI / 180;
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