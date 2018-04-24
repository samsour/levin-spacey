import GameObject from "./GameObject";

export default class Player extends GameObject {
    constructor(name, color, speed, height, width, maxX, maxY) {
        super(name, color, speed, height, width, maxX, maxY);

        this.hp = 100;
        this.mp = 50;

        this.movingUp = false;
        this.movingRight = false;
        this.movingLeft = false;   
        this.movingDown = false;

        this.initializeControls();
    }

    move() {
        if(this.movingUp && this.y > 0) {
            this.y -= this.speed;
        }
        if(this.movingRight && this.x < this.maxX) {
            this.x += this.speed;
        }
        if(this.movingDown && this.y < this.maxY) {
            this.y += this.speed;
        }
        if(this.movingLeft && this.x > 0) {
            this.x -= this.speed;
        }
    }

    attack() {
        console.log("Player attack!");
    }

    special() {
        console.log("Player special!")
    }

    initializeControls() {
        document.onkeydown = (event) => {
            if(event.keyCode === 68)        //d
                this.player.movingRight = true;
            else if(event.keyCode === 83)   //s
                this.player.movingDown = true;
            else if(event.keyCode === 65) //a
                this.player.movingLeft = true;
            else if(event.keyCode === 87) // w
                this.player.movingUp = true;
        }
    
        document.onkeyup = (event) => {
            if(event.keyCode === 68)        //d
                this.player.movingRight = false;
            else if(event.keyCode === 83)   //s
                this.player.movingDown = false;
            else if(event.keyCode === 65) //a
                this.player.movingLeft = false;
            else if(event.keyCode === 87) // w
                this.player.movingUp = false;
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