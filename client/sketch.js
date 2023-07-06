let playerX = 340;
let playerY = 180;
let direction = null; // left, right, up, down

let defaultPlayerColor = {r: 40, g: 40, b: 40};

const fr = 6;

const nbHorizontal = 36;
const nbVertical = 20;

const cells = [];
let playerPos = {x: null, y: null};
let fruitPos = {x: null, y: null};

function setup() {
  // Create the canvas
  background(200);
  frameRate(fr);
  createCanvas(720, 400);

  for(let i = 0; i < nbHorizontal; i++) {
    cells[i] = [];
    for(let j = 0; j < nbVertical; j++) {
      cells[i].push(new Cell(i * 20, j * 20, {r: 200, g: 200, b: 200}))
    }
  }

  playerPos.x = nbHorizontal / 2 - 1;
  playerPos.y = nbVertical / 2 - 1;

  genFruit();
  console.log(fruitPos);
  console.log(cells);
}

function draw() {

  for(let i = 0; i < nbHorizontal; i++) {
    for(let j = 0; j < nbVertical; j++) {
      cells[i][j].color = {r: 200, g: 200, b: 200};  
    }
  }

  cells[playerPos.x][playerPos.y].color = defaultPlayerColor;

  // -1 bcse index 20 doesnt exists, same for index 36
  cells[fruitPos.x -1][fruitPos.y -1].color = {r: 0, g: 0, b: 200};

  for(let i = 0; i < nbHorizontal; i++) {
    for(let j = 0; j < nbVertical; j++) {
      cells[i][j].draw();  
    }
  }

  switch (direction) {
    case "left":
      playerPos.x--;
      break;
    case "right":
      playerPos.x++;
      break;
    case "up":
      playerPos.y--;
      break;
    case "down":
      playerPos.y++;
      break;
  }
}

function keyPressed() {
  switch (key) {
    case "ArrowLeft":
      direction = "left";
      break;
    case "ArrowRight":
      direction = "right";
      break;
    case "ArrowUp":
      direction = "up";
      break;
    case "ArrowDown":
      direction = "down";
      break;
    }
}

function genFruit() {
  let posX1 = randomIntFromInterval(playerPos.x +3, nbHorizontal);
  let posX2 = randomIntFromInterval(0, playerPos.x -3);

  let posY1 = randomIntFromInterval(playerPos.y +3, nbVertical);
  let posY2 = randomIntFromInterval(0, playerPos.y -3);

  let posX, posY;
  let randFloor = randomFloor();
  posX = randFloor === 1 ? posX1 : posX2;

  randFloor = randomFloor();
  posY = randFloor === 1 ? posY1 : posY2;

  if(posX === 0) {
    posX = 1;
  }
  
  if(posY === 0) {
    posY = 1;
  }

  fruitPos.x = posX;
  fruitPos.y = posY;

  // TODO -- handle case x + 3 or y + 3 is out of bounds.
  // reroll
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomFloor() {
  let rand = Math.random();
  return rand >= 0.4999995 ? 1 : 0;
}