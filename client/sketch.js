let playerX = 340;
let playerY = 180;
let direction = null;

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
          playerX -=speed;
        } else {
          playerX = 720;
        }
        break;
      }
      case "right": {
        if(playerX < 700) {
          playerX +=speed;  
        } else {
          playerX = 0;
        }
        break;
      }
      case "up": {
        if(playerY > 0) {
          playerY -= speed;  
        } else {
          playerY = 380
        }
        break;
      }
      case "down": {
        if(playerY < 380) {
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
      console.log("left pressed");
      direction = "left";
      break;
    case "ArrowRight":
      console.log("right pressed");
      direction = "right";
      break;
    case "ArrowUp":
      console.log("up pressed");
      direction = "up";
      break;
    case "ArrowDown":
      console.log("down pressed");
      direction = "down";
      break;
    }
}