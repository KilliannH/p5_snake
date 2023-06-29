let playerX = 340;
let playerY = 180;
let direction = null; // left, right, up, down

let defaultPlayerColor = {r: 40, g: 40, b: 40};

const speed = 3;

const nbHorizontal = 36;
const nbVertical = 20;

const cells = [];
let playerIndex;

function setup() {
    // Create the canvas
  createCanvas(720, 400);

  for(let i = 0; i < nbHorizontal; i++) {
    for(let j = 0; j < nbVertical; j++) {
      cells.push(new Cell(i * 20, j * 20, {r: 200, g: 200, b: 200}));  
    }
  }

  console.log(cells);

  playerIndex = cells.findIndex((itm) => {
    return (itm.posX == 720 / 2 - 20 && itm.posY == 400 / 2 - 20);
  });
  cells[playerIndex].color = defaultPlayerColor;
}

function draw() {
  background(200);

  for(let i = 0; i < cells.length; i++) {
    cells[i].draw();
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

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomFloor() {
  let rand = Math.random();
  return rand >= 0.4999995 ? 1 : 0;
}