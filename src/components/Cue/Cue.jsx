import React from 'react';
import './Cue.css';

export default function getCue({ allHabits }) {
    return (
        <div className="infoBorder">
            <h1>Cue</h1>
            {allHabits.map(habit => 
                `I will 
                ${habit.cueBehavior} at 
                ${habit.cueTime} in 
                ${habit.cueLocation}`)}
        </div>
    );
}