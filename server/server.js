const express = require("express");
const http = require("http");
const sockIo = require("socket.io");


const app = express();
const index = require("./routes/index");
app.use(index);

const httpServer = http.createServer(app);

const io = sockIo(httpServer, {
    cors: {
        origin : "http://localhost:3000",
        methods : ["GET"]
    }
});

let interval;

io.on("connection", (socket) => {
  console.log(`New client connected: ID => ${socket.id}`);
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log(`Client disconnected: ID => ${socket.id}`);
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

const port = process.env.PORT || 3002;
httpServer.listen(port, () => console.log(`Listening on port ${port}`));
