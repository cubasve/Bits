import React from 'react';
import './Cue.css';

export default function getCue({ habit: {cueBehavior, cueTime, cueLocation } }) {
    return (
        <div className="infoBorder">
            <h1>Cue</h1>
            <h3>
                I will {cueBehavior} at {cueTime} in {cueLocation}
            </h3>
        </div>
    );
}