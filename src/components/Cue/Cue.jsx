import React from 'react';
import './Cue.css';
import { Card } from '@material-ui/core';
import WatchLaterIcon from '@material-ui/icons/WatchLater';

export default function getCue({ location }) {

    const { cueBehavior, cueTime, cueLocation } = location.state.habit;
    return (
        <div className='infoBorder'>
            <Card>
                <div className='habit-icons'>
                    <WatchLaterIcon style={{ fontSize: 40, color: 'red' }} />
                </div>
                <h1>1. Cue</h1>
                <h3>
                    I will {cueBehavior} at {cueTime} in {cueLocation}
                </h3>
            </Card>
        </div>
    );
}