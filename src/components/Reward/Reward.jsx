import React from 'react';
import { Card } from '@material-ui/core';

export default function getReward({ location }) {
    const { cueBehavior, wantedHabit } = location.state.habit;
    
    return (
        <div className="infoBorder">
            <Card>
                <h1>Reward</h1>
                <h3>After {cueBehavior}, I will {wantedHabit}</h3>
            </Card>
        </div>
    )
}