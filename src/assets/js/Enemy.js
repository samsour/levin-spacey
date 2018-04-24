import GameObject from "./GameObject";

export default class Enemy extends GameObject {
    constructor(name, color, speed, height, width, maxX, maxY) {
        super(name, color, speed, height, width, maxX, maxY);

        this.hp = 100;
        this.mp = 50;

        this.movingUp = false;
        this.movingRight = false;
        this.movingLeft = false;   
        this.movingDown = false;
        
        console.log("Enemy created!");
    }
}