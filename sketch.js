var dots = [];
var speed = 0.2;
var maxDistance = 250;
var nrOfDots = 50;

var middle;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	// Create dots.
	for(var i = 0; i < nrOfDots; i++){
		dots.push(new Dot(random(width), random(height)));
	}

	middle = createVector(width / 2, height / 2);
}

function draw() {
	background(0, 50);

	// Every dot...
	for(i in dots){
		// ...Finds neighbors.
		var neighbors = [];
		for(j in dots){
			if(dots[i].getDistance(dots[j]) < maxDistance){
				neighbors.push(dots[j]);
			}
		}

		// Draw line between this and every neighbor.
		for(j in neighbors){
			dots[i].drawLineTo(neighbors[j]);
		}
	}

	// Show every dot.
	for(i in dots){
		dots[i].show();
	}

	for(i in dots){
		dots[i].move();
	}
}
