function Pendulum(origin_, r_){
	this.r = r_;

	this.angle = PI/4;
	this.aVelocity = 0.0;
	this.aAcceleration = 0.0;
	this.origin = origin_.copy();
	this.position = createVector();
	this.damping = 0.997;
	this.ballRadius = 40.0;

	this.dragging = false;

	this.go = function(){
		this.update();
		this.drag();
		this.display();
	}

	this.update = function(){
		// if we arent' dragging it, let it swing
		if(!this.dragging){

		}
		var gravity = 0.98;
		this.aAcceleration = (-1 * gravity /this.r) * sin(this.angle);
	
		this.aVelocity += this.aAcceleration;
		this.aVelocity *= this.damping;
		this.angle += this.aVelocity;

		
	}

	this.display = function(){
		 // Polar to cartesian conversion
		this.position.set(this.r*sin(this.angle), this.r*cos(this.angle),0);
		// Make sure the position is relative to the pendulum's origin
		this.position.add(this.origin);

		stroke(255);
		strokeWeight(2);

		//draw arm
		line(this.origin.x, this.origin.y, this.position.x, this.position.y);
		ellipseMode(CENTER);
		fill(127);
		if(this.dragging)fill(200);//different color when dragging
		ellipse(this.position.x,this.position.y, this.ballRadius,this.ballRadius);

	}

	this.clicked = function(mx, my){
		console.log('clicked');
		var d = dist(mx,my, this.position.x,this.position.y);
		if(d<this.ballRadius){
			this.dragging=true;
		}
	};

	this.stopDragging = function(){
		console.log('stop dragging');
		this.aVelocity = 0;
		this.dragging = false;
	}

	this.drag = function(){
		console.log('drag');
		if(this.draging){
			var diff = p5.Vector.sub(this.origin, createVector(mouseX,mouseY));
			this.angle = atan2(-1*diff.y,diff.x) - radians(90);
		}
	}
}