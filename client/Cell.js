class Cell {
    posX;
    posY;
    color;

    constructor(posX, posY, color) {
        this.posX = posX;
        this.posY = posY;
        this.color = color;
    }

    draw() {
        fill(this.color.r, this.color.g, this.color.b);
        stroke(this.color.r, this.color.g, this.color.b);
        rect(this.posX, this.posY, 20, 20);
    }
}