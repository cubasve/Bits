import React from 'react';
import { Card } from '@material-ui/core';

export default function getResponseBronze({ habit: { responseSilver } }) 
{
    return (
        <div className="infoBorder">
            <Card>
                <h1>Response: Silver</h1>
                <h3>{responseSilver}</h3>
            </Card>
        </div>
    )
}