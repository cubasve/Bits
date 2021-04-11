import React from 'react';
//import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './HabitName.css';

export default function getHabitName({ allHabits }) {
    return (
        <>
            <h2>Habit Names:</h2>
            {allHabits.map(habit => (
                <div key={habit.cueBehavior} className="individualHabit">
                    <button>{habit.cueBehavior}</button>
                    <button><EditIcon /></button>
                    <button><DeleteIcon /></button>
                </div>
            ))}
        </>
    )
}