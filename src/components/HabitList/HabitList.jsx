import React from 'react';
import HabitName from '../HabitName/HabitName';
import './HabitList.css';

export default function getHabitList({ 
    allHabits,
    handleShowHabit,
}) {
    return (
        <div className="habitlist">
            <HabitName 
                allHabits={allHabits} 
                handleShowHabit={handleShowHabit}
            />
        </div>
    );
}