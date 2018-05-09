import Utils from "./Utils";
import Printer from "./Printer";

import GameObject from "./GameObject";

export default class Enemy extends GameObject {
    constructor(name, color, speed, height, width, maxX, maxY) {
        super(name, color, speed, height, width, maxX, maxY);

        this.earshot = 200;
        this.eyeshot = 350;
        this.attackRange = 50;

        this.states = {
            IDLE: 0, // Standard
            FOCUS: 1,
            ATTACK: 2,
            STUN: 3,
        }

        this.state = this.states.IDLE;

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
        this.resetMovement();
        // console.log("Attacking " + gameObject.name + "!");
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
        
        if(this.state === this.states.IDLE && this.frameCounter > 200) {
            // looping this ~ every second
            this.frameCounter = 0;
            this.idle();
        } else if(this.state === this.states.FOCUS) {
            this.focus(playerObject);
        } else if(this.state === this.states.ATTACK && this.frameCounter > 100) {
            this.frameCounter = 0;
            this.attack(playerObject);
        }
    }
}