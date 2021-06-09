import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import HabitContext from '../../context/Habit';
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
import './EditHabit.css';

export default function EditHabit({ location }) {

    const [habitData, setHabitData] = useState(location.state.habit);

    const { handleHabitUpdate } = useContext(HabitContext);

    const handleChange = e => {
        const formData = {...habitData, [e.target.name]: e.target.value };
        setHabitData(formData);
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleHabitUpdate(habitData);
    }

    return (
        <>
            <FormControl onSubmit={handleSubmit}>
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
                            value={habitData.cueBehavior}
                            onChange={handleChange} 
                            required
                            pattern=".{2,}"
                            size='small'
                        />
                        <span className='edit-text'> AT </span>
                        <TextField
                            id="time"
                            label="Time"
                            type="time"
                            //variant="outlined"
                            name="cueTime"
                            value={habitData.cueTime}
                            onChange={handleChange}
                            required
                            pattern=".{2,}"
                            // className={classes.userInput}
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
                            value={habitData.cueLocation}
                            onChange={handleChange} 
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
                            value={habitData.currentHabit}
                            onChange={handleChange} 
                            required
                            pattern=".{2,}"
                            size='small'
                        />
                        <span className='edit-text'> , I WILL </span>
                        <TextField 
                            id="outlined-basic" 
                            label="Habit I Need" 
                            variant="outlined" 
                            name="cueBehavior"
                            value={habitData.cueBehavior}
                            onChange={handleChange} 
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
                            value={habitData.responseBronze}
                            onChange={handleChange} 
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
                            value={habitData.responseSilver}
                            onChange={handleChange} 
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
                            value={habitData.responseGold}
                            onChange={handleChange} 
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
                            value={habitData.cueBehavior}
                            onChange={handleChange} 
                            required
                            pattern=".{2,}"
                            size='small'
                        />
                        <span className='edit-text'> , I WILL </span>
                        <TextField 
                            id="outlined-basic" 
                            label="Habit I Want" 
                            variant="outlined" 
                            name="wantedHabit"
                            value={habitData.wantedHabit}
                            onChange={handleChange} 
                            required
                            pattern=".{2,}"
                            size='small'
                        />
                    </p>
                </Card>
            </div>


        </div>
            {/* <List>
                        <ListItem>
                            <ListItemText 
                                primary="RESPONSE" 
                                secondary="Make It Easy - Obtain the Reward" 
                            />
                        </ListItem>
                        <span>
                            BRONZE: 
                                <TextField 
                                    id="outlined-basic" 
                                    label="Bronze"  
                                    variant="outlined"
                                    name="responseBronze"
                                    value={habitData.responseBronze}
                                    onChange={handleChange} 
                                    required
                                    pattern=".{2,}"
                                />
                         
                        </span>
                        <span>
                            SILVER: 
                            
                                <TextField 
                                    id="outlined-basic" 
                                    label="Silver" 
                                    variant="outlined" 
                                    name="responseSilver"
                                    value={habitData.responseSilver}
                                    onChange={handleChange} 
                                    required
                                    pattern=".{2,}"
                                />
                      
                        </span>
                        <span>
                        GOLD: 
                    
                            <TextField 
                                id="outlined-basic" 
                                label="Gold" 
                                variant="outlined" 
                                name="responseGold"
                                value={habitData.responseGold}
                                onChange={handleChange}
                                required
                                pattern=".{2,}"
                            />
                  
                        </span>
                        <Divider />
                        <ListItem>
                            <ListItemText primary="CUE" secondary="Make It Obvious - Notice the Reward" />
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                I WILL 
                               
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Behavior" 
                                        // variant="outlined" 
                                        name="cueBehavior"
                                        value={habitData.cueBehavior}
                                        onChange={handleChange} 
                                        required
                                        pattern=".{2,}"
                                    />
                            
                                AT 
                              
                                <TextField
                                    id="time"
                                    label="Time"
                                    type="time"
                                    // variant="outlined"
                                    name="cueTime"
                                    value={habitData.cueTime}
                                    onChange={handleChange}
                                    required
                                    pattern=".{2,}"
                                    // className={classes.userInput}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    inputProps={{
                                    step: 300, // 5 min
                                    }}
                                /> 
                           
                                IN 
      
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Location" 
                                        // variant="outlined" 
                                        name="cueLocation"
                                        value={habitData.cueLocation}
                                        onChange={handleChange} 
                                        required
                                        pattern=".{2,}"
                                    />
                            
                            </ListItemText>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary="CRAVING" secondary="Make It Attractive - Want the Reward" />
                        </ListItem>
                        <ListItem>
                            AFTER
                           
                                <TextField 
                                    id="outlined-basic" 
                                    label="Current Habit" 
                                    // variant="outlined" 
                                    name="currentHabit"
                                    value={habitData.currentHabit}
                                    onChange={handleChange} 
                                    required
                                    pattern=".{2,}"
                                />
                           ,
                            I WILL
                            
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Habit I Need" 
                                        // variant="outlined" 
                                        name="cueBehavior"
                                        value={habitData.cueBehavior}
                                        onChange={handleChange} 
                                        required
                                        pattern=".{2,}"
                                    />
                               
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary="REWARD" secondary="Make It Satisfying - Want to Repeat the Habit Loop" />
                        </ListItem>
                        <ListItem>
                            AFTER
                           
                                <TextField 
                                    id="outlined-basic" 
                                    label="Habit I Need" 
                                    //variant="outlined" 
                                    name="cueBehavior"
                                    value={habitData.cueBehavior}
                                    onChange={handleChange} 
                                    required
                                    pattern=".{2,}"
                                />
                            ,
                            I WILL
                            
                                <TextField 
                                    id="outlined-basic" 
                                    label="Habit I Want" 
                                    // variant="outlined" 
                                    name="wantedHabit"
                                    value={habitData.wantedHabit}
                                    onChange={handleChange} 
                                    required
                                    pattern=".{2,}"
                                />
                        
                        </ListItem>
                        <Button onClick={handleSubmit}>SAVE HABIT</Button>
                        <Link to='/habitgenerator'>Cancel</Link>
                    </List> */}
            </FormControl>
        </>
    );
}