import React, { useEffect }  from 'react';
import { useStore } from "../state/store";
import { userJoinedRoom, disconnectSocket, userLeftRoom } from "../socket/socket";
import { UsernameInputField } from '../components/inputs';
import { JoinRoomButton } from '../components/buttons';


export function Home(props) {
    document.title = `${props.title} | Rhyme With Friends`;

    const username = useStore(state => state.username);
    const roomName = useStore(state => state.roomName);

    const currentPlayers = useStore(state => state.currentPlayers);
    const addToCurrentPlayers = useStore(state => state.addToCurrentPlayers);
    const removeFromCurrentPlayers = useStore(state => state.removeFromCurrentPlayers);

    useEffect(() => {
        userJoinedRoom((data) => {
            addToCurrentPlayers(data);
        });

        userLeftRoom((data) => {
            removeFromCurrentPlayers(data);
        });

        return () => {
            disconnectSocket();
        }
    }, [addToCurrentPlayers, removeFromCurrentPlayers]);

    if(roomName === "") {
        return (
            <div>
                <UsernameInputField/>
                <JoinRoomButton roomName={props.room} message={props.btnText}/>
            </div>
        )
    }
    else{
        console.log(currentPlayers);
        let players = currentPlayers.map((data) => {return <li key={Math.random()}>{data.username}</li>});
        return (
            <div>
                <h1>Your Username: {username}</h1>
                <h1>Current Players: {players}</h1>
                <h1>Your Room: {roomName}</h1>
            </div>
        )
    }
}