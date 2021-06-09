import React from 'react';
import { Card } from '@material-ui/core';
import { 
    Battery20, 
    Battery50, 
    BatteryFull, 
    EmojiEvents,
    EmojiObjects, 
    WatchLater 
}  from '@material-ui/icons';
import './HabitInfo.css';

export default function getHabitInfo({ location }) {
    const { 
        cueBehavior, 
        cueTime, 
        cueLocation, 
        currentHabit, 
        responseBronze, 
        responseSilver,
        responseGold,
        wantedHabit
    } = location.state.habit;
    
    return (
        <div className="HabitInfo">
            {/* CUE */}
            <div className='infoBorder'>
                <Card>
                    <div className='habit-icons'>
                        <WatchLater style={{ fontSize: 40, color: '#A0522D' }} />
                    </div>
                    <h1>1. Cue</h1>
                    <h3>
                        I will {cueBehavior} at {cueTime} in {cueLocation}
                    </h3>
                </Card>
            </div>

            {/* CRAVING */}
            <div className='infoBorder'>
                <Card>
                    <div className='habit-icons'>
                        <EmojiObjects  style={{ fontSize: 40, color: '#A0522D' }} />
                    </div>
                    <h1>2. Craving</h1>
                    <h3>After {currentHabit}, I will {cueBehavior}</h3>
                </Card>
            </div>

            {/* RESPONSE BRONZE */}
            <div className='infoBorder'>
                <Card>
                    <div className='habit-icons'>
                        <Battery20 style={{ fontSize: 40, color: '#A0522D' }} />
                    </div>
                    <h1>3A: Response - Bronze</h1>
                    <h3>{responseBronze}</h3>
                </Card>
            </div>

            {/* RESPONSE SILVER */}
            <div className='infoBorder'>
                <Card>
                    <div className='habit-icons'>
                        <Battery50 style={{ fontSize: 40, color: '#A0522D' }} />
                    </div>
                    <h1>3B: Response - Silver</h1>
                    <h3>{responseSilver}</h3>
                </Card>
            </div>

            {/* RESPONSE GOLD */}
            <div className='infoBorder'>
                <Card>
                    <div className='habit-icons'>
                        <BatteryFull style={{ fontSize: 40, color: '#A0522D' }} />
                    </div>
                    <h1>3C: Response - Gold</h1>
                    <h3>{responseGold}</h3>
                </Card>
            </div>

            {/* REWARD */}
            <div className='infoBorder'>
                <Card>
                    <div className='habit-icons'>
                        <EmojiEvents style={{ fontSize: 40, color: '#A0522D' }} />
                    </div>

                    <h1>4. Reward</h1>
                    <h3>After {cueBehavior}, I will {wantedHabit}</h3>
                </Card>
            </div>
        </div>
    );
}