import React, { useContext, useState } from 'react';
import HabitContext from '../../context/Habit';
import { Link } from 'react-router-dom';
import { 
    Button, 
    ListItemText, 
    ListItem, 
    List, 
    Divider, 
    TextField,
    FormControl } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { 
    Battery20, 
    Battery50, 
    BatteryFull, 
    EmojiEvents,
    EmojiObjects, 
    WatchLater 
}  from '@material-ui/icons';
import './HabitForm.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '18ch',
        },
    },
    button: {
        margin: theme.spacing(2),
    }
}));

export default function HabitForm () {
    const { 
        newHabit, 
        handleInputChange, 
        handleHabitSubmit,
        // habitFormRef,
        // formValid, 
    } = useContext(HabitContext);

    const classes = useStyles();

    return(
        <>
            <form className={classes.root} onSubmit={handleHabitSubmit}>
                <Button 
                    onClick={handleHabitSubmit} 
                    variant='contained' 
                    style={{ backgroundColor: '#A0522D', color: 'white' }}
                    className={classes.button}
                >
                    Add New Habit
                </Button>
                <Button 
                    component={Link} 
                    to='/' 
                    variant='contained'
                    className={classes.button}
                >
                    Cancel
                </Button>

                <div className="EditHabitInfo">
                    {/* CUE */}
                    <div className='edit-infoBorder'>
                        <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                            <div className='habit-edit-icons'>
                                <WatchLater style={{ fontSize: 40, color: '#A0522D' }} />
                            </div>
                            <p className='habit-edit-steps'>1. Cue</p>
                            <p className='habit-edit-description'>
                                <span className='edit-text'>I WILL </span>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Behavior" 
                                    variant="outlined" 
                                    name="cueBehavior"
                                    value={newHabit.cueBehavior}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                                <span className='edit-text'> AT </span>
                                <TextField
                                    id="time"
                                    label="Time"
                                    type="time"
                                    variant="outlined"
                                    name="cueTime"
                                    value={newHabit.cueTime}
                                    onChange={handleInputChange}
                                    required
                                    pattern=".{2,}"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                    size='small'
                                /> 
                                <span className='edit-text'> IN </span>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Location" 
                                    variant="outlined" 
                                    name="cueLocation"
                                    value={newHabit.cueLocation}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                            </p>
                        </Card>
                    </div>

                    {/* CRAVING */}
                    <div className='edit-infoBorder'>
                        <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                            <div className='habit-edit-icons'>
                                <EmojiObjects style={{ fontSize: 40, color: '#A0522D' }} />
                            </div>
                            <p className='habit-edit-steps'>2. Craving</p>
                            <p className='habit-edit-description'>
                                <span className='edit-text'>AFTER </span>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Current Habit" 
                                    variant="outlined" 
                                    name="currentHabit"
                                    value={newHabit.currentHabit}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                                <span className='edit-text'> ,</span>
                                <br />
                                <span className='edit-text'> I WILL </span>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Habit I Need" 
                                    variant="outlined" 
                                    name="cueBehavior"
                                    value={newHabit.cueBehavior}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                            </p>
                        </Card>
                    </div>

                    {/* REWARD BRONZE */}
                    <div className='edit-infoBorder'>
                        <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                            <div className='habit-edit-icons'>
                                <Battery20 style={{ fontSize: 40, color: '#A0522D' }} />
                            </div>
                            <p className='habit-edit-steps'>3A. Response - Bronze</p>
                            <p className='habit-edit-description'>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Bronze" 
                                    variant="outlined" 
                                    name="responseBronze"
                                    value={newHabit.responseBronze}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                            </p>
                        </Card>
                    </div>

                    {/* REWARD SILVER */}
                    <div className='edit-infoBorder'>
                        <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                            <div className='habit-edit-icons'>
                                <Battery50 style={{ fontSize: 40, color: '#A0522D' }} />
                            </div>
                            <p className='habit-edit-steps'>3B. Response - Silver</p>
                            <p className='habit-edit-description'>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Silver" 
                                    variant="outlined" 
                                    name="responseSilver"
                                    value={newHabit.responseSilver}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                            </p>
                        </Card>
                    </div>

                    {/* REWARD GOLD */}
                    <div className='edit-infoBorder'>
                        <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                            <div className='habit-edit-icons'>
                                <BatteryFull style={{ fontSize: 40, color: '#A0522D' }} />
                            </div>
                            <p className='habit-edit-steps'>3C. Response - Gold</p>
                            <p className='habit-edit-description'>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Gold" 
                                    variant="outlined" 
                                    name="responseGold"
                                    value={newHabit.responseGold}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                            </p>
                        </Card>
                    </div>

                    {/* REWARD */}
                    <div className='edit-infoBorder'>
                        <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                            <div className='habit-edit-icons'>
                                <EmojiEvents style={{ fontSize: 40, color: '#A0522D' }} />
                            </div>
                            <p className='habit-edit-steps'>4. Reward</p>
                            <p className='habit-edit-description'>
                                <span className='edit-text'>AFTER </span>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Habit I Need" 
                                    variant="outlined" 
                                    name="cueBehavior"
                                    value={newHabit.cueBehavior}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                                <span className='edit-text'> ,</span>
                                <br />
                                <span className='edit-text'> I WILL </span>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Habit I Want" 
                                    variant="outlined" 
                                    name="wantedHabit"
                                    value={newHabit.wantedHabit}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                            </p>
                        </Card>
                    </div>
                </div>
            </form>
        </>
    );
}