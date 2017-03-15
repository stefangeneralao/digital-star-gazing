function Dot(xpos, ypos){
	if(xpos && ypos){
		this.pos = createVector(xpos, ypos);
	}else{
		this.pos = createVector(width / 2, height / 2);
	}

	// this.vel = createVector(initialDotSpeed * random(-1, 1), initialDotSpeed * random(-1, 1));
	this.vel = createVector(0, initialDotSpeed * 1.5);

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
		if(this.pos != other.pos){
			push();
			var distance = this.getDistance(other);
			var alpha = map(distance, 0, maxDistance, 127, 0);
			stroke(
				this.colorCode.levels[0],
				this.colorCode.levels[1],
				this.colorCode.levels[2],
				alpha
			);
			strokeWeight(2);
			line(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
			pop();
		}
	}

	this.move = function(){
		// Apply gravity.
		if(gravityCenter){
			var force = p5.Vector.sub(middle, this.pos);
			var dsquared = force.magSq();
			dsquared = max(1000, dsquared);
			var strength = gravityStrength / dsquared;
			force.setMag(strength);
			this.vel.add(force);
		}

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
