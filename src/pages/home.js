import React from 'react';
import { useStore } from '../state/store';
import { UsernameInputField } from '../components/inputs';
import { JoinRoomButton } from '../components/buttons';


export function Home() {
    document.title = "Home | Rhyme With Friends";

    const username = useStore(state => state.username);
    const roomName = useStore(state => state.roomName);

    if(roomName === ""){
        return (
            <div>
                <UsernameInputField/>
                <JoinRoomButton message={"CREATE PRIVATE GAME"}/>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>{ username }</h1>
                <h1>{ roomName }</h1>
            </div>
        )
    }
}