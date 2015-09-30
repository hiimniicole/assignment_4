function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
}

function draw() {
	// clear the background
	background(150, 150, 150);

	// set a fill color
	fill(286, 286, 286);

	// draw the rect
	fill (0);
	rect(30, 20, 170, 355);

	fill(193,12,12);
	ellipse(mouseX, mouseY, 50, 50);
}
