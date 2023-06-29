let playerX = 340;
let playerY = 180;
let direction = null; // left, right, up, down

let fruitX1 = randomIntFromInterval(0, 300);
let fruitX2 = randomIntFromInterval(400, 700);
let fruitY1 = randomIntFromInterval(200, 380);
let fruitY2 = randomIntFromInterval(20, 160);

let fruitX, fruitY;

let defaultPlayerColor = {r: 40, g: 40, b: 40};
let touchedPlayerColor = {r: 255, g: 0, b: 0}
let playerColor = defaultPlayerColor;

const speed = 3;
const fr = 20;

function setup() {
    // Create the canvas
  createCanvas(720, 400);
  frameRate(fr)

  fruitX = random2values() == 0 ? fruitX1 : fruitX2;
  fruitY = random2values() == 0 ? fruitY1 : fruitY2;

  console.log(fruitX, fruitY);
}

function draw() {
  background(200);
  fill(playerColor.r, playerColor.g, playerColor.b)
  stroke(playerColor.r, playerColor.g, playerColor.b)
  rect(playerX, playerY, 20, 20);
  if(direction != null) {
    switch (direction) {
      case "left": {
        if(playerX > 0) {
          playerX -= speed;
        } else {
          playerX = 720;
        }
        break;
      }
      case "right": {
        if(playerX < 700) { // bcse of the player size, so canvas boundaries - player size
          playerX += speed;  
        } else {
          playerX = 0;
        }
        break;
      }
      case "up": {
        if(playerY > 0) {
          playerY -= speed;  
        } else {
          playerY = 380 // same
        }
        break;
      }
      case "down": {
        if(playerY < 380) { // same
        playerY += speed;
        } else {
          playerY = 0;
        }
        break;
      }
    }
  }

  // draw fruit
  fill(160, 32, 240)
  stroke(160, 32, 240)
  rect(fruitX, fruitY, 20, 20);


  // handle x colider
  if(playerX + 20 >= fruitX && playerX <= fruitX + 20 && playerY + 20 >= fruitY && playerY <= fruitY + 20) {
    playerColor = touchedPlayerColor;
  } else {
    playerColor = defaultPlayerColor;
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

function random2values() {
  let rand = Math.random();
  return rand >= 0.45 ? 1 : 0;
}