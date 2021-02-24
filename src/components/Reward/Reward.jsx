import React from 'react';

export default function getReward(props) {
    return (
        <>
            <h1>Reward</h1>
            {props.allHabits.map(habit => 
                `After ${habit.neededHabit}, I will
                ${habit.wantedHabit}`)}
        </>
    )
}