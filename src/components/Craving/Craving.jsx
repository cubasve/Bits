import React from 'react';
import { Card } from '@material-ui/core';
//import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

export default function getCraving({ location }) {
    const { currentHabit, cueBehavior } = location.state.habit;
    
    return (
        <div className="infoBorder">
            <Card>
                <div className='habit-icons'>
                    <EmojiObjectsIcon  style={{ fontSize: 40, color: '#A0522D' }} />
                </div>
                <h1>2. Craving</h1>
                <h3>After {currentHabit}, I will {cueBehavior}</h3>
            </Card>
        </div>
    );
}