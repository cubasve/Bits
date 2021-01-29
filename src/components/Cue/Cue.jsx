import React from 'react';

export default function getCue(props) {
    return (
        <>
            <h1>Cue</h1>
            {props.allHabits.map(habit => habit.cue)}

        </>
    );
}