function setup() {
	// create a place to draw
	createCanvas(640, 360);

}

function draw() {
	// clear the background
	background(150, 150, 150);

	// set a fill color
	fill(286, 286, 286);

	// draw the rect
	fill (0);
	rect(30, 20, 170, 355);



stroke(255,0,0);
strokeWeight(30);
if (mouseX > 50)
    mouseY = 50;
line(mouseX - 50, mouseY - 50, mouseX + 50, mouseY + 50);
line(mouseX - 50, mouseY + 50, mouseX + 50, mouseY - 50);
}
