import GameObject from "./GameObject";

export default class Player extends GameObject {
    constructor(name, image, speed, height, width, maxX, maxY) {
        super(name, image, speed, height, width, maxX, maxY);

        this.hp = 100;
        this.mp = 50;
        this.level = 1;

        this.aimAngle = 0;

        this.initializeControls();
    }

    attack() {
        console.log("Player attack!");
    }

    special() {
        console.log("Player special!");
    }

    initializeControls() {
        document.onkeydown = (event) => {
            if(event.keyCode === 68)        //d
                this.moving.right = true;
            else if(event.keyCode === 83)   //s
                this.moving.down = true;
            else if(event.keyCode === 65) //a
                this.moving.left = true;
            else if(event.keyCode === 87) // w
                this.moving.up = true;
        }
    
        document.onkeyup = (event) => {
            if(event.keyCode === 68)        //d
                this.moving.right = false;
            else if(event.keyCode === 83)   //s
                this.moving.down = false;
            else if(event.keyCode === 65) //a
                this.moving.left = false;
            else if(event.keyCode === 87) // w
                this.moving.up = false;
        }

        document.onclick = (mouse) => {
            this.attack();
        }
    
        document.oncontextmenu = (mouse) => {
            this.special();
            mouse.preventDefault();
        }
    
        document.onmousemove = (mouse) => {
            console.log("Mouse movement");

            // var mouseX = mouse.clientX - document.getElementById('ctx').getBoundingClientRect().left;
            // var mouseY = mouse.clientY - document.getElementById('ctx').getBoundingClientRect().top;
    
            // mouseX -= player.x;
            // mouseY -= player.y;
    
            // player.aimAngle = Math.atan2(mouseY,mouseX) / Math.PI * 180;
        }
    }
}