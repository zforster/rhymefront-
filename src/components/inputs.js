import React from 'react';
import { TextField } from '@material-ui/core';
import {useStore} from "../state/store";

export function UsernameInputField(props){
    const setUsername = useStore(state => state.setUsername);
    return (
        <div {...props}>
            <TextField
                inputProps={{ maxLength: 16 }}
                id="outlined-basic"
                label="Nickname"
                variant="outlined"
                autoFocus={true}
                size="small"
                onChange={(event) => setUsername(event.target.value)}
            />
        </div>
    )
}