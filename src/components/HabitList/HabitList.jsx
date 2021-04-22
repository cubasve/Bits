import React, { useState } from 'react';
import HabitForm from '../../components/HabitForm/HabitForm';
import './HabitList.css';

import { Link } from 'react-router-dom';
import { 
    Button, 
    Card, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

// function deleteHabitDialog({ handleHabitDelete }) {
//     const [ open, setOpen ] = useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     }

//     const handleClose = () => {
//         setOpen(false);
//     }

//     return (
//         <>
//             <Button onClick={handleClickOpen}>Open alert dialog</Button>
//             <Dialog 
//                 open={open}
//                 onClose={handleClose}
//             >
//                 <DialogTitle>Delete Habit</DialogTitle>
//                 <DialogContentText>Are you sure you want to delete this habit?</DialogContentText>
//                 <DialogActions>
//                     <Button onClick={handleClose}>Cancel</Button>
//                     <Button onClick={handleHabitDelete}>Delete</Button>
//                 </DialogActions>
//             </Dialog>

//         </>
//     )
// }

export default function GetHabitList ({
    newHabit, 
    allHabits, 
    handleInputChange, 
    handleHabitSubmit,
    handleHabitDelete,
    handleShowHabit,
}) {
    const [ open, setOpen ] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <HabitForm 
                newHabit={newHabit} 
                allHabits={allHabits} 
                handleInputChange={handleInputChange} 
                handleHabitSubmit={handleHabitSubmit}
                handleShowHabit={handleShowHabit}
            />

            <div className="HabitList">
                {allHabits.map((habit) => (
                    <Card key={habit._id}>
                        <Button onClick={handleShowHabit} key={habit._id}>
                            <Link to={`/habitgenerator/${habit._id}`}>
                                    {habit.cueBehavior}
                            </Link>
                        </Button>

                        <Button><EditIcon /></Button>
                        <Button onClick={handleClickOpen}><DeleteIcon /></Button>
                        <Dialog 
                            open={open}
                            onClose={handleClose}
                        >
                            <DialogTitle>Delete Habit</DialogTitle>
                            <DialogContentText>Are you sure you want to delete this habit?</DialogContentText>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={() => handleHabitDelete(habit._id)}>Delete</Button>
                            </DialogActions>
                        </Dialog>
                        {/* <Button onClick={() => handleHabitDelete(habit._id)}><DeleteIcon /></Button> */}
                    </Card>
                    
                ))}
            </div>
        </>
    )
}