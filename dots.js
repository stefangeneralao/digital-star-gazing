function Dot(xpos, ypos){
	if(xpos && ypos){
		this.pos = createVector(xpos, ypos);
	}else{
		this.pos = createVector(width / 2, height / 2);
	}

	this.vel = createVector(speed * random(-1, 1), speed * random(-1, 1));
	this.colorCode = color(random(50, 255), random(50, 255), random(50, 255));
	// this.colorCode = color(255);

	this.show = function(){
		push();
		fill(255, 255);
		noStroke();
		ellipse(this.pos.x, this.pos.y, 2);
		pop();
	}

	this.getDistance = function(other){
		return dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
	}

	// Draws line from this to other.
	this.drawLineTo = function(other){
		push();
		var distance = this.getDistance(other);
		var alpha = map(distance, 0, maxDistance, 255, 0);
		stroke(
			this.colorCode.levels[0],
			this.colorCode.levels[1],
			this.colorCode.levels[2],
			alpha
		);
		line(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
		pop();
	}

	this.move = function(){
		// Move.
		this.pos.add(this.vel);

		// Within borders?
		if(this.pos.x > width + 100 || this.pos.x < 0 - 100){
			this.vel.x = -this.vel.x;
		}
		if(this.pos.y > height + 100 || this.pos.y < 0 - 100){
			this.vel.y = -this.vel.y;
		}
	}
}
