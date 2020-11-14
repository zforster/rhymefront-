import React from 'react';
import { useStore } from '../state/store';
import { UsernameInputField } from '../components/inputs';
import { CreateRoomButton } from '../components/buttons';


export function Home() {
    document.title = "Rhyme With Friends | Home";

    const username = useStore(state => state.username);
    const roomName = useStore(state => state.roomName);

    if(roomName === ""){
        return (
            <div>
                <UsernameInputField/>
                <CreateRoomButton/>
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