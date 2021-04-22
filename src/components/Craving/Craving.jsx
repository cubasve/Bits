import React from 'react';

export default function getCraving({ habit: { currentHabit, cueBehavior } }) {
    return (
        <div className="infoBorder">
            <h1>Craving</h1>
            <h3>After {currentHabit}, I will {cueBehavior}</h3>
        </div>
    );
}