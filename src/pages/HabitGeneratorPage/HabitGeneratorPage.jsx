import React from 'react';
import HabitList from '../../components/HabitList/HabitList';
import HabitInfo from '../../components/HabitInfo/HabitInfo';
import HabitForm from '../../components/HabitForm/HabitForm';

export default function HabitGeneratorPage({
    newHabit, 
    allHabits, 
    handleInputChange, 
    handleHabitSubmit}) {
    return (
        <>
            <HabitForm 
                newHabit={newHabit} 
                allHabits={allHabits} 
                handleInputChange={handleInputChange} 
                handleHabitSubmit={handleHabitSubmit}
            />
            <HabitList allHabits={allHabits} />
            <HabitInfo allHabits={allHabits} />
        </>
    )
}