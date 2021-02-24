import React from 'react';

export default function getCraving(props) {
    return (
        <>
            <h1>Craving</h1>
            {props.allHabits.map(habit => 
                `After ${habit.currentHabit}, I will 
                ${habit.neededHabit}`)}
        </>
    );
}