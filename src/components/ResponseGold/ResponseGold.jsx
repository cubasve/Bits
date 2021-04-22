import React from 'react';
import { Card } from '@material-ui/core';

export default function getResponse ({ habit: { responseGold } }) 
{
    return (
        <div className="infoBorder">
            <Card>
                <h1>Response: Gold</h1>
                <h3>{responseGold}</h3>
            </Card>
        </div>
    )
}