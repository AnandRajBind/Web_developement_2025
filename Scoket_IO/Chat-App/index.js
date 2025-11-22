// npm  install express socket.io
const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io'); // Importing Server from socket.io
const app = express();
const server = http.createServer(app);
const io = new Server(server);// Creating a new Socket.io server instance

// Socket.io connection.  
// here socket represents each connected client/User.
io.on("connection", (socket) => {
    // console.log("New user connected", socket.id);
    socket.on("user-message", (message) => {
        // Broadcasting the message to all connected clients including sender
        console.log("A new User Message", message);
        io.emit("message", message); // Emitting or send message event to all clients. takes the message from frontend and send to all clients
    });
});

app.use(express.static(path.resolve("./public")));
app.get('/', (req, res) => {
    return res.sendFile("index.html");
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})