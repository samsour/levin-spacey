import Utils from "./Utils";

export default class GameObject {
    constructor(maxX, maxY) {
        this.speedX = '1';
        this.speedY = '1';
        this.maxX = maxX;
        this.maxY = maxY;
        this.x = Utils.randomValue(0, this.maxX);
        this.y = Utils.randomValue(0, this.maxY);
        this.width = 100;
        this.height = 100;
        this.name = "Gameobject";
        this.hp = 100;
        this.mp = 50;
    }

    move() {
    
    }
}