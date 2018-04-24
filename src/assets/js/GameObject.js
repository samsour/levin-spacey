import Utils from "./Utils";

export default class GameObject {
    constructor(name, color, speed, width, height, maxX, maxY) {
        this.speed = speed;
        this.maxX = maxX;
        this.maxY = maxY;
        this.x = Utils.randomValue(0, this.maxX);
        this.y = Utils.randomValue(0, this.maxY);
        this.width = width;
        this.height = height;
        this.name = name;
        this.color = color;
    }

    move() {
        if(this.y < this.maxY - this.height) {
            this.y += this.speed;
        }
    }

    toString() {
        console.log(this.name + ": x" + this.x + ", y" + this.y + ", " + this.width + " width, " + this.height + " height");
    }
}