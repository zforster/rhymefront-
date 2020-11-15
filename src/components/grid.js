import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flex: 1,
        backgroundColor: "#f5f5f5"
    },
    paper: {
        padding: theme.spacing(6),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


export function GridContainer(props) {
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            <Grid container direction={props.direction ? props.direction : "column"} justify="center" alignItems="center">
                <Grid item xs={props.size ? props.size : 10}>
                    <Paper className={classes.paper}>
                        {props.children}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}