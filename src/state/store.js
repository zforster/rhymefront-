import create from 'zustand';

export const useStore = create(set => ({
    username: "",
    setUsername: (username) => set({username: username}),

    roomName: "",
    setRoomName: (room) => set({roomName: room})
}));
