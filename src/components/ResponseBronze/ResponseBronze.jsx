import React from 'react';
import { Card } from '@material-ui/core';

export default function getResponseBronze({ habit: { responseBronze } }) 
{
    return (
        <div className="infoBorder">
            <Card>
                <h1>Response: Bronze</h1>
                <h3>{responseBronze}</h3>
            </Card>
        </div>
    )
}