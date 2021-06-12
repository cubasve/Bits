import React, { useContext, useState } from 'react';
import HabitContext from '../context/Habit';
import { 
    Button, 
    //Card, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle,
 } from '@material-ui/core';

export default function ConfirmDialog({ 
        habit,
        onConfirm,
        openDeleteDialog, 
        setOpenDeleteDialog,
}) {
    const {  handleHabitDelete } = useContext(HabitContext);
    //console.log('habit dialog: ', habit);

    // const [ openDeleteDialog, setOpenDeleteDialog ] = useState(false);

    // const handleClickOpenDeleteDialog = () => {
    //     setOpenDeleteDialog(true);
    // }

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    }

    return (
        <>
             <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
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
                            onConfirm();
                            handleCloseDeleteDialog();
                        }}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}