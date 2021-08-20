let im1;
function preload() {
  im1 = loadImage("anime.jpeg");
}

function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background(im1);
  translate(width / 2, height / 2);

  rotate(-90);
  let sc = second();
  let mn = minute();
  let hr = hour();
  noFill();
  stroke("ffffff");

  push();
  let secondAngle = map(sc, 0, 60, 0, 360);
  strokeWeight(8);
  stroke("#3a0ca3");
  arc(0, 0, 300, 300, 0, secondAngle);
  pop();

  push();
  stroke("red");
  rotate(secondAngle);
  strokeWeight(5);
  line(0, 0, 125, 0);
  pop();
  push();

  let minuteAngle = map(mn, 0, 60, 0, 360) + map(sc, 0, 60, 0, 6);
  strokeWeight(8);
  stroke("#f72585");
  arc(0, 0, 280, 280, 0, minuteAngle);
  pop();

  push();
  stroke("purple");
  rotate(minuteAngle);
  strokeWeight(5);
  line(0, 0, 90, 0);
  pop();

  push();
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  strokeWeight(8);
  stroke("#00b4d8");
  arc(0, 0, 260, 260, 0, hourAngle);
  pop();

  push();
  stroke("blue");
  rotate(hourAngle);
  strokeWeight(5);
  line(0, 0, 100, 0);
  pop();

  push();
  strokeWeight(8);
  stroke("pink");
  point(0, 0);
  pop();

  push();
  rotate(90);
  stroke("black");
  text("12", 0, -180);
  stroke("red");
  text("3", 180, 0);
  stroke("black");
  text("6", 0, 180);
  stroke("red");
  text("9", -180, 0);
  pop();

  push();
  rotate(90);
  stroke("BLACK");
  text("SUKUNA", -100, 100);
  pop();
}
