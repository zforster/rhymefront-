import { io } from 'socket.io-client';


export const socket = io('http://localhost:4000/games', {"transports" : ["websocket"]});

export const joinRoom = (room, username) => {
    socket.emit('joinRoom', {room: room, username: username});
};

export const userJoinedRoom = (data) => {
    socket.on('userJoinedRoom', msg => {
        return data(msg);
    });
};

export const userLeftRoom = (data) => {
    socket.on('userLeftRoom', msg => {
        return data(msg);
    });
};

export const leaveRoom = (room) => {
    socket.emit('leaveRoom', {room: room});
};

export const disconnectSocket = () => {
    socket.disconnect();
};