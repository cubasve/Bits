import React from 'react';
import { Card } from '@material-ui/core';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';

export default function getResponse ({ location }) {
    const { responseGold } = location.state.habit;
    
    return (
        <div className="infoBorder">
            <Card>
                <div className='habit-icons'>
                    <BatteryFullIcon style={{ fontSize: 40, color: '#A0522D' }} />
                </div>
                <h1>3C: Response - Gold</h1>
                <h3>{responseGold}</h3>
            </Card>
        </div>
    )
}