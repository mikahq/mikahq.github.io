let r, g, b;
let circ = 0;
let fr = 10;
let cx, cy;

function setup() {
  let mycanvasobject=createCanvas(400,400);
  mycanvasobject.parent("mycanvasdiv");
  pixelDensity(3.0);
  r = random(255);
  g = random(255);
  b = random(255);
  background(r,g,b);
  frameRate(fr);
}

function draw() {
  background(255);
  circle(mouseX,mouseY,10);
  fill(r,g,b, 127);
  circle(200,200,40);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 55));
  circle(0, 0, 20);
  fill(r,g,b, 127);
  circle(50, 10, 20);

}


function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 200, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }

}




  
  