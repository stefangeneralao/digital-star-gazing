var dots = [];
var initialDotSpeed = 0.1;
var gravityStrength = 10;
var maxDistance = 500;
var nrOfDots = 25;
var maxNeighbors = 10;
var gravityCenter = true;

var middle;

function setup() {
	createCanvas(windowWidth, windowHeight);
	middle = createVector(width / 2, height / 2);

	// Create dots.
	for(var i = 0; i < nrOfDots; i++){
		// dots.push(new Dot(random(width), random(height)));
		dots.push(new Dot(random(width * 0.2, width * 0.8), height * 0.4));
	}
}

function draw() {
	background(0, 127);
	handleNeighbors();
	// showDots();
	moveDots();
}

function moveDots(){
	// Move every dot.
	for(i in dots){
		dots[i].move();
	}
}

function showDots(){
	// Show every dot.
	for(i in dots){
		dots[i].show();
	}
}

function handleNeighbors(){
	// Every dot...
	for(i in dots){
		// ...Finds neighbors.
		var neighbors = [];
		for(j in dots){
			if(dots[i].getDistance(dots[j]) < maxDistance){
				neighbors.push(dots[j]);
			}

			if(neighbors.length > maxNeighbors){
				break;
			}
		}

		// Draw line between this and every neighbor.
		for(j in neighbors){
			dots[i].drawLineTo(neighbors[j]);
		}
	}
}
