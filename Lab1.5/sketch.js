//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 255);
  fill(0, 0, 0);
}

//  The draw function is called @ 30 fps
function draw() {
  rectMode(center);
  fill(0,200,0);
  rect(1920,1080,1920,1080)
}
