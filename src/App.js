const io = require('socket.io-client');

function App() {

    console.log("test");
    const socket = io("ws://127.0.0.1:4001");

    // socket.on("welcome", (data) => {
    //   console.log(data);
    // });

    return(
        <h1>hi</h1>
    )
}

export default App;