function setup() {
  // Create the canvas
  var myCanvas =  createCanvas(720, 400);
  myCanvas.parent("divCanvas");

  // Set angle mode to degrees
  angleMode(DEGREES);

  // Set text color, size, and alignment
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);

  // Set the color mode to hue-saturation-brightness (HSB)
  colorMode(HSB);

  // Create screen reader accessible description
  describe('line segments rotated around center of canvas');
}


function draw() {
  // Clear the background
  background(0);

  // Loop through angles 0, 30, 60, 90 degrees
  for (let angle=0; angle <= 90; angle += 30) {
      // Save current coordinate system
      push();                       

      // Translate to center of canvas and rotate by angle
      translate(width/2, height/2);
      rotate(angle);

      // Set color based on angle and draw line along x-axis
      stroke(angle+100, 100, 100);
      strokeWeight(5);
      line(0, 0, 150, 0);

      // Display the angle
      strokeWeight(1);              
      text(angle, 170, 0);

      // Restore coordinate system
      pop();                        
  }

  // Draw the animated line
  translate(width/2, height/2);
  rotate(frameCount);
  stroke(255);
  strokeWeight(5);
  line(0, 0, 150, 0);
}

function setup() {
  createCanvas(710, 400, WEBGL);
  angleMode(DEGREES);
  strokeWeight(5);
  noFill();
  stroke(32, 8, 64);
  describe(
    'Users can click on the screen and drag to adjust their perspective in 3D space. The space contains a sphere of dark purple cubes on a light pink background.'
  );
}

function draw() {
  background(250, 180, 200);

  // Call every frame to adjust camera based on mouse/touch
  orbitControl();

  // Rotate rings in a half circle to create a sphere of cubes
  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
    // Rotate cubes in a full circle to create a ring of cubes
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      push();

      // Rotate from center of sphere
      rotateZ(zAngle);
      rotateX(xAngle);

      // Then translate down 400 units
      translate(0, 400, 0);
      box();
      pop();
    }
  }
}