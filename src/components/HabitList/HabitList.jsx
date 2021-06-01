import React, { useEffect, useState } from 'react';
import HabitForm from '../../components/HabitForm/HabitForm';
import habitGeneratorService from '../../utils/habitGeneratorService';
import './HabitList.css';

import { Link } from 'react-router-dom';
import { 
    Button, 
    Card, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle,
    Divider,
    FormControl,
    List,
    ListItem,
    ListItemText,
    TextField
 } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function GetHabitList ({
    newHabit, 
    allHabits, 
    handleInputChange, 
    handleHabitSubmit,
    handleHabitDelete,
    handleShowHabit,
}) {

    // const [allHabits, setAllHabits] = useState([]);
    // const [newHabit, setNewHabit] = useState({
    //     responseBronze: '',
    //     responseSilver: '',
    //     responseGold: '',

    //     cueBehavior: '',
    //     cueTime: '',
    //     cueLocation: '',

    //     currentHabit: '',
    //     wantedHabit: '',
    // });

    // useEffect(async() => {
    //     try {
    //         await habitGeneratorService.showHabit()
    //         .then(data => {
    //             console.log('data/componentDidMount: ', data);
    //             setAllHabits(data.user.userHabitGenerator);
    //           });

    //     } catch (err) {
    //         console.error(err);
    //     }
    // }, []);

    // handleInputChange = (e) => {
    //     const newHabit = { ...this.state.newHabit, [e.target.name]: e.target.value };
    //     this.setState({ newHabit: newHabit });
    //   }

    // handleInputChange = (e) => {
    //     //const addHabit = { ...newHabit, [e.target.name]: e.target.value };
    //     setNewHabit({ ...newHabit, [e.target.name]: e.target.value });
    // }

    // MODAL
    const [ openDeleteDialog, setOpenDeleteDialog ] = useState(false);
    const [ openEditDialog, setOpenEditDialog ] = useState(false);

    const handleClickOpenDeleteDialog = () => {
        setOpenDeleteDialog(true);
    }

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    }

    const handleClickOpenEditDialog = () => {
        setOpenEditDialog(true);
    }

    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
    }

    return (
        <>
            <HabitForm 
                newHabit={newHabit} 
                allHabits={allHabits} 
                handleInputChange={handleInputChange} 
                handleHabitSubmit={handleHabitSubmit}
                //handleShowHabit={handleShowHabit}
            />

            <div className="HabitList">
                {allHabits.map((habit) => (
                    <Card key={habit._id}>
                        <Button /*onClick={handleShowHabit}*/>
                            <Link to={`/habitgenerator/${habit._id}`}>
                                    {habit.cueBehavior}
                            </Link>
                        </Button>

                        {/* EDIT */}
                        <Button onClick={handleClickOpenEditDialog}><EditIcon /></Button>
                        <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
                            <DialogTitle>EDIT HABIT</DialogTitle>
                            <DialogContent>
                                 {/* ENTER INPUT FORM  */}
                                <FormControl>
                                <List>
                                    <ListItem>
                                        <ListItemText 
                                            primary="RESPONSE" 
                                            secondary="Make It Easy - Obtain the Reward" 
                                        />
                                    </ListItem>
                                    <ListItem>
                                        BRONZE: 
                                        <form>
                                            <TextField 
                                                variant="outlined"
                                                id="outlined-basic" 
                                                label="Bronze"  
                                                name="responseBronze"
                                                value={habit.responseBronze}
                                                //onChange={handleInputChange} 
                                                required
                                                pattern=".{2,}"
                                            />
                                        </form>
                                    </ListItem>
                                    <ListItem>
                                        SILVER: 
                                        <form>
                                            <TextField 
                                                id="outlined-basic" 
                                                label="Silver" 
                                                variant="outlined" 
                                                name="responseSilver"
                                                value={habit.responseSilver}
                                                onChange={handleInputChange} 
                                                required
                                                pattern=".{2,}"
                                            />
                                        </form>
                                    </ListItem>
                                    <ListItem>
                                    GOLD: 
                                    <form noValidate autoComplete="off">
                                        <TextField 
                                            id="outlined-basic" 
                                            label="Gold" 
                                            variant="outlined" 
                                            name="responseGold"
                                            value={habit.responseGold}
                                            onChange={handleInputChange}
                                            required
                                            pattern=".{2,}"
                                        />
                                    </form>
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText primary="CUE" secondary="Make It Obvious - Notice the Reward" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            {/* <h4>I will [BEHAVIOR] at [TIME] in [LOCATION]</h4> */}
                                            I WILL 
                                            <form noValidate autoComplete="off">
                                                <TextField 
                                                    id="outlined-basic" 
                                                    label="Behavior" 
                                                    variant="outlined" 
                                                    name="cueBehavior"
                                                    value={habit.cueBehavior}
                                                    onChange={handleInputChange} 
                                                    required
                                                    pattern=".{2,}"
                                                />
                                            </form>
                                            AT 
                                            <form noValidate>
                                            <TextField
                                                id="time"
                                                label="Time"
                                                type="time"
                                                //variant="outlined"
                                                name="cueTime"
                                                value={habit.cueTime}
                                                //onChange={handleInputChange}
                                                required
                                                pattern=".{2,}"
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                                inputProps={{
                                                step: 300, // 5 min
                                                }}
                                            /> 
                                            </form>
                                            IN 
                                            <form noValidate autoComplete="off">
                                                <TextField 
                                                    id="outlined-basic" 
                                                    label="Location" 
                                                    variant="outlined" 
                                                    name="cueLocation"
                                                    value={habit.cueLocation}
                                                    onChange={handleInputChange} 
                                                    required
                                                    pattern=".{2,}"
                                                />
                                            </form>
                                        </ListItemText>
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText primary="CRAVING" secondary="Make It Attractive - Want the Reward" />
                                    </ListItem>
                                    <ListItem>
                                        {/* <ListItemText secondary="After [CURRENT HABIT], I will [HABIT I NEED]"/>     */}
                                        AFTER
                                        <form noValidate autoComplete="off">
                                            <TextField 
                                                id="outlined-basic" 
                                                label="Current Habit" 
                                                variant="outlined" 
                                                name="currentHabit"
                                                value={habit.currentHabit}
                                                onChange={handleInputChange} 
                                                required
                                                pattern=".{2,}"
                                            />
                                        </form>,
                                        I WILL
                                        <form noValidate autoComplete="off">
                                                <TextField 
                                                    id="outlined-basic" 
                                                    label="Habit I Need" 
                                                    variant="outlined" 
                                                    name="cueBehavior"
                                                    value={habit.cueBehavior}
                                                    onChange={handleInputChange} 
                                                    required
                                                    pattern=".{2,}"
                                                />
                                            </form>
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText primary="REWARD" secondary="Make It Satisfying - Want to Repeat the Habit Loop" />
                                    </ListItem>
                                    <ListItem>
                                        {/* <h4>After [HABIT I NEED], I will [HABIT I WANT]</h4> */}
                                        AFTER
                                        <form noValidate autoComplete="off">
                                            <TextField 
                                                id="outlined-basic" 
                                                label="Habit I Need" 
                                                variant="outlined" 
                                                name="cueBehavior"
                                                value={habit.cueBehavior}
                                                onChange={handleInputChange} 
                                                required
                                                pattern=".{2,}"
                                            />
                                        </form>,
                                        I WILL
                                        <form noValidate autoComplete="off">
                                            <TextField 
                                                id="outlined-basic" 
                                                label="Habit I Want" 
                                                variant="outlined" 
                                                name="wantedHabit"
                                                value={habit.wantedHabit}
                                                onChange={handleInputChange} 
                                                required
                                                pattern=".{2,}"
                                            />
                                        </form>
                                    </ListItem>
                                    {/* <button onSubmit={handleHabitSubmit}>ADD HABIT</button> */}
                                </List>
                                 </FormControl>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseEditDialog}>Cancel</Button>
                                <Button 
                                    color="primary"
                                    autoFocus
                                    onClick={handleCloseEditDialog}
                                >
                                    Save Changes
                                </Button>
                            </DialogActions>
                        </Dialog>

                        {/* DELETE */}
                        <Button onClick={handleClickOpenDeleteDialog}><DeleteIcon /></Button>
                        <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
                            <DialogTitle>DELETE HABIT</DialogTitle>
                            <DialogContent /*dividers*/>
                                <DialogContentText>
                                    Are you sure you want to delete this habit?
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
                                <Button 
                                    color="primary" 
                                    autoFocus
                                    onClick={() => {
                                        handleHabitDelete(habit._id);
                                        handleCloseDeleteDialog();
                                    }}
                                >
                                    Delete
                                </Button>
                            </DialogActions>
                        </Dialog>
                        {/* <Button onClick={() => handleHabitDelete(habit._id)}><DeleteIcon /></Button> */}
                    </Card>
                    
                ))}
            </div>
        </>
    )
}