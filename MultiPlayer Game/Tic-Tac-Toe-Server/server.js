// import {createServer} from 'http';
// import {Server} from 'socket.io';

// it is used when we are using common js module system
const { createServer } = require('http');
const { Server } = require('socket.io');


const httpServer = createServer();
const io = new Server(httpServer, {
    // allowing cors for vite dev server
    cors: "http://localhost:5173/"
})


// it publisher or subscriber model or design pattern. it is tell me what to do when some event happen.
io.on('connection', (socket) => {
    console.log('New  user Joined connected:' + socket.id);
})

const allUsers = {};
io.on('connection', (socket) => {
    allUsers[socket.id] = {
        socket: socket,
        online: true,
    };
    socket.on("request_to_play", (data) => {
        const currentUser = allUsers[socket.id]
        currentUser.playerName = data.playerName;
        console.log(currentUser);
    });

    socket.on("disconnect", function () {
        allUsers[socket.id] = {
            socket: { ...socket, online: false },
            online: true,
        };
    });
});

// publisher -> action -> action perform karne ke liye on() method use karte hai
// listner -> reaction -> reaction perform karne ke liye emit() method use karte hai

httpServer.listen(3000); 