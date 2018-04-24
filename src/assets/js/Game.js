import GameObject from './GameObject';
import Player from './Player';
import Enemy from './Enemy';
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

    finish() {
        // Reset controls
        this.gameIsStarted = false;
        this.enemyList = [];
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
            
            // Create temporary array with all gameObjects that will be moved
            const gameObjects = [
                this.player
            ];
            // Add the enemies to it
            for(let enemy of this.enemyList) {
                gameObjects.push(enemy);
            }

            // Let every game object move
            gameObjects.forEach((gameObject) => {
                // gameObject.toString();
                gameObject.move();
            });

            // Draw everything
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

        for(let i = 0; i < 10; i++) {
            this.createRandomEnemy();
        }
    }

    createRandomEnemy() {
        this.enemyList.push(new Enemy("Enemy", "red", 20, 20, this.canvas.getWidth(), this.canvas.getHeight()));
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
                startButton.innerHTML = 'STOP GAME';
            } else {
                this.finish();
                startButton.innerHTML = 'START GAME';
            }
        });
    }
}