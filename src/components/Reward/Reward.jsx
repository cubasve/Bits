import React from 'react';

export default function getReward({ allHabits }) {
    return (
        <div className="infoBorder">
            <h1>Reward</h1>
            {allHabits.map(habit => 
                `After ${habit.cueBehavior}, I will
                ${habit.wantedHabit}`)}
        </div>
    )
}