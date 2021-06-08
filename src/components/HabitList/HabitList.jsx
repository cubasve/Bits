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
    // Divider,
    // FormControl,
    // List,
    // ListItem,
    // ListItemText,
    // TextField
 } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function GetHabitList ({
    newHabit, 
    allHabits, 
    setAllHabits,
    handleInputChange, 
    handleHabitSubmit,
    handleHabitDelete,
    // handleHabitUpdate,
    // location,
}) {

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await habitGeneratorService.showHabit();
                setAllHabits(data.user.userHabitGenerator);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, [ setAllHabits ]);

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
            <HabitForm 
                newHabit={newHabit} 
                allHabits={allHabits} 
                handleInputChange={handleInputChange} 
                handleHabitSubmit={handleHabitSubmit}
            />

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
                        {/* <Button onClick={() => handleHabitDelete(habit._id)}><DeleteIcon /></Button> */}
                    </Card>
                    
                ))}
            </div>
        </>
    )
}