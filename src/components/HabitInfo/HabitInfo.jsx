import React from 'react';
import Cue from '../Cue/Cue';
import Craving from '../Craving/Craving';
import ResponseBronze from '../ResponseBronze/ResponseBronze';
import ResponseSilver from '../ResponseSilver/ResponseSilver';
import ResponseGold from '../ResponseGold/ResponseGold';
import Reward from '../Reward/Reward';

import './HabitInfo.css';

export default function getHabitInfo({ location }) {
    
    return (
        <div className="HabitInfo">
            <Cue location={location} />
            <Craving location={location} />
            <ResponseBronze location={location} />
            <ResponseSilver location={location} />
            <ResponseGold location={location} />
            <Reward location={location} />
        </div>
    );
}