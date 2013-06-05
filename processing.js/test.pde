// Global variables
int X, Y;
int nX, nY;
int i = 0;
int d;
int angleP, angleH, x, y;
int centrex, centrey;
int espace;

//****************************************** Setup the Processing Canvas

void setup()
{
	size(1000, 1000);
}

//****************************************** Main draw loop

void draw()
{
	// Draw circle
	int Nx, Ny;

	centrex = 500;
	centrey = 500;
	espace = 100;

	// Draw the pools.
	for (int i = 0, n = data.length; i < n; ++i)
	{
		fill(0, 255, 0);

		angleP = TWO_PI / n;

		x = cos(angleP * i) * espace + centrex;
		y = sin(angleP * i) * espace + centrey;

		// Pool.
		ellipse(x, y, 50.0, 50.0);

		// For each pool, draw its hosts.
		for (int j = 0, m = data[i].hosts ? data[i].hosts.length : 0; j < m; ++j)
		{
			angleH = angleP/m * j - angleP/2 + angleP*i;

			Nx = cos(angleH) * espace * 1.5 + x;
			Ny = sin(angleH) * espace * 1.5 + y;

			line (x ,y , Nx, Ny);

			// Pool-host link.
			fill(0, 0, 255);

			// Host.
			ellipse(Nx, Ny, 50.0, 50.0);
		}
	}

	exit(); // for no loop on draw
}
