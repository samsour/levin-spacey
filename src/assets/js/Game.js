import GameObject from './GameObject';
import Player from './Player';
import Canvas from "./Canvas";
import Utils from "./Utils";
import Printer from "./Printer";

export default class Game {

    constructor() {

        // Settings
        this.baseSpeed = 10;

        // Controls
        this.animationTimer = 0;
        this.gameIsStarted = false;
        this.canvas = new Canvas();
        this.level = 0;

        this.enemyList = [];

        this.registerEvents();

    }

    registerEvents() {
        // Listener for user input
        this.onUserInput();

        // Listener for start button
        this.onStart();
    }

    start() {
        // Start game
        this.gameIsStarted = true;
        this.level = 0;

        this.startLevel();
    }

    startLevel() {
        // Level up
        this.level++;
        Printer.printLevel('Level: ' + this.level);

        // Create floating elements
        this.createElements();

        // Start floating elements animation
        clearInterval(this.animationTimer);
        this.animationTimer = setInterval(() => {
            const gameObjects = [
                this.player
            ];
            gameObjects.forEach((gameObject) => {
                gameObject.move();
            });
            this.canvas.drawCanvas(gameObjects);
        }, this.baseSpeed);
    }

    createElements() {
        this.player = new GameObject(
            this.canvas.getWidth(),
            this.canvas.getHeight()
        );
    }





    /*
     * Event listeners
     */

    onUserInput() {
        document.onkeydown = function(event){
            if(event.keyCode === 68)        //d
                this.player.pressingRight = true;
            else if(event.keyCode === 83)   //s
                this.player.pressingDown = true;
            else if(event.keyCode === 65) //a
                this.player.pressingLeft = true;
            else if(event.keyCode === 87) // w
                this.player.pressingUp = true;
        }
    
        document.onkeyup = function(event){
            if(event.keyCode === 68)        //d
                this.player.pressingRight = false;
            else if(event.keyCode === 83)   //s
                this.player.pressingDown = false;
            else if(event.keyCode === 65) //a
                this.player.pressingLeft = false;
            else if(event.keyCode === 87) // w
                this.player.pressingUp = false;
        }
    }

    onStart() {
        const startButton = document.getElementById('js-start-button');
        startButton.addEventListener("click", (event) => {
            if (!this.gameIsStarted)
            {
                this.start();
            }
        });
    }
}