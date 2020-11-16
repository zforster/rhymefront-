import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        textAlign: "center",
        paddingTop: "5rem"
    },
    typography: {
        fontFamily: 'Space Grotesk',
        fontSize: 75,
        fontWeight: 700,
        color: "#0061ab"
    }
});

export function Title() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.typography} variant="h4" gutterBottom>
                Rhyme With Friends
            </Typography>
        </div>
    );
}