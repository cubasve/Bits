import React from 'react';

export default function getHabitName(props) {
    return (
        <>
            <h2>Habit Names:</h2>
            {props.allHabits.map(habit => habit.name)}
        </>
    )
}