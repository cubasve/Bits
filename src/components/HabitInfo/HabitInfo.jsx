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
                <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                    <div className='habit-icons'>
                        <WatchLater style={{ fontSize: 40, color: '#A0522D' }} />
                    </div>
                    <p className='habit-steps'>1. Cue</p>
                    <p className='habit-description'>
                        I will {cueBehavior} at {cueTime} in {cueLocation}
                    </p>
                </Card>
            </div>

            {/* CRAVING */}
            <div className='infoBorder'>
                <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                    <div className='habit-icons'>
                        <EmojiObjects  style={{ fontSize: 40, color: '#A0522D' }} />
                    </div>
                    <p className='habit-steps'>2. Craving</p>
                    <p className='habit-description'>
                        After {currentHabit}, I will {cueBehavior}
                    </p>
                </Card>
            </div>

            {/* RESPONSE BRONZE */}
            <div className='infoBorder'>
                <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                    <div className='habit-icons'>
                        <Battery20 style={{ fontSize: 40, color: '#A0522D' }} />
                    </div>
                    <p className='habit-steps'>3A: Response - Bronze</p>
                    <p className='habit-description'>{responseBronze}</p>
                </Card>
            </div>

            {/* RESPONSE SILVER */}
            <div className='infoBorder'>
                <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                    <div className='habit-icons'>
                        <Battery50 style={{ fontSize: 40, color: '#A0522D' }} />
                    </div>
                    <p className='habit-steps'>3B: Response - Silver</p>
                    <p className='habit-description'>{responseSilver}</p>
                </Card>
            </div>

            {/* RESPONSE GOLD */}
            <div className='infoBorder'>
                <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                    <div className='habit-icons'>
                        <BatteryFull style={{ fontSize: 40, color: '#A0522D' }} />
                    </div>
                    <p className='habit-steps'>3C: Response - Gold</p>
                    <p className='habit-description'>{responseGold}</p>
                </Card>
            </div>

            {/* REWARD */}
            <div className='infoBorder'>
                <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                    <div className='habit-icons'>
                        <EmojiEvents style={{ fontSize: 40, color: '#A0522D' }} />
                    </div>

                    <p className='habit-steps'>4. Reward</p>
                    <p className='habit-description'>
                        After {cueBehavior}, I will {wantedHabit}
                    </p>
                </Card>
            </div>
        </div>
    );
}