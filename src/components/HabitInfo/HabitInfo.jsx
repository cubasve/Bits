import React from 'react';
import Cue from '../Cue/Cue';
import Craving from '../Craving/Craving';
import Response from '../Response/Response';
import Reward from '../Reward/Reward';

import './HabitInfo.css';

export default function getHabitInfo({allHabits}) {
    return (
        <div className="habitInfo">
            <Cue allHabits={allHabits} />
            <Craving allHabits={allHabits} />
            <Response allHabits={allHabits} />
            <Reward allHabits={allHabits} />
        </div>
    );
}