let playerX = 340;
let playerY = 180;

function setup() {
    // Create the canvas
  createCanvas(720, 400);
  frameRate(20)
}

function draw() {
  background(200);
  fill(40, 40, 40)
  stroke(40, 40, 40)
  rect(playerX, playerY, 20, 20);

  // works for one key pressed at time
  if(keyIsPressed) {
    switch (key) {
      case "ArrowLeft":
        console.log("left pressed");
        playerX -=10;
        break;
      case "ArrowRight":
        console.log("right pressed");
        playerX +=10;
        break;
      case "ArrowUp":
        console.log("up pressed");
        playerY -=10;
        break;
      case "ArrowDown":
        console.log("down pressed");
        playerY +=10;
        break;
    }
  }
}