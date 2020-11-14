import React, { useEffect }  from 'react';
import { useStore } from "../state/store";
import { userJoinedRoom, disconnectSocket, userLeftRoom, leaveRoom } from "../socket/socket";
import { UsernameInputField } from '../components/inputs';
import { JoinRoomButton } from '../components/buttons';


export function Home(props) {
    document.title = `${props.title} | Rhyme With Friends`;

    const username = useStore(state => state.username);
    const roomName = useStore(state => state.roomName);

    useEffect(() => {
        userJoinedRoom((data) => console.log(data));
        userLeftRoom((data) => console.log(data));

        return () => {
            leaveRoom(roomName);
            // disconnectSocket();
        }
    }, []);

    if(roomName === "") {
        return (
            <div>
                <UsernameInputField/>
                <JoinRoomButton roomName={props.room} message={props.btnText}/>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>{username}</h1>
                <h1>{roomName}</h1>
            </div>
        )
    }
}