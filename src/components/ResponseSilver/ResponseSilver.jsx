import React from 'react';
import { Card } from '@material-ui/core';
import Battery50Icon from '@material-ui/icons/Battery50';

export default function getResponseBronze({ location }) {
    const { responseSilver } = location.state.habit;
    
    return (
        <div className="infoBorder">
            <Card>
                <div className='habit-icons'>
                    <Battery50Icon style={{ fontSize: 40, color: '#A0522D' }} />
                </div>
                <h1>3B: Response - Silver</h1>
                <h3>{responseSilver}</h3>
            </Card>
        </div>
    )
}