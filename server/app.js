const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || "Internal server error");
});

server.listen(PORT, () => {
  console.log("Server is live on PORT:", PORT);
});

const canvasWidth = 480;
const canvasHeight = 320;

io.on("connection", socket => {
  console.log("a user connected:", socket.id);

  socket.on("disconnect", function() {
    console.log("user disconnected");

    delete gameState.players[socket.id];
  });

  socket.on("newPlayer", () => {
    gameState.players[socket.id] = {
      x: Math.floor(Math.random() * canvasWidth),
      y: Math.floor(Math.random() * canvasHeight),
      width: 25,
      height: 25,
      speed: 4
    };
  });

  socket.on("playerMovement", playerMovement => {
    const player = gameState.players[socket.id];

    if (playerMovement.left && player.x > 0) {
      player.x -= player.speed;
    }
    if (playerMovement.right && player.x < canvasWidth - player.width) {
      player.x += player.speed;
    }

    if (playerMovement.up && player.y > 0) {
      player.y -= player.speed;
    }
    if (playerMovement.down && player.y < canvasHeight - player.height) {
      player.y += player.speed;
    }
  });
});

setInterval(() => {
  io.sockets.emit("state", gameState);
}, 1000 / 60);

const gameState = {
  players: {}
};