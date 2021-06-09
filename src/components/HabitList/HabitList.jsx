import React, { useCallback, useContext, useEffect, useState } from 'react';
import HabitForm from '../../components/HabitForm/HabitForm';
import habitGeneratorService from '../../utils/habitGeneratorService';
import HabitContext from '../../context/Habit';
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
 } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function GetHabitList ({ location }) {

    const { 
        allHabits, 
        setAllHabits, 
        // handleInputChange, 
        // handleHabitSubmit, 
        handleHabitDelete 
    } = useContext(HabitContext);

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

           <HabitForm />

            {allHabits.map((habit) => (
                <Card key={habit._id} variant='outlined'>
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
                    <Button>
                        <Link to={{
                            pathname: `/habitgenerator/${habit._id}/edit`,
                            state: { habit },
                        }}>
                            <EditIcon style={{ color: 'black' }} />
                        </Link>
                    </Button>
                    
                    {/* DELETE */}
                    <Button onClick={handleClickOpenDeleteDialog}>
                        <DeleteIcon style={{ color: 'black' }} />
                    </Button>
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
                </Card>
            ))}
        </div>
    );
}