var p;

function setup() {
 createCanvas(640, 360);

 p = new Pendulum(createVector(width/2,0),175);
}

function draw(){
	background(51);
	p.go();
}

function mousePressed(){
	p.clicked(mouseX,mouseY);
}

function mouseReleased(){
	p.stopDragging();
}