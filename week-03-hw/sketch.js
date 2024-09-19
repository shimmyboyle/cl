let wineDescriptions = [];
let computerSciences = [];
let words = "ONE TWO";
let lines = [];
let index = 0;
let typingSpeed = 50;
let lineHeight;
let scrollOffset = 0;
let targetWidth;
let currentFontSize = 100;

function preload() {
  let wineData = loadJSON('wine_descriptions.json', onWineLoad, onLoadError);
  let computerScienceData = loadJSON('computer_sciences.json', onCSLoad, onLoadError);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, TOP);
  textFont('Arial Black');
  textStyle(NORMAL);
  frameRate(60);
  targetWidth = width * 0.75;
  pickRandomLines();
}

function draw() {
  background(255);
  fill(0);
  adjustTextSize(words);
  if ((lines.length + 1) * lineHeight > height) {
    scrollOffset += 2;
  }
  for (let i = 0; i < lines.length; i++) {
    let yPosition = i * lineHeight - scrollOffset;
    text(lines[i], width / 2, yPosition);
  }
  text(words.substring(0, index), width / 2, lines.length * lineHeight - scrollOffset);
  if (frameCount % round(typingSpeed / 16) === 0) {
    if (index < words.length) {
      index++;
    } else {
      lines.push(words);
      index = 0;
    }
  }
}

function adjustTextSize(text) {
  currentFontSize = 100;
  textSize(currentFontSize);
  while (textWidth(text) > targetWidth) {
    currentFontSize--;
    textSize(currentFontSize);
  }
  while (textWidth(text) < targetWidth) {
    currentFontSize++;
    textSize(currentFontSize);
  }
  lineHeight = textSize() + 20;
}

function pickRandomLines() {
  if (wineDescriptions.length > 0 && computerSciences.length > 0) {
    let wineLine = random(wineDescriptions);
    let csLine = random(computerSciences);
    words = `${wineLine} ${csLine}`;
  } else {
    console.error("Data arrays are not loaded properly.");
  }
}

function onWineLoad(data) {
  wineDescriptions = data.wine_descriptions;
  console.log('Wine descriptions loaded:', wineDescriptions);
}

function onCSLoad(data) {
  computerSciences = data.computer_sciences;
  console.log('Computer sciences loaded:', computerSciences);
}

function onLoadError(err) {
  console.error("Error loading JSON file:", err);
}
