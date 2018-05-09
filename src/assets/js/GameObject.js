import Utils from "./Utils";
import Printer from "./Printer";
import Sprite from "./Sprite";
import Spellbook from "./Spellbook";

export default class GameObject {
    constructor(name, image, speed, width, height, maxX, maxY) {
        this.name = name;
        this.speed = speed;

        this.hp = 142;
        this.mp = 69;
        this.maxHp = this.hp;
        this.maxMp = this.mp;

        this.width = width;
        this.height = height;
        this.maxX = maxX - this.width;
        this.maxY = maxY - this.height;
        this.x = Utils.randomValue(0, this.maxX);
        this.y = Utils.randomValue(0, this.maxY);
        
        this.moving = {
            up: false,
            right: false,
            left: false,
            down: false
        }

        this.sprite = new Sprite(image);
        this.frameCounter = 0;
    
        this.spellbook = new Spellbook();
    }

    move() {
        if(this.moving.up && this.y > 0) {
            this.y -= this.speed;
        }
        if(this.moving.right && this.x < this.maxX) {
            this.x += this.speed;
        }
        if(this.moving.down && this.y < this.maxY) {
            this.y += this.speed;
        }
        if(this.moving.left && this.x > 0) {
            this.x -= this.speed;
        }
    }

    resetMovement() {
        // console.log("Reset Movement");
        for(let direction in this.moving) {
            this.moving[direction] = false;
        }
    }

    isMoving() {
        let isMoving = false;

        for(let direction in this.moving) {
            if(this.moving[direction] == true)
                isMoving = true;
        }

       return isMoving;
    }

    update() {
        this.frameCounter++;
        
        if(this.isMoving()) {
            this.sprite.update("moving");
        } else {
            this.sprite.update("idle");
        }
    }

    toString() {
        console.log(this.name + ": x" + this.x + ", y" + this.y + ", " + this.width + " width, " + this.height + " height");
    }
}