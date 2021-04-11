import React from 'react';

export default function getResponse({ allHabits }) {
    return (
        <div className="infoBorder">
            <h1>Response: Bronze</h1>
            {allHabits.map(habit => habit.responseBronze)}
            <h1>Response: Silver</h1>
            {allHabits.map(habit => habit.responseSilver)}
            <h1>Response: Gold</h1>
            {allHabits.map(habit => habit.responseGold)}
        </div>
    )
}