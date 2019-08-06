const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const socket = io();

socket.emit("newPlayer");

socket.on("state", gameState => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let player in gameState.players) {
    drawPlayer(gameState.players[player]);
  }
});

const drawPlayer = player => {
  ctx.beginPath();
  ctx.rect(player.x, player.y, player.width, player.height);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.closePath();
};

const playerMovement = {
  up: false,
  down: false,
  left: false,
  right: false
};

const keyDownHandler = e => {
  if (e.keyCode == 39) {
    playerMovement.right = true;
  } else if (e.keyCode == 37) {
    playerMovement.left = true;
  } else if (e.keyCode == 38) {
    playerMovement.up = true;
  } else if (e.keyCode == 40) {
    playerMovement.down = true;
  }
};

const keyUpHandler = e => {
  if (e.keyCode == 39) {
    playerMovement.right = false;
  } else if (e.keyCode == 37) {
    playerMovement.left = false;
  } else if (e.keyCode == 38) {
    playerMovement.up = false;
  } else if (e.keyCode == 40) {
    playerMovement.down = false;
  }
};

setInterval(() => {
  socket.emit("playerMovement", playerMovement);
}, 1000 / 60);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
