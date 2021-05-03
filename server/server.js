const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const socket = require('socket.io');

const server = http.createServer(app);
const io = socket(server);

io.on('connection', socket => {
    socket.on('message', ({name, message}) => {
        io.emit('message', {name, message});
    })
})

server.listen(4000, () => {
  console.log("server is running", 4000);
});

