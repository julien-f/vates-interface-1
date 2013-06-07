// canvas dimensions
var width = 1000;
var height = 1000;
// Variables.
var centrex = 500;
var centrey = 500;
var espace = 100;
var angle, Nx, Ny, angleP, x, y;
// Make an instance of two and place it on the page.
var params = { width: 1000, height: 1000 };
var two = new Two(params).appendTo(document.body);

for (var i = 0, n = data.length; i < n; ++i)
{
	angleP = 2 * Math.PI / n;
	angle = angleP*i;
	x = Math.cos(angle) * espace + centrex;
	y = Math.sin(angle) * espace + centrey;
	//convenience methods to create shapes.

	var circle = two.makeCircle(x, y, 25);
	// The object returned has many stylable properties:
	circle.fill = 'green';
	circle.stroke = 'gray'; // Accepts all valid css color
	circle.linewidth = 1;

	for (var j = 0, m = data[i].hosts ? data[i].hosts.length : 0; j < m; ++j)
	{
		angleH = angleP/m * j - angleP/2 + angleP*i;
		Nx = Math.cos(angleH) * espace * 1.5 + x;
		Ny = Math.sin(angleH) * espace * 1.5 + y;

		// Pool-host link.
		var line = two.makeLine(x,y,Nx,Ny);
		// The object returned has many stylable properties:
		line.fill='black';
		linewidth=1;

		// Host.
		//convenience methods to create shapes.
		var circle = two.makeCircle(Nx, Ny, 25);
		// The object returned has many stylable properties:
		circle.fill = 'blue';
		circle.stroke = 'gray'; // Accepts all valid css color
		circle.linewidth = 1;
	}
}
