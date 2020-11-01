const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

app.use(cors({ credentials: true, origin: "http://localhost:19006" }));

io.on("connection", (socket) => {
  socket.on("chat message", (payload) => {
    io.emit("chat message", payload);
  });
});

server.listen(port, () => {
  console.log("wynncom 💬 running on port:" + port);
});
