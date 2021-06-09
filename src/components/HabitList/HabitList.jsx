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
    // Divider,
    // FormControl,
    // List,
    // ListItem,
    // ListItemText,
    // TextField
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
            console.log('data: ', data);
            setAllHabits(data.user.userHabitGenerator);
            console.log('data.user.userHabitGenerator', data.user.userHabitGenerator)
            console.log('allHabits: ', allHabits);
        } catch (err) {
            console.error(err);
        }
    }, [allHabits, setAllHabits]);

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
        <>
            <HabitForm />

            <div className="HabitList">
                {allHabits.map((habit) => (
                    <Card key={habit._id}>
                        <Button>
                            <Link to={{
                                pathname: `/habitgenerator/${habit._id}`,
                                state: { habit }
                            }}
                            >
                                    {habit.cueBehavior}
                            </Link>
                        </Button>

                        {/* EDIT */}
                        <Button><Link to={{
                            pathname: `/habitgenerator/${habit._id}/edit`,
                            state: { habit },
                        }}>
                            <EditIcon />
                        </Link></Button>
                        

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
                    </Card>
                ))}
            </div>
        </>
    );
}