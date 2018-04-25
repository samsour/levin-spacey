import GameObject from "./GameObject";
import Utils from "./Utils";

export default class Enemy extends GameObject {
    constructor(name, color, speed, height, width, maxX, maxY) {
        super(name, color, speed, height, width, maxX, maxY);

        this.hp = 100;
        this.mp = 50;

        this.earshot = 200;

        this.waitingSince = Date.now();

        console.log("Enemy created!");
    }

    update() {
        // looping this 100 times a second
        super.update();
        
        if(this.frameCounter > 100) {
            // looping this ~ every second
            this.frameCounter = 0;

            if(this.isMoving()) {
                for(let direction in this.moving) {
                    this.moving[direction] = false;
               }
            } else { // isnt moving:
                let direction = Utils.randomValue(0,4);
                switch(direction) {
                    case 0:
                        this.moving.right = true;
                    break;
                    case 1:
                        this.moving.down = true;
                    break;
                    case 2:
                        this.moving.left = true;
                    break;
                    case 3:
                        this.moving.up = true;
                    break;
                    default:
                        this.moving.right = true;
                }
            }
        }
    }
}