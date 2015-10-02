var ballX = 0;
var ballY = 0;

function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();

}

function draw() {
	// clear the background
	background(81, 11, 11);

	// set a fill color
	fill(255, 255, 255);


	// draw the ellipse
	ellipse (mouseX, mouseY, 50, 50);
if (mouseIsPressed === false ){
	ballX = mouseX;
	ballY = mouseY;
//down
	// set a fill color
	fill(9, 49, 214);
} else {
	//up
	// draw the blue ellipse
	ellipse(mouseX, mouseY, 30, 30);
	ellipse(mouseX, mouseY, 50,50);
ballX = mouseX;
ballY = mouseY;

}


}
