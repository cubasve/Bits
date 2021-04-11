import React from 'react';
import HabitName from '../HabitName/HabitName';
import './HabitList.css';

export default function getHabitList({allHabits}) {
    return (
        <div className="habitlist">
            <HabitName allHabits={allHabits} />
        </div>
    );
}