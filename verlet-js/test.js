

	VerletJS.prototype.pool = function(origin ) {
		this.origin = origin;
		var composite = new this.Composite();
		// animates the tree at the beginning
		this.composites.push(composite);
		return composite;
	}


	window.onload = function() {
		var canvas = document.getElementById("scratch");

		// canvas dimensions
		var width = 1000;
		var height = 1000;

		// Variables.
		var centrex = 500;
		var centrey = 500;
		var espace = 100;
		var angle, Nx, Ny, angleP, x, y;


		
		// retina
		var dpr = window.devicePixelRatio || 1;
		canvas.width = width*dpr;
		canvas.height = height*dpr;
		canvas.getContext("2d").scale(dpr, dpr);

		// simulation
		var sim = new VerletJS(width, height, canvas);

		// entities

		var pool = sim.pool(new Vec2(500,500) );
		pool.drawParticles = function(ctx, composite) {
		// Draw the pools.
		
		
		for (var i = 0, n = data.length; i < n; ++i)
		{
			angleP = 2 * Math.PI / n;
			angle = angleP*i;
			x = Math.cos(angle) * espace + centrex;
			y = Math.sin(angle) * espace + centrey;
			
			
			var particle = composite.particles[i];
					ctx.beginPath();
					ctx.arc(x, y, 25, 0, 2*Math.PI);
					ctx.fillStyle = "green";
					ctx.fill();
					
						for (var j = 0, m = data[i].hosts ? data[i].hosts.length : 0; j < m; ++j)
						{
							angleH = angleP/m * j - angleP/2 + angleP*i;
							Nx = Math.cos(angleH) * espace * 1.5 + x;
							Ny = Math.sin(angleH) * espace * 1.5 + y;

							// Pool-host link.
							//new Path([ x, y,Nx, Ny ]).addTo(stage).stroke('black',1);							
							ctx.save();
							ctx.lineCap = "round";	
							ctx.beginPath();							
							ctx.strokeStyle = "black";	
							ctx.moveTo(x, y);
							ctx.lineTo(Nx,Ny);
							ctx.stroke();
							
							// Host.							
								ctx.beginPath();
								ctx.arc(Nx, Ny, 25, 0, 2*Math.PI);
								ctx.fillStyle = "blue";
								ctx.fill();
							
					}
					ctx.restore();
				}
			}
		
		sim.draw();


	};
		
		
		
				
			
