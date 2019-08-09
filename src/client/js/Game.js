import * as PIXI from "pixi.js";

export default class Game {
  constructor(e) {

    this._element = e;
    
    // init WebGL renderer
    this.app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        antialias: true,
        transparent: false,
        resolution: 1
    });
    this.app.renderer.autoResize = true;

    this._element.appendChild(this.app.view);
    
    // track time that passes between frames to prevent uneven distribution
    this._lastFrameTime = 0;
    
    const spaceship = PIXI.Sprite.from('http://3.bp.blogspot.com/-cg1jtrxaZ8Y/Ufl5SmFUVaI/AAAAAAAAAzY/KBxNVcMmOB0/s1600/F5S4.png');
    spaceship.anchor.set(0.5);
    spaceship.x = this.app.screen.width / 2;
    spaceship.y = this.app.screen.height / 2;

    this.app.stage.addChild(spaceship);

    // player entities
    this.spaceShips = [];

    // this.bulletManager = new BulletManager( this, 200 );

    // GAME LOOP
    this.app.ticker.add(() => {
        // just for fun
        spaceship.rotation += 0.01;
    });
    // start game
    // requestAnimationFrame(this._tick.bind(this));
  }

  /**
   * Callback for listen. Is invoked whenever a player connects
   * or disconnects
   *
   * @param   {String}  match        name of the event, e.g. status/mike
   * @param   {Boolean} isSubscribed true if the player connected, false if disconnected
   *
   * @private
   * @returns {void}
   */
  _playerOnlineStatusChanged(match, isSubscribed) {
    // Extract the player name from the status event
    var name = match.replace("status/", "");

    if (isSubscribed) {
      this.addPlayer(name);
    } else {
      this.removePlayer(name);
    }
  }

  /**
   * Adds a new spaceship at a random position to the stage
   *
   * @param {String} name the name of the player
   *
   * @private
   * @returns {void}
   */
  addPlayer(name) {
    var x = this.renderer.width * (0.1 + Math.random() * 0.8);
    var y = this.renderer.height * (0.1 + Math.random() * 0.8);
    this.spaceShips.push(new SpaceShip(this, x, y, name));
  }

  /**
   * Removes a spaceship from the stage, either as a result of it being
   * destroyed or because a player disconnected
   *
   * @param   {String} name the name of the player associated with this ship
   *
   * @private
   * @returns {void}
   */
  removePlayer(name) {
    for (var i = 0; i < this.spaceShips.length; i++) {
      if (this.spaceShips[i].name === name) {
        this.spaceShips[i].remove();
        this.spaceShips.splice(i, 1);
      }
    }
  }

  /**
   * Called on every frame. Notifies subscribers, updates
   * the time and renders the frame
   *
   * @param   {Number} currentTime Milliseconds since page was loaded
   *
   * @private
   * @returns {void}
   */
  _tick(currentTime) {
    // notify objects of the impeding update. This gives ships time to reposition
    // themselves, bullets to move etc.
    // this.emit("update", currentTime - this._lastFrameTime, currentTime);

    // store the time
    this._lastFrameTime = currentTime;

    // render the next frame
    this.app.render(this.stage);

    // and schedule the next tick
    requestAnimationFrame(this._tick.bind(this));
  }
}






// const canvas = document.getElementById("game");
// const ctx = canvas.getContext("2d");
// const socket = io();

// socket.emit("newPlayer");

// socket.on("state", gameState => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   for (let player in gameState.players) {
//     drawPlayer(gameState.players[player]);
//   }
// });

// const drawPlayer = player => {
//   ctx.beginPath();
//   ctx.rect(player.x, player.y, player.width, player.height);
//   ctx.fillStyle = "#000";
//   ctx.fill();
//   ctx.closePath();
// };

// const playerMovement = {
//   up: false,
//   down: false,
//   left: false,
//   right: false
// };

// const keyDownHandler = e => {
//   if (e.keyCode == 39) {
//     playerMovement.right = true;
//   } else if (e.keyCode == 37) {
//     playerMovement.left = true;
//   } else if (e.keyCode == 38) {
//     playerMovement.up = true;
//   } else if (e.keyCode == 40) {
//     playerMovement.down = true;
//   }
// };

// const keyUpHandler = e => {
//   if (e.keyCode == 39) {
//     playerMovement.right = false;
//   } else if (e.keyCode == 37) {
//     playerMovement.left = false;
//   } else if (e.keyCode == 38) {
//     playerMovement.up = false;
//   } else if (e.keyCode == 40) {
//     playerMovement.down = false;
//   }
// };

// setInterval(() => {
//   socket.emit("playerMovement", playerMovement);
// }, 1000 / 60);

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
