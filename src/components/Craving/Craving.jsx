import React from 'react';

export default function getCraving({ allHabits }) {
    return (
        <div className="infoBorder">
            <h1>Craving</h1>
            {allHabits.map(habit => 
                `After ${habit.currentHabit}, I will 
                ${habit.cueBehavior}`)}
        </div>
    );
}