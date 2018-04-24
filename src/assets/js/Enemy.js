import GameObject from "./GameObject";
import Utils from "./Utils";

export default class Enemy extends GameObject {
    constructor(name, color, speed, height, width, maxX, maxY) {
        super(name, color, speed, height, width, maxX, maxY);

        this.hp = 100;
        this.mp = 50;
        
        console.log("Enemy created!");
    }

    update() {
        super.update();
    }
}