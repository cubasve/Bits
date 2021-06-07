import React from 'react';
import { Card } from '@material-ui/core';

export default function getResponseBronze({ location }) {
    const { responseSilver } = location.state.habit;
    
    return (
        <div className="infoBorder">
            <Card>
                <h1>Response: Silver</h1>
                <h3>{responseSilver}</h3>
            </Card>
        </div>
    )
}