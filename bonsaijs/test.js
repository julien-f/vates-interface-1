bonsai.run(document.getElementById('test'), {
	'code': function() {
		// Variables.
		var data = stage.options.data;
		var centrex = 500;
		var centrey = 500;
		var espace = 100;
		var angle, Nx, Ny, angleP, x, y;
		var radPool, radPoolenfant;

		// Draw the pools.
		for (var i = 0, n = data.length; i < n; ++i)
		{
			angleP = 360 / n;
			angle = angleP*i;
			var radPool = angle * Math.PI / 180
			x = Math.cos(radPool) * espace + centrex;
			y = Math.sin(radPool) * espace + centrey;

			// Pool.
			new Circle(x, y, 25)
				.addTo(stage)
				.attr('fillColor', 'green');

			// For each pool, draw its hosts.
			for (var j = 0, m = data[i].hosts ? data[i].hosts.length : 0; j < m; ++j)
			{
				angleH = angleP/m * j - angleP/2 + angleP*i;
				radPoolenfant = angleH * Math.PI / 180;
				Nx = Math.cos(radPoolenfant) * espace * 1.5 + x;
				Ny = Math.sin(radPoolenfant) * espace * 1.5 + y;

				// Pool-host link.
				new Path([ x, y,Nx, Ny ]).addTo(stage).stroke('black',1);

				// Host.
				new Circle(Nx, Ny, 25)
					.addTo(stage)
					.attr('fillColor','blue');
			}
		}
	},
	'width': 1000,
	'height': 1000,
	'data': data,
});
