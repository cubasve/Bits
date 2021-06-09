import React from 'react';
import { Card } from '@material-ui/core';
import Battery20Icon from '@material-ui/icons/Battery20';

export default function getResponseBronze({ location }) {
    const { responseBronze } = location.state.habit;
    
    return (
        <div className="infoBorder">
            <Card>
                <div className='habit-icons'>
                    <Battery20Icon style={{ fontSize: 40, color: '#A0522D' }} />
                </div>
                <h1>3A: Response - Bronze</h1>
                <h3>{responseBronze}</h3>
            </Card>
        </div>
    )
}