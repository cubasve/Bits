import React from 'react';
import { Card } from '@material-ui/core';

export default function getCraving({ habit: { currentHabit, cueBehavior } }) {
    return (
        <div className="infoBorder">
            <Card>
                <h1>Craving</h1>
                <h3>After {currentHabit}, I will {cueBehavior}</h3>
            </Card>
        </div>
    );
}