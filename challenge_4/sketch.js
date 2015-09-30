// draw an ellipse
var xPositions = [];
var yPositions = [];

function setup() {
	createCanvas(640, 480);
	for (var i = 0; i < 10; i++){
		xPositions[i] = random(0, 640);
		yPositions[i] = random(0, 480);

	}
}

function draw() {
	background(249, 0, 0);

	for (var i = 0; i < 10; i++){
		xPositions[i] = xPositions[i] + random(-5, 5);
		yPositions[i] = yPositions[i] + random(-5, 5);

		ellipse(xPositions[i], yPositions[i], random(20, 30), random(20, 30));
	}
}
