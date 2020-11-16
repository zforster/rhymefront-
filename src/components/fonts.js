import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        textAlign: "center",
        paddingTop: "5rem"
    },
    title: {
        fontFamily: 'Space Grotesk',
        fontSize: 75,
        fontWeight: 700,
        color: "#0061ab"
    },
    lobbyTitle: {
        fontFamily: 'Space Grotesk',
        fontSize: 40,
        fontWeight: 400,
        color: "#044891"
    },
    playerInLobby: {
        fontFamily: 'Space Grotesk',
        fontSize: 22,
        fontWeight: 300,
        color: "#000000"
    }
});

export function Title() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="h4" gutterBottom>
                Rhyme With Friends
            </Typography>
        </div>
    );
}

export function PlayersInLobbyTitle(props){
    const classes = useStyles();
    return (
        <Typography className={classes.lobbyTitle} gutterBottom>
            {props.text ? props.text : ""}
        </Typography>
    );
}

export function PlayerInLobby(props){
    const classes = useStyles();
    return (
        <Typography className={classes.playerInLobby}>
            {props.text ? props.text : ""}
        </Typography>
    );
}