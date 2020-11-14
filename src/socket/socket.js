import { io } from 'socket.io-client';


const socket = io('http://localhost:4000/games', {"transports" : ["websocket"]});

export const joinRoom = (room, username) => {
    socket.emit('joinRoom', {room: room, username: username});
};

export const disconnect = () => {
    socket.disconnect();
};