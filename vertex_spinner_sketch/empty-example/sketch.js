let slider;
let sliderVertex;
let sliderAngle;
let rotTime = 0;

// let checkSpin;
let ellipseChecked = true;
let linesChecked = true;

function setup() {
  createCanvas(600, 600);

  // \/3 slider for altering number of lines drawn
  slider = createSlider(1, 100, 20);
  slider.position(10, height - 30); // <- bottom left corner of canvas
  slider.style("width", "120px");
  // ^ .style takes two arguments

  // \/3 vertex offset
  sliderAngle = createSlider(0, 100, 10);
  sliderAngle.position(0.5 * width - 40, height - 30); // <- bottom middle corner of canvas
  sliderAngle.style("width", "80px");

  //# of vertexes
  sliderVertex = createSlider(1, 20, 10);
  sliderVertex.position(width - 100, height - 30); 
  sliderVertex.style("width", "80px");

  //ellipse Button
  ellipseButton = createButton("ellipses");
  ellipseButton.position(width - 160, 10);
  ellipseButton.mousePressed(ellipseCheck);
  
  //ellipse Sizer
  sliderEllipse = createSlider(0,10,3);
  sliderEllipse.position(width - 90, 10);
  sliderEllipse.style("width", "80px");

  //lines Button
  linesButton = createButton("lines");
  linesButton.position(width - 143, 40);
  linesButton.mousePressed(linesCheck);

  //spin speed
  sliderSpin = createSlider(0, 1, 0.1, 0.01);
  sliderSpin.position(10, 30);
  sliderSpin.style("width", "120px");
}

// \/3 this works, but I went for a slider instead.
// function spin() {
//     checkSpin = !checkSpin;
//   }

function ellipseCheck() {
  ellipseChecked = !ellipseChecked;
}

function linesCheck() {
  linesChecked = !linesChecked;
}

function draw() {
  background(0);

  let numOfLines = slider.value();
  let numOfVertexes = sliderVertex.value();
  let vertexOffset = sliderAngle.value();
  
  let ellipseSize = sliderEllipse.value();

  push();
  translate(width / 2, height / 2);

  push();
  rotate(radians(rotTime));
  // print(rotTime);

  for (let i = 0; i < numOfLines; i++) {
    // old line, for test purposes.
    // line(0, 0, 0, -height / 2 - 150);
    // stroke(245, 0, 245);

    beginShape();
    noFill();
    // \/ first vertex at origin
    if (linesChecked) {
    vertex(0, 0);
    }
    strokeWeight(2);

    let rep = 0;
    let breakAccumulator = 0;
    let colorChange = 50;
    let zig;

    let vertexIterator = (-0.5 * height) / (numOfVertexes + 1);

    for (let i = 0; i < numOfVertexes; i++) {
      stroke(0, 100, colorChange);

      if (linesChecked) {
      vertex(
        vertexOffset,
        (-0.5 * height - 0.25 * height) / (numOfVertexes + 1) + rep
      );
      
      let anchorPointX = vertexOffset;
      let anchorPointY = (-0.5 * height - 0.25 * height) / (numOfVertexes + 1) + rep;
        
        
      }

      // ellipse button check
      if (ellipseChecked) {
        ellipse(
          vertexOffset,
          (-0.5 * height - 0.25 * height) / (numOfVertexes + 1) + rep,
          ellipseSize,
          ellipseSize
        );
      }

      // vertexIterator += vertexIterator;

      rep += (-0.5 * height - 0.25 * height) / (numOfVertexes + 1);
      breakAccumulator += breakAccumulator;

      colorChange += 50;

      vertexOffset = -vertexOffset;
    } // <-- end of first for-loop

    // \/3 a little fix for the alternating vertex direction error.
    if (vertexOffset < 0) {
      vertexOffset = -vertexOffset;
    }

    // \/ final vertex, off-screen:
    // vertex(0, - height / 2 - 150);
    vertex(0, -height / 2 - height / 4);

    // \/ ellipse at end of each line.
    // ellipse(0, -height / 2, 10, 10);
    endShape();

    // \/ the rotate function
    rotate(radians(360 / numOfLines));
  } // <-- end of second for loop

  fill(0);
  ellipse(0, 0, 10, 10);
  pop();
  pop();
  noStroke();
  fill(255);
  text("spin speed", 10, 20);
  text("# of lines", 10, height - 40);
  text("vertex offset", 0.5 * width - 40, height - 40);
  text("# of vertexes", width - 100, height - 40);

  let spinVal = sliderSpin.value();

  // if(checkSpin) {
  // rotTime += 0.2; }
  rotTime += spinVal;
}
