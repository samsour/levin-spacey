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

        // game objects
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
        this.initializePlayerControls(this.player);

        // Start floating elements animation
        clearInterval(this.animationTimer);
        this.animationTimer = setInterval(() => {
            const gameObjects = [
                this.player
            ];
            gameObjects.forEach((gameObject) => {
                // gameObject.toString();
                gameObject.move();
            });
            this.canvas.drawCanvas(gameObjects);
        }, this.baseSpeed);
    }

    createElements() {
        this.player = new Player(
            "Player 1", "blue",
            40, 40,
            this.canvas.getWidth(),
            this.canvas.getHeight()
        );
    }

    initializePlayerControls(player) {
        document.onkeydown = function(event){
            if(event.keyCode === 68)        //d
                player.movingRight = true;
            else if(event.keyCode === 83)   //s
                player.movingDown = true;
            else if(event.keyCode === 65) //a
                player.movingLeft = true;
            else if(event.keyCode === 87) // w
                player.movingUp = true;
        }
    
        document.onkeyup = function(event){
            if(event.keyCode === 68)        //d
                player.movingRight = false;
            else if(event.keyCode === 83)   //s
                player.movingDown = false;
            else if(event.keyCode === 65) //a
                player.movingLeft = false;
            else if(event.keyCode === 87) // w
                player.movingUp = false;
        }
    }

    /*
     * Event listeners
     */

    onUserInput() {
        
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