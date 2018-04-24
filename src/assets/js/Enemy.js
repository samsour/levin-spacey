import GameObject from "./GameObject";

export default class Enemy extends GameObject {
    constructor(name, color, speed, height, width, maxX, maxY) {
        super(name, color, speed, height, width, maxX, maxY);

        this.hp = 100;
        this.mp = 50;
        
        console.log("Enemy created!");
    }

    update() {
        // this.moving.left = true;
        super.update();
    }
}