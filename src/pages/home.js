import React, { useEffect }  from 'react';
import { useStore } from "../state/store";
import { Title } from "../components/fonts";
import { Lobby } from "./lobby";
import { GridContainer } from "../components/grid";
import { userJoinedRoom, disconnectSocket, userLeftRoom } from "../socket/socket";
import { UsernameInputField } from '../components/inputs';
import { JoinRoomButton } from '../components/buttons';


export function Home(props) {
    const roomName = useStore(state => state.roomName);

    const addToCurrentPlayers = useStore(state => state.addToCurrentPlayers);
    const removeFromCurrentPlayers = useStore(state => state.removeFromCurrentPlayers);
    const setId = useStore(state => state.setId);
    const setHostId = useStore(state => state.setHostId);

    useEffect(() => {
        userJoinedRoom((data) => {
            addToCurrentPlayers(data);
            if(data["isYou"]){
                setId(data["id"])
            }
            if(data["host"]){
                setHostId(data["id"])
            }
        });
        userLeftRoom((data) => {
            setHostId(data["host"]);
            removeFromCurrentPlayers(data);
        });
        return () => {
            disconnectSocket();
        }
    }, [addToCurrentPlayers, removeFromCurrentPlayers, setId, setHostId]);

    if(roomName === "") {
        document.title = `${props.title} | Rhyme With Friends`;
        return (
            <div style={{display: "flex", flexDirection: "column", flex: 1, backgroundColor: "#f5f5f5"}}>
                <Title/>
                <GridContainer>
                    <div style={{display: "block"}}>
                        <UsernameInputField style={{marginBottom: "2rem"}}/>
                        <JoinRoomButton roomName={props.room} message={props.message}/>
                    </div>
                </GridContainer>
            </div>
        )
    }
    return (<Lobby/>)
}