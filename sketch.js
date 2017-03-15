var dots = [];
var initialDotSpeed = 0.1;
var gravityStrength = 10;
var maxDistance = 300;
var nrOfDots = 25;
var maxNeighbors = 5;
var gravityCenter = true;

var middle;

function setup() {
	createCanvas(windowWidth, windowHeight);
	middle = createVector(width / 2, height / 2);

	// Create dots.
	for(var i = 0; i < nrOfDots; i++){
		dots.push(new Dot(random(width), random(height)));
		// dots.push(new Dot(width * 0.5, height * 0.25));
	}
}

function draw() {
	background(0, 255);
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
