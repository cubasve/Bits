import React from 'react';

export default function getReward({ habit: { cueBehavior, wantedHabit } }) {
    return (
        <div className="infoBorder">
            <h1>Reward</h1>
            <h3>After {cueBehavior}, I will {wantedHabit}</h3>
        </div>
    )
}