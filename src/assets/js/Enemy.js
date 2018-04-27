import GameObject from "./GameObject";
import Utils from "./Utils";

export default class Enemy extends GameObject {
    constructor(name, color, speed, height, width, maxX, maxY) {
        super(name, color, speed, height, width, maxX, maxY);

        this.hp = 100;
        this.mp = 50;

        this.earshot = 200;
        this.attackRange = 50;

        this.status = {
            IDLE: 0,
            FOCUS: 1,
            ATTACK: 2,
            STUN: 3,
        }

        this.state = "idle";

        console.log("Enemy created!");
    }

    focus(gameObject) {
        // Move towards player

        this.resetMovement();

        if(this.x < gameObject.x) {
            this.moving.right = true;          

        } else if(this.x > gameObject.x) {
            this.moving.left = true;
        }

        if(this.y < gameObject.y) {
            this.moving.down = true;
        
        } else if(this.y > gameObject.y) {
            this.moving.up = true;
        }
    }

    attack(gameObject) {
        console.log("Attacking " + gameObject.name + "!");
        this.resetMovement();
    }

    idle() {
        // Idle Animation
        if(this.isMoving()) {
            this.resetMovement();
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

    update(playerObject) {
        // looping this 100 times a second
        super.update();
        
        if(this.state === "idle" && this.frameCounter > 200) {
            // looping this ~ every second
            this.frameCounter = 0;
            this.idle();
        } else if(this.state === "focus") {
            this.focus(playerObject);
        } else if(this.state === "attack" && this.frameCounter > 100) {
            this.attack(playerObject);
        }
    }
}