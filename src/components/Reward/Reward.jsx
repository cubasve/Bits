import React from 'react';
import { Card } from '@material-ui/core';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

export default function getReward({ location }) {
    const { cueBehavior, wantedHabit } = location.state.habit;
    
    return (
        <div className="infoBorder">
            <Card>
                <div className='habit-icons'>
                    <EmojiEventsIcon style={{ fontSize: 40, color: '#A0522D' }} />
                </div>

                <h1>4. Reward</h1>
                <h3>After {cueBehavior}, I will {wantedHabit}</h3>
            </Card>
        </div>
    )
}