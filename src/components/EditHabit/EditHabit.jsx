import React, { useState } from 'react';
import { 
    Button, 
    Dialog, 
    ListItemText, 
    ListItem, 
    List, 
    Divider, 
    AppBar, 
    Toolbar, 
    IconButton, 
    Typography, 
    Slide, 
    TextField,
    FormControl } from '@material-ui/core';

export default function EditHabit({ handleHabitUpdate, location }) {

    const [habitData, setHabitData] = useState(location.state.habit);

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
            Edit Habit
            <form onSubmit={handleSubmit}>
            <List>
                        <ListItem>
                            <ListItemText 
                                primary="RESPONSE" 
                                secondary="Make It Easy - Obtain the Reward" 
                            />
                        </ListItem>
                        <ListItem>
                            BRONZE: 
                       
                                <TextField 
                                    id="outlined-basic" 
                                    label="Bronze"  
                                    name="responseBronze"
                                    value={habitData.responseBronze}
                                    onChange={handleChange} 
                                    required
                                    pattern=".{2,}"
                                />
                         
                        </ListItem>
                        <ListItem>
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
                      
                        </ListItem>
                        <ListItem>
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
                  
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary="CUE" secondary="Make It Obvious - Notice the Reward" />
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                {/* <h4>I will [BEHAVIOR] at [TIME] in [LOCATION]</h4> */}
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
                            {/* <ListItemText secondary="After [CURRENT HABIT], I will [HABIT I NEED]"/>     */}
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
                            {/* <h4>After [HABIT I NEED], I will [HABIT I WANT]</h4> */}
                            AFTER
                           
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
                        {/* <button onSubmit={handleHabitSubmit}>ADD HABIT</button> */}
                    </List>
            </form>
        </>
    );
}