import React, { Component } from 'react';
import io from 'socket.io-client';



class Site extends Component {
    constructor(){
        super();
        this.state = {room: "testRoom", messages: [], currentMsg: "", username: `zak${Math.random()}`};
        this.socket = io('http://localhost:4000/chat', {"transports" : ["websocket"]});
    }

    componentDidMount() {
        this.socket.emit("joinRoom", this.state.room);
        this.socket.on("broadcastMsg", (data) => this.handleNewMsg(data)); // add listener
    }

    componentWillUnmount(){
        this.socket.off('broadcastMsg'); // remove event listener
    }

    handleNewMsg(data){
        let messages = this.state.messages;
        messages.push(data);
        this.setState({messages: messages});
    }

    sendMsg(){
        this.setState({currentMsg: ""});
        this.socket.emit("sendMsg", {username: this.state.username, msg: this.state.currentMsg, room: this.state.room})
    }

    render() {
        let messages = this.state.messages.map((data) => {return <li key={Math.random()}>`{data.username} {data.msg}`</li>});
        return (
            <div>
                <h1>welcome {this.state.username}</h1>
                {messages}
                <input value={this.state.currentMsg} onChange={(event) => {this.setState({currentMsg: event.target.value})}}/>
                <button onClick={() => {this.sendMsg()}}/>
            </div>
        )
    }
}

export default Site;