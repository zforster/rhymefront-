import React from 'react';
import { useStore } from "../state/store";


export function Lobby() {
    document.title = `Lobby | Rhyme With Friends`;

    const username = useStore(state => state.username);
    const roomName = useStore(state => state.roomName);

    const currentPlayers = useStore(state => state.currentPlayers);

    const players = currentPlayers.map((data) => {return <li key={Math.random()}>{data.username}</li>});

    return (
        <div>
            <h1>Your Username: {username}</h1>
            <h1>Current Players: {players}</h1>
            <h1>Your Room: {roomName}</h1>
        </div>
    )
}