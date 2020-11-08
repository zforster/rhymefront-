import io from 'socket.io-client';
const socket = io('http://localhost:4000/games', {"transports" : ["websocket"]});

function App() {
    socket.emit("joinRoom", "test_room");

    socket.on("success", (data) => {
        console.log(data);
    });

    socket.on("newUser", (data) => {
       console.log(data);
    });

    return(
        <h1>hi</h1>
    )
}

export default App;