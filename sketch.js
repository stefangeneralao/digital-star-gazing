var dots = [];
var initialDotSpeed = 3;
var gravityStrength = 25;
var maxDistance = 250;
var nrOfDots = 18;
var maxNeighbors = 3;
var gravityCenter = true;

var middle;

function setup() {
	createCanvas(windowWidth, windowHeight);
	middle = createVector(width / 2, height / 2);

	// Create dots.
	for(var i = 0; i < nrOfDots; i++){
		dots.push(new Dot(random(width * 0.3, width * 0.7), random(height * 0.2, height * 0.8)));
		//dots.push(new Dot(random(width * 0.2, width * 0.8), height * 0.4));
	}

	frameRate(50);
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
