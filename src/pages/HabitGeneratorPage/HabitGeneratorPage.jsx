import React from 'react';
import HabitList from '../../components/HabitList/HabitList';
import HabitInfo from '../../components/HabitInfo/HabitInfo';
import HabitForm from '../../components/HabitForm/HabitForm';
import './HabitGenerator.css';

import Cue from '../../components/Cue/Cue';
import Craving from '../../components/Craving/Craving';
import Response from '../../components/Response/Response';
import Reward from '../../components/Reward/Reward';

export default function HabitGeneratorPage({
    newHabit, 
    allHabits, 
    handleInputChange, 
    handleHabitSubmit,
    handleHabitDelete
}) {
    return (
        <>
            <HabitForm 
                newHabit={newHabit} 
                allHabits={allHabits} 
                handleInputChange={handleInputChange} 
                handleHabitSubmit={handleHabitSubmit}
            />
            <div className="HabitGeneratorPage">
                <HabitList allHabits={allHabits} handleHabitDelete={handleHabitDelete}/>
                {/* <HabitInfo allHabits={allHabits} /> */}
                <div className="habitSteps">
                    <Cue allHabits={allHabits} />
                    <Craving allHabits={allHabits} />
                    <Response allHabits={allHabits} />
                    <Reward allHabits={allHabits} />
                </div>
            </div>
        </>
    )
}