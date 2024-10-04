let sketchFramebuffer;
let font;
let wineDescriptions = [];
let computerSciences = [];
let usedWineDescriptions = [];
let usedComputerSciences = [];
let words = "THREE FOUR";
let targetWidth;
let overlayGraphics; // 2D overlay

// Variables for random neon colors
let color1, color2;

function preload() {
  //preloading fonts
  font = loadFont('Staatliches-Regular.ttf');
//preloading json data
  let wineData = loadJSON('wine_descriptions.json', onWineLoad, onLoadError);
  let computerScienceData = loadJSON('computer_sciences.json', onCSLoad, onLoadError);
}

function setup() {
  //have to turn on webGL for asciify plugin
  createCanvas(windowWidth, windowHeight, WEBGL); 
  targetWidth = width * 0.75;

  //for the 2D overlay
  overlayGraphics = createGraphics(windowWidth, windowHeight); 

  //picks random colors for the ascii
  color1 = color(randomWarmNeonColor());
  color2 = color(randomCoolNeonColor());

  //this is intended to "enclose" the asciify section so that it's possible to have elements that are not asciified, but i was not actually able to get this to work
  sketchFramebuffer = createFramebuffer({ format: FLOAT });

  //this is the asciify plugin/library stuff
  setAsciiOptions({
    common: {
      fontSize: 8,
    },
    brightness: {
      enabled: true,
      characters: " .:-=+*#%@",
      characterColor: "#ff0000",
      characterColorMode: 0,
      backgroundColor: "#000000",
      backgroundColorMode: 1,
      invertMode: true,
    },
    edge: {
      enabled: true,
      characters: "-/|\\-/|\\",
      characterColor: '#ffffff',
      characterColorMode: 1,
      backgroundColor: '#000000',
      backgroundColorMode: 1,
      invertMode: false,
      rotationAngle: 0,
      sobelThreshold: 0.15,
      sampleThreshold: 16,
    }
  });

  //calls the pickRandomLines function
  pickRandomLines();
}

function draw() {
  //again, this sketchframe buffer is supposed to isolate the asciify effect, but does not actually seem to work
  sketchFramebuffer.begin();

  background(0);
  
  //this is the ascii text rotation
  rotateX(radians(frameCount * -5));
  directionalLight(255, 255, 255, 0, 0, -1);

  //calls the font from preload
  textFont(font);
  textAlign(CENTER, CENTER);

  //this makes sure the words are stacked, with one word per line
  let lines = words.split(' ');

  //adjusts size of text to make sure it always fits onscreen
  adjustTextSize(lines);

  //calculates the total height of the text block and sets line height based on text size
  let lineHeight = textSize() + 20; 
//give total height of all lines
  let totalTextHeight = lineHeight * lines.length; 

  //this renders each word on a new line with the color effect
  for (let i = 0; i < lines.length; i++) {
    //applies the front color (color1) and back color (color2) to give the two-tone effect
    push();
    //back color
    fill(color2); 
    // moves back color text back in z space and offsets on the y axis
    translate(0, -4, -10); 
    //moved text slightly lower onscreen
    text(lines[i], 0, -totalTextHeight / 2 + i * lineHeight + 50);
    pop();
//front color
    fill(color1); 
    //moved text slightly lower onscreen
    text(lines[i], 0, -totalTextHeight / 2 + i * lineHeight + 50); 
  }
//ends non-working sketchFramebuffer
  sketchFramebuffer.end();

  //displays the non-working framebuffer on the canvas
  image(sketchFramebuffer, -windowWidth / 2, -windowHeight / 2);

  //this draws the overlay graphics to "generate another"
  overlayGraphics.clear();
  overlayGraphics.textFont('Arial Black');
  overlayGraphics.textSize(80);
  overlayGraphics.fill(255); // White color
  overlayGraphics.textAlign(CENTER, CENTER);
  overlayGraphics.text("(Click to generate another)", overlayGraphics.width / 2, overlayGraphics.height - 50); // Position the text
  
  //i was unable to get this to work, but this was supposed to make the overlay text non-asciified
  image(overlayGraphics, -windowWidth / 2, -windowHeight / 2);
}

function adjustTextSize(lines) {
  //sets starting font size
  let currentFontSize = 400;
  textSize(currentFontSize);

  //adjust based on the longest word in the lines
  let longestWord = lines.reduce((a, b) => (textWidth(a) > textWidth(b) ? a : b), '');
  
  //if the longest word is larger than 75% of the window width, reduce the font size
  while (textWidth(longestWord) > targetWidth) {
    currentFontSize--;
    textSize(currentFontSize);
  }

  //if the longest word is smaller than 75%, ensure it doesn't shrink too much
  while (textWidth(longestWord) < targetWidth * 0.75 && currentFontSize < 400) {
    currentFontSize++;
    textSize(currentFontSize);
  }

  //overall font multiplier/reducer for sizing
  currentFontSize *= .9;
  textSize(currentFontSize);
}

//function to get a random warm neon color
function randomWarmNeonColor() {
  const warmNeonColors = [
    '#ff073a', // neon red
    '#ff1493', // neon pink
    '#ff4500', // neon orange
    '#fffb00'  //neon yellow
  ];
  return random(warmNeonColors);
}

//function to get a random cool neon color 
function randomCoolNeonColor() {
  const coolNeonColors = [
    '#0ff',    // neon blue
    '#39ff14', // neon green
    '#8a2be2', // neon purple
    '#7df9ff'  // neon sky blue
  ];
  return random(coolNeonColors);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  overlayGraphics.resizeCanvas(windowWidth, windowHeight); 
}

//picks random lines from the wine description json and sets aside the one used
function pickRandomLines() {
  if (wineDescriptions.length > 0 && computerSciences.length > 0) {
    //if all have been used, reset the list
    if (usedWineDescriptions.length === wineDescriptions.length) {
      usedWineDescriptions = [];
    }
    
    let wineLine;
    do {
      wineLine = random(wineDescriptions);
    } while (usedWineDescriptions.includes(wineLine));
    
    usedWineDescriptions.push(wineLine);

    //picks the next CS line, and if all are used, reshuffle and reset the array
    if (usedComputerSciences.length === computerSciences.length) {
      usedComputerSciences = []; 
    }
    
    let csLine;
    do {
      csLine = random(computerSciences);
    } while (usedComputerSciences.includes(csLine));
    
    usedComputerSciences.push(csLine);

    //makes the actual random word combination from the two json files
    words = `${wineLine} ${csLine}`;
  } else {
    console.error("Data arrays are not loaded properly.");
  }
}

//this pulls the json data for the wine descriptions
function onWineLoad(data) {
  wineDescriptions = data.wine_descriptions;
  console.log('Wine descriptions loaded:', wineDescriptions);
}
//this pulls the json data for the computer terms
function onCSLoad(data) {
  computerSciences = data.computer_sciences;
  console.log('Computer sciences loaded:', computerSciences);
}

function onLoadError(err) {
  console.error("Error loading JSON file:", err);
}

//makes it so there is a new word combo generation when you click the mouse
function mousePressed() {
  pickRandomLines();
  frameCount = 0; // Reset rotation
  color1 = color(randomWarmNeonColor()); // Randomize front color
  color2 = color(randomCoolNeonColor()); // Randomize back color
}
