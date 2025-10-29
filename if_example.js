function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Check if the mouse is on the right side
  if (mouseX > width / 2) {
    fill("orange");   // right side → orange
  } else {
    fill("skyblue");  // left side → blue
  }

  // Draw the circle in the center
  circle(width / 2, height / 2, 100);
}
