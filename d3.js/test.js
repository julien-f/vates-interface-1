// Variables.
var centrex = 500;
var centrey = 500;
var espace = 100;
var angle, Nx, Ny, angleP, x, y;
var radPool, radPoolenfant;

var sampleSVG = d3.select("#viz")
	.append("svg")
	.attr("width", 1000)
	.attr("height", 1000);


for (var i = 0, n = data.length; i < n; ++i)
{
	angleP = 360 / n;
	angle = angleP*i;
	var radPool = angle * Math.PI / 180;
	x = Math.cos(radPool) * espace + centrex;
	y = Math.sin(radPool) * espace + centrey;

	// Pool.
	sampleSVG.append("circle")
		.style("stroke", "gray")
		.style("fill", "green")
		.attr("r", 25)
		.attr("cx", x)
		.attr("cy", y);

	for (var j = 0, m = data[i].hosts ? data[i].hosts.length : 0; j < m; ++j)
	{
		angleH = angleP/m *j - angleP/2 + angleP*i;
		radPoolenfant = angleH * Math.PI / 180;
		Nx = Math.cos(radPoolenfant) * espace * 1.5 + x;
		Ny = Math.sin(radPoolenfant) * espace * 1.5 + y;

		// Pool-host link.
		sampleSVG.append("line")
			.style("stroke", "black")
			.attr("x1",x )
			.attr("y1",y)
			.attr("x2",Nx)
			.attr("y2", Ny);

		// Host.
		sampleSVG.append("circle")
			.style("stroke", "gray")
			.style("fill", "blue")
			.attr("r", 25)
			.attr("cx", Nx)
			.attr("cy", Ny);
	}
}
