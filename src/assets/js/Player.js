import GameObject from "./GameObject";

export default class Player extends GameObject {
    constructor(name, height, width, maxX, maxY) {
        super(name, height, width, maxX, maxY);

        this.hp = 100;
        this.mp = 50;
    }

    controlledMovement() {
        
    }
}