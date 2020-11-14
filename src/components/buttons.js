import React from 'react';
import Button from '@material-ui/core/Button';
import { joinRoom } from "../socket/socket";
import {useStore} from "../state/store";
import {adjectives, animals, uniqueNamesGenerator} from "unique-names-generator/dist/index";


function generateUsername(username, setUsername){
    const randomUsername = uniqueNamesGenerator({ dictionaries: [adjectives, animals] });
    if(username === ""){
        setUsername(randomUsername);
        return randomUsername;
    }
    return username
}

export function CreateRoomButton(){
    const username = useStore(state => state.username);
    const setUsername = useStore(state => state.setUsername);

    const roomName = Math.random().toString(36).substring(2);
    const setRoomName = useStore(state => state.setRoomName);


    return (
        <Button
            onClick={() => {
                const name = generateUsername(username, setUsername);
                setRoomName(roomName);
                joinRoom(roomName, name);
            }}
                variant="contained" color="primary">
            Create Private Game
        </Button>
    )
}