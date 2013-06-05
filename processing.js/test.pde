// Global variables
int X, Y;
int nX, nY;
int i=0 ; 
int d;
int angleP,angleH,x,y;
int centrex, centrey; 
int espace ;

//****************************************** Setup the Processing Canvas

void setup()
{
  size( 1000, 1000 );	
}

//****************************************** Main draw loop

void draw (){	

	// Draw circle
	int Nx, Ny;

	centrex = 500 ;
	centrey = 500 ;
	espace = 100 ;
	// first loop to draw initial pool 
	for (int i = 0, n = data.length; i < n; ++i)
	{
		fill(0,255,0);
		
		angleP = 360/data.length;
		
		x = cos(radians(angleP*i)) * espace + centrex ;		  				    			  		 
		y = sin(radians(angleP*i)) * espace + centrey ;
		
		ellipse(x, y, 50.0, 50.0 ) ;
		
		for (int j = 0, m = data[i].hosts ? data[i].hosts.length : 0; j < m; ++j)
		{
				angleH = angleP/data[i].hosts.length *j - ( angleP / 2 ) + angleP*i ; 
				
				Nx = cos(radians(angleH)) * espace * 1.5 + x ;		  				    			  		 
				Ny = sin(radians(angleH)) * espace * 1.5 + y ;
				
				line (x ,y , Nx, Ny );
				
				fill( 0,0,255 );
				
				ellipse (Nx, Ny, 50.0, 50.0 ) ;
		}
	}
	
	exit(); // for no loop on draw
}