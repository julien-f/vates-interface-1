bonsai.run(document.getElementById('test'), {
	'code': function() {
		// Variables.
		var data = stage.options.data;
		var centrex = 500;
		var centrey = 500;
		var espace = 100;
		var angle, Nx, Ny, angleP, x, y;

		// Draw the pools.
		for (var i = 0, n = data.length; i < n; ++i)
		{
			angleP = 2 * Math.PI / n;
			angle = angleP*i;
			x = Math.cos(angle) * espace + centrex;
			y = Math.sin(angle) * espace + centrey;

			// Pool.
			new Circle(x, y, 25)
				.addTo(stage)
				.attr('fillColor', 'green')
				.stroke('gray', 1);

			// For each pool, draw its hosts.
			for (var j = 0, m = data[i].hosts ? data[i].hosts.length : 0; j < m; ++j)
			{
				angleH = angleP/m * j - angleP/2 + angleP*i;
				Nx = Math.cos(angleH) * espace * 1.5 + x;
				Ny = Math.sin(angleH) * espace * 1.5 + y;

				// Pool-host link.
				new Path([ x, y,Nx, Ny ]).addTo(stage).stroke('black',1);

				// Host.
				new Circle(Nx, Ny, 25)
					.addTo(stage)
					.attr('fillColor','blue')
					.stroke('gray', 1);
			}
		}
	},
	'width': 1000,
	'height': 1000,
	'data': data,
});
