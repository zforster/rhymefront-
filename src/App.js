import io from 'socket.io-client';
const socket = io('http://localhost:4000', {"transports" : ["websocket"]});

function App() {

    console.log("test");
    socket.on("welcome", (data) => {
        console.log(data);
    });

    return(
        <h1>hi</h1>
    )
}

export default App;