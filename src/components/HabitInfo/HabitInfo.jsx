import React from 'react';
import Cue from '../Cue/Cue';
import Craving from '../Craving/Craving';
import Response from '../Response/Response';
import Reward from '../Reward/Reward';

export default function getHabitInfo({ allHabits, match }) {
    const { id } = match.params; //match.params.id
    const specificHabit = allHabits.find(habit => habit._id === id)
    console.log('id: ', id);
    console.log('Specific habit: ', allHabits.find(habit => habit._id === id));
    
    return (
        <>
            <p>Hello</p>
            <Cue allHabits={allHabits} habit={specificHabit} />
            <Craving allHabits={allHabits} habit={specificHabit} />
            <Response allHabits={allHabits} habit={specificHabit} />
            <Reward allHabits={allHabits} habit={specificHabit} />
        </>
    );
}