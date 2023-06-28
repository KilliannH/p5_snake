let playerX = 340;
let playerY = 180;
let direction = null; // left, right, up, down

const speed = 5;
const fr = 20;

function setup() {
    // Create the canvas
  createCanvas(720, 400);
  frameRate(fr)
}

function draw() {
  background(200);
  fill(40, 40, 40)
  stroke(40, 40, 40)
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