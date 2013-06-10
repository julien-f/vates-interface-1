
// Configuration générale.
var width  = 1000,
    height = 1000,
    margin = 50 ;
    
// Variables
var centrex = 500;
var centrey = 500;
var espace = 100;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Abscisse des pools.
var cx = function (d, i) {
	var f = d3.scale.linear()
		.domain([0, 1000])
		.range([0, width]);
	var angleP = 2 * Math.PI / data.length;	
	var angle = angleP*i;	
	var x =	Math.cos(angle) * espace + centrey ;
		return f(x);
};

// Ordonnée des pools.
var cy = function (d, i) {
	var f = d3.scale.linear()
		.domain([0, 1000])
		.range([height, 0]);
		
	var angleP = 2 * Math.PI / data.length;
	var angle = angleP*i;
	var y = Math.sin(angle) * espace + centrey ;
	
		
	return f(y);
};

// Abscisse des hosts.
var Ncx = function (d, i) {
	var f = d3.scale.linear()
		.domain([0, 1000])
		.range([0, width]);
	var angleP = 2 * Math.PI / data.length;	
	var angle = angleP*i;	
	var x =	Math.cos(angle) * espace + centrey ;
	
	if (data[i].hosts.length > 0) 
	{
	for (var lol = 0, n = data[i].hosts.length ; lol < n; ++lol)
		{			
			for (var j = 0, m = data[i].hosts ? data[i].hosts.length : 0; j < m; ++j)
			{
				angleH = angleP/m * j - angleP/2 + angleP*i;
				var Nx = Math.sin(angleH) * espace * 1.5 + x;
				return f(Nx);
			}
		}				
	}
};
// Ordonnée des hostss.
var Ncy = function (d, i) {
	var f = d3.scale.linear()
		.domain([0, 1000])
		.range([height, 0]);
		
	var angleP = 2 * Math.PI / data.length;
	var angle = angleP*i;
	var y = Math.sin(angle) * espace + centrey ;

if (data[i].hosts.length > 0) 
	{
	for (var lol = 0, n = data[i].hosts.length ; lol < n; ++lol)
		{
			for (var j = 0, m = data[i].hosts ? data[i].hosts.length : 0; j < m; ++j)
			{
				angleH = angleP/m * j - angleP/2 + angleP*i;
				var Ny = Math.sin(angleH) * espace * 1.5 + y;
				return f(Ny);
			}
		}				
	}

};

//////////////////// Generation des noms des differents cercle.
// Label des pools.
var title = function (d) {
	return d.label;	
};
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Création du graphe.
var svg = d3.select("body").append("svg")
	.attr("width",  width)
	.attr("height",  height);

// Création des cercles des pools.

circlepool = svg.selectAll("circlepool").data(data).enter().append("svg:circle")
	.attr("cx", cx)
	.attr("cy", cy)
	.attr("r",  25)
	.attr("fill","green")
	.attr("stroke","gray")
	.append("svg:title").text(title);

// Création des cercles des pools.

circlehosts = svg.selectAll("circlehosts").data(data).enter().append("svg:circle")
	.attr("cx", Ncx)
	.attr("cy", Ncy)
	.attr("r",  25)
	.attr("fill","blue")
	.attr("stroke","gray")

// Création du graphe.
var svg2 = d3.select("body").append("svg")
	.attr("width",  width)
	.attr("height",  height);
////////////////////////////////////////////////////////////////
