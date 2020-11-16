import React, { useState } from 'react';
import { useStore } from "../state/store";
import { Title, PlayersInLobbyTitle, PlayerInLobby } from "../components/fonts";
import { GridContainer } from "../components/grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export function Lobby() {
    document.title = `Lobby | Rhyme With Friends`;

    const [showCopied, setShowCopied] = useState(false);
    const username = useStore(state => state.username);
    const roomName = useStore(state => state.roomName);

    const currentPlayers = useStore(state => state.currentPlayers);

    const players = currentPlayers.map((data) => {return <PlayerInLobby text={data.username}/>});

    const styleBackground = showCopied ? "#f5f5f5" : "white";
    const style = { textAlign: 'center', cursor: "pointer", backgroundColor: styleBackground};

    return (
        <div style={{display: "flex", flexDirection: "column", flex: 1, backgroundColor: "#f5f5f5"}}>
            <Title/>
            <GridContainer>
                <div>
                    <PlayersInLobbyTitle text={"Players"}/>
                    {players}
                    <Button style={{marginBottom: "3rem", marginTop: "2.6rem"}} variant="contained" color="primary">Start Game</Button>
                    <TextField
                        onClick={() => {
                            navigator.clipboard.writeText(`http://localhost:3000/${roomName}`);
                            setShowCopied(true);
                            setTimeout(() => {
                                setShowCopied(false);
                            }, 100);
                        }}
                        label="Link To Invite Your Friends"
                        value={`http://localhost:3000/${roomName}`}
                        fullWidth
                        variant="outlined"
                        inputProps={{shrink: true, readOnly: true, style: style}}
                    />
                </div>
            </GridContainer>
        </div>
    )
}