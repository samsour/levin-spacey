import GameObject from "./GameObject";

export default class Player extends GameObject {
    constructor(name, color, height, width, maxX, maxY) {
        super(name, color, height, width, maxX, maxY);

        this.hp = 100;
        this.mp = 50;

        this.movingUp = false;
        this.movingRight = false;
        this.movingLeft = false;   
        this.movingDown = false;
    }

    move() {
        if(this.movingUp && this.y > 0) {
            this.y -= this.speed;
        }
        if(this.movingRight && this.x < this.maxX - this.width) {
            this.x += this.speed;
        }
        if(this.movingDown && this.y < this.maxY - this.height) {
            this.y += this.speed;
        }
        if(this.movingLeft && this.x > 0) {
            this.x -= this.speed;
        }
    }
}