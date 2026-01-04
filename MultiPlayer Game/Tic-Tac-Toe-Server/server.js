// import {createServer} from 'http';
// import {Server} from 'socket.io';

// it is used when we are using common js module system
const {createServer}=require('http');
const {Server}=require('socket.io');

const httpServer=createServer();
const io=new  Server(httpServer,{

})

io.on('connection',(socket)=>{
    console.log('a user connected:',socket.id);
})

httpServer.listen(3000);