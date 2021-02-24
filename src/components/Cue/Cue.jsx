import React from 'react';

export default function getCue(props) {
    return (
        <>
            <h1>Cue</h1>
            {props.allHabits.map(habit => 
                `I will 
                ${habit.cueBehavior} at 
                ${habit.cueTime} in 
                ${habit.cueLocation}`)}
        </>
    );
}