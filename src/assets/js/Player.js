import GameObject from "./GameObject";

export default class Player extends GameObject {
    constructor(name, height, width, maxX, maxY) {
        super(name, height, width, maxX, maxY);

        this.hp = 100;
        this.mp = 50;

        this.movingUp = false;
        this.movingRight = false;
        this.movingLeft = false;   
        this.movingDown = false;
    }

    move() {
        if(this.movingUp) {
            this.y -= speed;
        }
        if(this.movingRight) {
            this.x += speed;
        }
        if(this.movingDown) {
            this.y += speed;
        }
        if(this.movingLeft) {
            this.x -= speed;
        }
    }
}