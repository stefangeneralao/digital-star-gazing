var dots = [];
var speed = 0.3;
var maxDistance = 200;
var nrOfDots = 50;
var maxNeighbors = 20;

var middle;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	middle = createVector(width / 2, height / 2);

	// Create dots.
	for(var i = 0; i < nrOfDots; i++){
		dots.push(new Dot(random(width), random(height)));
	}
}

function draw() {
	background(0, 255);
	handleNeighbors();
	showDots();
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
