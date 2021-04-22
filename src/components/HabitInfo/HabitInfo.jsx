import React from 'react';
import Cue from '../Cue/Cue';
import Craving from '../Craving/Craving';
import ResponseBronze from '../ResponseBronze/ResponseBronze';
import ResponseSilver from '../ResponseSilver/ResponseSilver';
import ResponseGold from '../ResponseGold/ResponseGold';
import Reward from '../Reward/Reward';

import './HabitInfo.css';

export default function getHabitInfo({ allHabits, match }) {
    const { id } = match.params; //match.params.id
    const specificHabit = allHabits.find(habit => habit._id === id)
    console.log('id: ', id);
    console.log('Specific habit: ', allHabits.find(habit => habit._id === id));
    
    return (
        <div className="HabitInfo">
            <Cue habit={specificHabit} />
            <Craving habit={specificHabit} />
            <ResponseBronze habit={specificHabit} />
            <ResponseSilver habit={specificHabit} />
            <ResponseGold habit={specificHabit} />
            <Reward habit={specificHabit} />
        </div>
    );
}