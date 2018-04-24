import Utils from "./Utils";

export default class GameObject {
    constructor(name, color, width, height, maxX, maxY) {
        this.speed = 4;
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
        // restrict area to available space -> Canvas.width & height
        // Auto move & bouncing
        if(this.y > 0) {
            this.y -= this.speed;
        }
        if(this.x < this.maxX - this.width) {
            this.x += this.speed;
        }
        if(this.y < this.maxY - this.height) {
            this.y += this.speed;
        }
        if(this.x > 0) {
            this.x -= this.speed;
        }
    }

    toString() {
        console.log(this.name + ": x" + this.x + ", y" + this.y + ", " + this.width + " width, " + this.height + " height");
    }
}