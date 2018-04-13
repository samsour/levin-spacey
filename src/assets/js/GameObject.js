import Utils from "./Utils";

export default class GameObject {
    constructor(name, color, width, height, maxX, maxY) {
        this.speed = '1';
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
    }
}