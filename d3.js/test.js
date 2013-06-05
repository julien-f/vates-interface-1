// Variables.
var centrex = 500;
var centrey = 500;
var espace = 100;
var angle, Nx, Ny, angleP, x, y;

var sampleSVG = d3.select("#viz")
	.append("svg")
	.attr("width", 1000)
	.attr("height", 1000);


for (var i = 0, n = data.length; i < n; ++i)
{
	angleP = 2 * Math.PI / n;
	angle = angleP*i;
	x = Math.cos(angle) * espace + centrex;
	y = Math.sin(angle) * espace + centrey;

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
		Nx = Math.cos(angleH) * espace * 1.5 + x;
		Ny = Math.sin(angleH) * espace * 1.5 + y;

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
