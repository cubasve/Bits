import React from 'react';
import HabitName from '../HabitName/HabitName';

export default function getHabitList(props) {
    return (
        <>
            <HabitName allHabits={props.allHabits} />
        </>
    );
}