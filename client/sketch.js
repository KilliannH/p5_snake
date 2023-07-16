let playerX = 340;
let playerY = 180;
let direction = null; // left, right, up, down

let defaultPlayerColor = {r: 40, g: 40, b: 40};

const fr = 6;

const nbHorizontal = 36;
const nbVertical = 20;

const cells = [];

const snakeBody = [];

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

  snakeBody.push({x: playerPos.x, y: playerPos.y});
  genFruit();
  
  console.log(fruitPos);
  console.log(cells);
}

function draw() {
  const fruitTouched = fruitIsTouched();

  if(fruitTouched) {
    snakeBody.push({x: playerPos.x, y: playerPos.y});
    genFruit();
  }

  for(let i = 0; i < nbHorizontal; i++) {
    for(let j = 0; j < nbVertical; j++) {
      cells[i][j].color = {r: 200, g: 200, b: 200};  
    }
  }

  // body of snake will grow
  for (let i = snakeBody.length - 1; i > 0; i--) {
    // it will store previous part of snake to the current part
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = {x: playerPos.x, y: playerPos.y};
  }

  console.log(snakeBody);

  for(let i = 0; i < snakeBody.length; i++) {
    cells[snakeBody[i].x][snakeBody[i].y].color = defaultPlayerColor;  
  }

  cells[playerPos.x][playerPos.y].color = defaultPlayerColor;
  cells[fruitPos.x][fruitPos.y].color = {r: 0, g: 0, b: 200};

  for(let i = 0; i < nbHorizontal; i++) {
    for(let j = 0; j < nbVertical; j++) {
      cells[i][j].draw();  
    }
  }

  switch (direction) {
    case "left":
      if(playerPos.x > 0) {
        playerPos.x--;
      } else {
        playerPos.x = nbHorizontal -1;
      }
      break;
    case "right":
      if(playerPos.x < nbHorizontal -1) {
        playerPos.x++;
      } else {
        playerPos.x = 0;
      }
      break;
    case "up":
      if(playerPos.y > 0) {
        playerPos.y--;
      } else {
        playerPos.y = nbVertical -1;
      }
      break;
    case "down":
      if(playerPos.y < nbVertical -1) {
        playerPos.y++;
      } else {
        playerPos.y = 0;
      }
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

  if (playerPos.x + 3 > nbHorizontal) {

  }

  let posX1 = randomIntFromInterval(playerPos.x +3, nbHorizontal -1);
  let posX2 = randomIntFromInterval(0, playerPos.x -3);

  let posY1 = randomIntFromInterval(playerPos.y +3, nbVertical -1);
  let posY2 = randomIntFromInterval(0, playerPos.y -3);

  let posX, posY;
  let randFloor = randomFloor();
  posX = randFloor === 1 ? posX1 : posX2;

  randFloor = randomFloor();
  posY = randFloor === 1 ? posY1 : posY2;

  // check for boundaries
  if (playerPos.x + 3 > nbHorizontal) {
   posX = posX2; 
  } else if (playerPos.x -3 < 0) {
    posX = posX1;
  }

  if(playerPos.y + 3 > nbVertical) {
    posY = posY2;
  } else if (playerPos.y -3 < 0) {
    posY = posY1;
  }

  if(posX === 0) {
    posX = 1;
  }
  
  if(posY === 0) {
    posY = 1;
  }

  fruitPos.x = posX;
  fruitPos.y = posY;
}

function fruitIsTouched() {
  return playerPos.x === fruitPos.x && playerPos.y === fruitPos.y;
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomFloor() {
  let rand = Math.random();
  return rand >= 0.4999995 ? 1 : 0;
}