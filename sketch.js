const WIDTH=500, HEIGHT=500;
const HF = 1.3;

let num1E, num2E, title, input;
let num1=0, num2=0;
let nextTime = 0;

function setup() {
  createCanvas(WIDTH, HEIGHT);

  title = createElement('h1', 'Let\'s Do Some Math!');
  title.position(0, 0);
  title.style('color', '#FFFFFF');
  num1E = createElement('h2', num1+'');
  num1E.position(WIDTH/2-WIDTH/4-num1E.height/2, (HEIGHT/2)/HF);
  num1E.style('color', '#FFFFFF');
  num2E = createElement('h2', num2+'');
  num2E.position(WIDTH/2+WIDTH/4-num2E.height/2, (HEIGHT/2)/HF);
  num2E.style('color', '#FFFFFF');
  input = createInput();
  input.position(WIDTH/2-input.width/2, HF*HEIGHT/2);

  console.log(title);
  // console.log(num1E);
  // console.log(num2E);
  // console.log(input);

  background(0);
  generateNumbers();
}

function draw() {
  let curVal = input.value();
  if (int(curVal) == num1*num2) {
    input.value('');
    generateNumbers();
    showTitle(1500);
  }
  updateTitle();
}

function generateNumbers() {
  num1 = int(random(9))+1;
  num2 = int(random(9))+1;
  num1E.html(''+num1);
  num2E.html(''+num2);
}

function showTitle(time) {
  nextTime = millis() + time;
  title.style('color', '#00FF00');
  title.html('Correct!');
}

function updateTitle() {
  if (millis() > nextTime) {
    title.html('Let\'s Do Some Math!');
    title.style('color', '#FFFFFF');
  }
}
