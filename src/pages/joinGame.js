import React from 'react';
import { UsernameInputField } from '../components/inputs';
import { JoinRoomButton } from '../components/buttons';


export function JoinGame(props) {
    document.title = "Join Game | Rhyme With Friends";


    return (
        <div>
            <UsernameInputField/>
            <JoinRoomButton roomName={props.room} message={"JOIN GAME"}/>
        </div>
    )
}