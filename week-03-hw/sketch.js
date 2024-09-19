let wineDescriptions = []; // To store the loaded wine descriptions
let computerSciences = []; // To store the loaded computer sciences lines
let words = "ONE TWO"; // Placeholder for the text
let lines = []; // Store the completed lines
let index = 0; // To keep track of the current character to display
let typingSpeed = 50; // Time in milliseconds between each character
let lineHeight; // Height of each line
let scrollOffset = 0; // Vertical scroll offset
let targetWidth; // 75% of the canvas width
let currentFontSize = 100; // Starting font size

function preload() {
  // Load JSON files
  let wineData = loadJSON('wine_descriptions.json', onWineLoad, onLoadError);
  let computerScienceData = loadJSON('computer_sciences.json', onCSLoad, onLoadError);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, TOP); // Center text horizontally, align vertically to the top
  textFont('Arial Black'); // Use a heavier sans-serif font
  textStyle(NORMAL); // Remove italic styling
  frameRate(60); // Set frame rate to 60 frames per second
  targetWidth = width * 0.75; // 75% of the canvas width
  
  // Pick random lines to start (only once)
  pickRandomLines();
}

function draw() {
  background(255);
  fill(0);

  // Adjust text size to fit within the target width (75% of the screen)
  adjustTextSize(words);

  // Scroll the lines upward once the bottom is reached
  if ((lines.length + 1) * lineHeight > height) {
    scrollOffset += 2; // Adjust scroll speed as needed
  }

  // Display all previously typed lines, taking scroll offset into account
  for (let i = 0; i < lines.length; i++) {
    let yPosition = i * lineHeight - scrollOffset;
    text(lines[i], width / 2, yPosition);
  }

  // Display the text currently being typed
  text(words.substring(0, index), width / 2, lines.length * lineHeight - scrollOffset);

  // Control the typing speed
  if (frameCount % round(typingSpeed / 16) === 0) {
    if (index < words.length) {
      index++; // Continue typing the current line
    } else {
      // If finished typing the current line, add it to the list of completed lines
      lines.push(words);
      index = 0; // Reset the index to start typing the next line
      
      // No need to pick new random lines here since we want the same words to repeat
    }
  }
}

// Adjust the text size so that it fits within 75% of the screen width
function adjustTextSize(text) {
  currentFontSize = 100; // Reset to a starting font size
  textSize(currentFontSize);
  
  // Decrease font size until the text fits within the target width
  while (textWidth(text) > targetWidth) {
    currentFontSize--;
    textSize(currentFontSize);
  }

  // Increase font size until it fills 75% of the screen width
  while (textWidth(text) < targetWidth) {
    currentFontSize++;
    textSize(currentFontSize);
  }

  // Set line height based on the adjusted font size
  lineHeight = textSize() + 20; // Adjust padding as needed
}

// Function to pick random lines from JSON data
function pickRandomLines() {
  // Check if the arrays are defined and not empty
  if (wineDescriptions.length > 0 && computerSciences.length > 0) {
    // Pick random lines once and store them in the 'words' variable
    let wineLine = random(wineDescriptions); // Pick a random wine description
    let csLine = random(computerSciences); // Pick a random computer science line
    words = `${wineLine} ${csLine}`; // Combine the lines
  } else {
    console.error("Data arrays are not loaded properly.");
  }
}

// Callback for successful loading of wine descriptions
function onWineLoad(data) {
  wineDescriptions = data.wine_descriptions;
  console.log('Wine descriptions loaded:', wineDescriptions);
}

// Callback for successful loading of computer sciences
function onCSLoad(data) {
  computerSciences = data.computer_sciences;
  console.log('Computer sciences loaded:', computerSciences);
}

// Error callback for loading JSON
function onLoadError(err) {
  console.error("Error loading JSON file:", err);
}
