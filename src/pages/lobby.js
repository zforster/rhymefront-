import React from 'react';
import { useStore } from "../state/store";
import { Title } from "../components/title";
import { GridContainer } from "../components/grid";
import TextField from '@material-ui/core/TextField';

export function Lobby() {
    document.title = `Lobby | Rhyme With Friends`;

    const username = useStore(state => state.username);
    const roomName = useStore(state => state.roomName);

    const currentPlayers = useStore(state => state.currentPlayers);

    const players = currentPlayers.map((data) => {return <li key={Math.random()}>{data.username}</li>});

    return (
        <div style={{display: "flex", flexDirection: "column", flex: 1, backgroundColor: "#f5f5f5"}}>
            <Title/>
            <GridContainer>
                <div>
                    <h1>Your Username: {username}</h1>
                    <h1>Current Players: {players}</h1>
                    <h1>Your Room: {roomName}</h1>
                    <TextField
                        id="standard-full-width"
                        label="Label"
                        style={{ margin: 8 }}
                        value={`http://localhost:3000/${roomName}`}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </GridContainer>
        </div>
    )
}