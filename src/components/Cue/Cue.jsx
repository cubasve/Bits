import React from 'react';
import './Cue.css';
import { Card } from '@material-ui/core';

export default function getCue({ location }) {

    const { cueBehavior, cueTime, cueLocation } = location.state.habit;
    return (
        <div className="infoBorder">
            <Card>
            <h1>Cue</h1>
            <h3>
                I will {cueBehavior} at {cueTime} in {cueLocation}
            </h3>
            </Card>
        </div>
    );
}