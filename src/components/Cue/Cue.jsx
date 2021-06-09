import React from 'react';
import './Cue.css';
import { Card } from '@material-ui/core';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
//import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles ((theme) => ({
//     card: {
//         backgroundColor: '#FFD700',
//     }
// }));

export default function getCue({ location }) {
    const { cueBehavior, cueTime, cueLocation } = location.state.habit;
    
    //const classes = useStyles();

    return (
        <div className='infoBorder'>
            <Card /*className={classes.card}*/>
                <div className='habit-icons'>
                    <WatchLaterIcon style={{ fontSize: 40, color: '#A0522D' }} />
                </div>
                <h1>1. Cue</h1>
                <h3>
                    I will {cueBehavior} at {cueTime} in {cueLocation}
                </h3>
            </Card>
        </div>
    );
}