import React from 'react';
import { TextField } from '@material-ui/core';
import {useStore} from "../state/store";

export function UsernameInputField(){
    const setUsername = useStore(state => state.setUsername);
    return (
        <TextField
            inputProps={{ maxLength: 16 }}
            id="outlined-basic"
            label="Nickname"
            variant="outlined"
            autoFocus={true}
            size="small"
            onChange={(event) => setUsername(event.target.value)}
        />
    )
}