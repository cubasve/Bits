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

export default function EditHabit({ match, location }) {
    //const { id } = match.params; //match.params.id
    //const specificHabit = allHabits.find(habit => habit._id === id);
    //console.log('id: ', id);
    //console.log('Specific habit: ', allHabits.find(habit => habit._id === id));
    //console.log('location: ', location);

    const [habitData, setHabitData] = useState(location.state)

    return (
        <>
        hi
        </>
    );
    //     <>
    //         <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
    //             <DialogTitle>EDIT HABIT</DialogTitle>
    //             <DialogContent>
    //                     {/* ENTER INPUT FORM  */}
    //                 <FormControl>
    //                 <List>
    //                     <ListItem>
    //                         <ListItemText 
    //                             primary="RESPONSE" 
    //                             secondary="Make It Easy - Obtain the Reward" 
    //                         />
    //                     </ListItem>
    //                     <ListItem>
    //                         BRONZE: 
    //                         <form>
    //                             <TextField 
    //                                 variant="outlined"
    //                                 id="outlined-basic" 
    //                                 label="Bronze"  
    //                                 name="responseBronze"
    //                                 //placeholder={habit.responseBronze}
    //                                 value={habit.responseBronze}
    //                                 onChange={handleHabitUpdateChange} 
    //                                 required
    //                                 pattern=".{2,}"
    //                             />
    //                         </form>
    //                     </ListItem>
    //                     <ListItem>
    //                         SILVER: 
    //                         <form>
    //                             <TextField 
    //                                 id="outlined-basic" 
    //                                 label="Silver" 
    //                                 variant="outlined" 
    //                                 name="responseSilver"
    //                                 value={habit.responseSilver}
    //                                 onChange={handleInputChange} 
    //                                 required
    //                                 pattern=".{2,}"
    //                             />
    //                         </form>
    //                     </ListItem>
    //                     <ListItem>
    //                     GOLD: 
    //                     <form noValidate autoComplete="off">
    //                         <TextField 
    //                             id="outlined-basic" 
    //                             label="Gold" 
    //                             variant="outlined" 
    //                             name="responseGold"
    //                             value={habit.responseGold}
    //                             onChange={handleInputChange}
    //                             required
    //                             pattern=".{2,}"
    //                         />
    //                     </form>
    //                     </ListItem>
    //                     <Divider />
    //                     <ListItem>
    //                         <ListItemText primary="CUE" secondary="Make It Obvious - Notice the Reward" />
    //                     </ListItem>
    //                     <ListItem>
    //                         <ListItemText>
    //                             {/* <h4>I will [BEHAVIOR] at [TIME] in [LOCATION]</h4> */}
    //                             I WILL 
    //                             <form noValidate autoComplete="off">
    //                                 <TextField 
    //                                     id="outlined-basic" 
    //                                     label="Behavior" 
    //                                     variant="outlined" 
    //                                     name="cueBehavior"
    //                                     value={habit.cueBehavior}
    //                                     onChange={handleInputChange} 
    //                                     required
    //                                     pattern=".{2,}"
    //                                 />
    //                             </form>
    //                             AT 
    //                             <form noValidate>
    //                             <TextField
    //                                 id="time"
    //                                 label="Time"
    //                                 type="time"
    //                                 //variant="outlined"
    //                                 name="cueTime"
    //                                 value={habit.cueTime}
    //                                 //onChange={handleInputChange}
    //                                 required
    //                                 pattern=".{2,}"
    //                                 InputLabelProps={{
    //                                 shrink: true,
    //                                 }}
    //                                 inputProps={{
    //                                 step: 300, // 5 min
    //                                 }}
    //                             /> 
    //                             </form>
    //                             IN 
    //                             <form noValidate autoComplete="off">
    //                                 <TextField 
    //                                     id="outlined-basic" 
    //                                     label="Location" 
    //                                     variant="outlined" 
    //                                     name="cueLocation"
    //                                     value={habit.cueLocation}
    //                                     onChange={handleInputChange} 
    //                                     required
    //                                     pattern=".{2,}"
    //                                 />
    //                             </form>
    //                         </ListItemText>
    //                     </ListItem>
    //                     <Divider />
    //                     <ListItem>
    //                         <ListItemText primary="CRAVING" secondary="Make It Attractive - Want the Reward" />
    //                     </ListItem>
    //                     <ListItem>
    //                         {/* <ListItemText secondary="After [CURRENT HABIT], I will [HABIT I NEED]"/>     */}
    //                         AFTER
    //                         <form noValidate autoComplete="off">
    //                             <TextField 
    //                                 id="outlined-basic" 
    //                                 label="Current Habit" 
    //                                 variant="outlined" 
    //                                 name="currentHabit"
    //                                 value={habit.currentHabit}
    //                                 onChange={handleInputChange} 
    //                                 required
    //                                 pattern=".{2,}"
    //                             />
    //                         </form>,
    //                         I WILL
    //                         <form noValidate autoComplete="off">
    //                                 <TextField 
    //                                     id="outlined-basic" 
    //                                     label="Habit I Need" 
    //                                     variant="outlined" 
    //                                     name="cueBehavior"
    //                                     value={habit.cueBehavior}
    //                                     onChange={handleInputChange} 
    //                                     required
    //                                     pattern=".{2,}"
    //                                 />
    //                             </form>
    //                     </ListItem>
    //                     <Divider />
    //                     <ListItem>
    //                         <ListItemText primary="REWARD" secondary="Make It Satisfying - Want to Repeat the Habit Loop" />
    //                     </ListItem>
    //                     <ListItem>
    //                         {/* <h4>After [HABIT I NEED], I will [HABIT I WANT]</h4> */}
    //                         AFTER
    //                         <form noValidate autoComplete="off">
    //                             <TextField 
    //                                 id="outlined-basic" 
    //                                 label="Habit I Need" 
    //                                 variant="outlined" 
    //                                 name="cueBehavior"
    //                                 value={habit.cueBehavior}
    //                                 onChange={handleInputChange} 
    //                                 required
    //                                 pattern=".{2,}"
    //                             />
    //                         </form>,
    //                         I WILL
    //                         <form noValidate autoComplete="off">
    //                             <TextField 
    //                                 id="outlined-basic" 
    //                                 label="Habit I Want" 
    //                                 variant="outlined" 
    //                                 name="wantedHabit"
    //                                 value={habit.wantedHabit}
    //                                 onChange={handleInputChange} 
    //                                 required
    //                                 pattern=".{2,}"
    //                             />
    //                         </form>
    //                     </ListItem>
    //                     {/* <button onSubmit={handleHabitSubmit}>ADD HABIT</button> */}
    //                 </List>
    //                     </FormControl>
    //             </DialogContent>
    //             <DialogActions>
    //                 <Button onClick={handleCloseEditDialog}>Cancel</Button>
    //                 <Button 
    //                     color="primary"
    //                     autoFocus
    //                     onClick={() => {
    //                         handleHabitUpdateSubmit();
    //                         handleCloseEditDialog();
    //                     }}
    //                 >
    //                     Save Changes
    //                 </Button>
    //             </DialogActions>
    //         </Dialog>
    //     </>
    // );
}