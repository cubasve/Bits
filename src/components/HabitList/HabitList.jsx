import React, { useCallback, useContext, useEffect, useState } from 'react';
import habitGeneratorService from '../../utils/habitGeneratorService';
import HabitContext from '../../context/Habit';
import UserContext from '../../context/User';
import './HabitList.css';
import ConfirmDialog from '../ConfirmDialog';

import { Link } from 'react-router-dom';
import { 
    Button, 
    Card, 
    // Dialog, 
    // DialogActions, 
    // DialogContent, 
    // DialogContentText, 
    // DialogTitle,
    Grid,
 } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function GetHabitList ({ location }) {

    const { 
        allHabits, 
        setAllHabits, 
        handleHabitDelete 
    } = useContext(HabitContext);
    const { user } = useContext(UserContext);

    const [isLoading, setIsLoading] = useState(true);

    const fetchData = useCallback( async() => {
        try {
            const data = await habitGeneratorService.showHabit();
            setAllHabits(data.user.userHabitGenerator);
        } catch (err) {
            console.error(err);
        }
    }, [setAllHabits]);

    useEffect(() => {
       if (isLoading) {
           fetchData();
           setIsLoading(false);
       }
    }, [ fetchData, isLoading ]);

    // MODAL
    const [ openDeleteDialog, setOpenDeleteDialog ] = useState(false);

    const handleClickOpenDeleteDialog = () => {
        setOpenDeleteDialog(true);
    }

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    }

    return (
        <div className="HabitList">

            <Grid>
                {user.name}'s Habits
            </Grid>

            {allHabits.map((habit) => (
                <Card key={habit.cueBehavior} variant='outlined'>
                    <Button>
                        <Link 
                            to={{
                                pathname: `/habitgenerator/${habit._id}`,
                                state: { habit }
                            }}
                            className='habit-name'
                        >       
                            {habit.cueBehavior}
                        </Link>
                    </Button>

                    {/* EDIT */}
                    <Button
                        component={Link}
                        to={{
                            pathname: `/habitgenerator/${habit._id}/edit`,
                            state: { habit },
                        }}>
                            <EditIcon style={{ color: 'black' }} />
                    </Button>
                    
                    {/* DELETE */}
                    <Button 
                        onClick={() => setOpenDeleteDialog(true)}
                        //onClick={() => handleHabitDelete(habit._id)}
                    >
                        <DeleteIcon style={{ color: 'black' }} />
                    </Button>
                    <ConfirmDialog 
                        openDeleteDialog={openDeleteDialog}
                        setOpenDeleteDialog={setOpenDeleteDialog}
                        habit={habit}
                        onConfirm={() => handleHabitDelete(habit._id)}
                    />
                    {/* <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
                        <DialogTitle>Delete Habit</DialogTitle>
                        <DialogContent dividers>
                            <DialogContentText>
                                Are you sure you want to delete the habit named {habit.cueBehavior} {habit._id}?
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
                    </Dialog> */}
                </Card>
            ))}
        </div>
    );
}