import create from 'zustand';

export const useStore = create(set => ({
    username: "",
    setUsername: (username) => set({username: username}),

    id: "",
    setId: (id) => set({id: id}),

    hostId: "",
    setHostId: (id) => set({hostId: id}),

    currentPlayers: [],
    addToCurrentPlayers: (player) => set(state => ({currentPlayers: [...state.currentPlayers, player]})),
    removeFromCurrentPlayers: (player) => set(state => ({currentPlayers: state.currentPlayers.filter(function(el){return el.id !== player.id})})),

    roomName: "",
    setRoomName: (room) => set({roomName: room})
}));
