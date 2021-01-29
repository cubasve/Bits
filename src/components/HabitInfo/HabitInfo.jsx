import React from 'react';
import Cue from '../Cue/Cue';
import Craving from '../Craving/Craving';
import Response from '../Response/Response';
import Reward from '../Reward/Reward';

export default function getHabitInfo(props) {
    return (
        <>
            <Cue allHabits={props.allHabits} />
            <Craving allHabits={props.allHabits} />
            <Response allHabits={props.allHabits} />
            <Reward allHabits={props.allHabits} />
        </>
    );
}