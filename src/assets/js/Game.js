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
                gameObject.update();
                gameObject.move();
            });

            // Draw everything
            this.canvas.drawCanvas(gameObjects);
        
        }, this.baseSpeed);
    }

    createElements() {
        this.player = new Player(
            "Player 1", "rogue-animation-sprite.png", 2,
            64, 64,
            this.canvas.getWidth(),
            this.canvas.getHeight()
        );

        let enemyCount = document.getElementById('js-enemy-count').value;
        for(let i = 0; i < enemyCount; i++) {
            this.createRandomEnemy();
        }
    }

    createRandomEnemy() {
        this.enemyList.push(new Enemy("Enemy", "templar-animation-sprite.png", 1, 64, 64, this.canvas.getWidth(), this.canvas.getHeight()));
    }

    /*
     * Event listeners
     */

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