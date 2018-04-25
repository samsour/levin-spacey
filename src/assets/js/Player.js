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
        this.castSpell("fireball");
    }

    castSpell(spell) {
        switch(spell) {
            case 'fireball':
                if(this.mp >= 10){
                    this.mp -= 10;
                    console.log("Casting: Fireball!");
                } else {
                    console.log("Not enough mana for Fireball...");
                }
                break;
            default:
                console.log("Casting some black magics.");
        }
    }

    calculateAimAngle(mouse) {
        let mouseX = mouse.clientX - document.getElementById('js-main-canvas').getBoundingClientRect().left;
        let mouseY = mouse.clientY - document.getElementById('js-main-canvas').getBoundingClientRect().top;

        // mouseX -= player.x;
        // mouseY -= player.y;

        this.aimAngle = Math.atan2(mouseY,mouseX) / Math.PI * 180;
    }

    initializeControls() {
        document.onkeydown = event => {

            // Update mouse position!!

            if(event.keyCode === 68)        //d
                this.moving.right = true;
            else if(event.keyCode === 83)   //s
                this.moving.down = true;
            else if(event.keyCode === 65) //a
                this.moving.left = true;
            else if(event.keyCode === 87) // w
                this.moving.up = true;
        }
    
        document.onkeyup = event => {
            if(event.keyCode === 68)        //d
                this.moving.right = false;
            else if(event.keyCode === 83)   //s
                this.moving.down = false;
            else if(event.keyCode === 65) //a
                this.moving.left = false;
            else if(event.keyCode === 87) // w
                this.moving.up = false;
        }

        document.onclick = mouse => {
            this.attack();
        }
    
        document.oncontextmenu = mouse => {
            mouse.preventDefault();
            this.special();
        }
    
        document.onmousemove = mouse => {
            this.calculateAimAngle(mouse);
            // console.log("Aim Angle:" + this.aimAngle);
        }
    }
}