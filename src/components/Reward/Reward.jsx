import React from 'react';

export default function getReward(props) {
    return (
        <>
            <h1>Reward</h1>
            {props.allHabits.map(habit => habit.reward)}
        </>
    )
}