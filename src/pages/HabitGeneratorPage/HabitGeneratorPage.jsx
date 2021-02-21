import React, {useState} from 'react';
import HabitList from '../../components/HabitList/HabitList';
import HabitInfo from '../../components/HabitInfo/HabitInfo';
import { Button, Dialog, ListItemText, ListItem, List, Divider, AppBar, Toolbar, IconButton, Typography, Slide, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    userInput: {
        display: 'inline',
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
});

export default function HabitGeneratorPage({newHabit, allHabits, handleInputChange, handleHabitSubmit}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add New Habit
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton >
                        <Typography variant="h6" className={classes.title}>
                            Add a New Habit
                        </Typography>
                        <Button 
                            autoFocus 
                            color="inherit" 
                            onSubmit={handleHabitSubmit} 
                            onClick={handleClose}
                        >
                            Save
                        </Button>
                    </Toolbar>
                </AppBar>

                <List>
                    <ListItem>
                        HABIT NAME: 
                        <form className={classes.userInput} noValidate autoComplete="off">
                            <TextField 
                                id="outlined-basic" 
                                label="Habit Name"  
                                // variant="outlined" 
                                name="name"
                                value={newHabit.name}
                                onChange={handleInputChange} 
                            />
                        </form>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="RESPONSE" secondary="Make It Easy - Obtain the Reward" />
                        {/* <h4>BRONZE: 2-minute rule (bare minimum)</h4>
                        <h4>SILVER: 50%</h4>
                        <h4>GOLD: full habit</h4> */}
                    </ListItem>
                    <ListItem>
                        BRONZE: 
                        <form className={classes.userInput} noValidate autoComplete="off">
                            <TextField 
                                id="outlined-basic" 
                                label="Bronze"  
                                // variant="outlined" 
                                name="responseBronze"
                                value={newHabit.responseBronze}
                                onChange={handleInputChange} 
                            />
                        </form>
                    </ListItem>
                    <ListItem>
                        SILVER: 
                        <form className={classes.userInput} noValidate autoComplete="off">
                            <TextField 
                                id="outlined-basic" 
                                label="Silver" 
                                // variant="outlined" 
                                name="responseSilver"
                                value={newHabit.responseSilver}
                                onChange={handleInputChange} 
                            />
                        </form>
                    </ListItem>
                    <ListItem>
                        GOLD: 
                        <form className={classes.userInput} noValidate autoComplete="off">
                            <TextField 
                                id="outlined-basic" 
                                label="Gold" 
                                // variant="outlined" 
                                name="responseGold"
                                value={newHabit.responseGold}
                                onChange={handleInputChange}
                            />
                        </form>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="CUE" secondary="Make It Obvious - Notice the Reward" />
                    </ListItem>
                    <ListItem>
                        <ListItemText className={classes.userInput}>
                            {/* <h4>I will [BEHAVIOR] at [TIME] in [LOCATION]</h4> */}
                            I WILL 
                            <form className={classes.userInput} noValidate autoComplete="off">
                                <TextField 
                                    id="outlined-basic" 
                                    label="Behavior" 
                                    // variant="outlined" 
                                    name="cueBehavior"
                                    value={newHabit.cueBehavior}
                                    onChange={handleInputChange} 
                                />
                            </form>
                            AT 
                            <form className={classes.userInput} noValidate>
                            <TextField
                                id="time"
                                label="Time"
                                type="time"
                                defaultValue="07:30"
                                // variant="outlined"
                                name="cueTime"
                                value={newHabit.cueTime}
                                onChange={handleInputChange}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                inputProps={{
                                step: 300, // 5 min
                                }}
                            /> 
                            </form>
                            IN 
                            <form className={classes.userInput} noValidate autoComplete="off">
                                <TextField 
                                    id="outlined-basic" 
                                    label="Location" 
                                    // variant="outlined" 
                                    name="cueLocation"
                                    value={newHabit.cueLocation}
                                    onChange={handleInputChange} 
                                />
                            </form>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="CRAVING" secondary="Make It Attractive - Want the Reward" />
                    </ListItem>
                    <ListItem>
                        {/* <h4>After [CURRENT HABIT], I will [HABIT I NEED]</h4> */}
                        AFTER
                        <form className={classes.userInput} noValidate autoComplete="off">
                            <TextField 
                                id="outlined-basic" 
                                label="Current Habit" 
                                // variant="outlined" 
                                name="currentHabit"
                                value={newHabit.currentHabit}
                                onChange={handleInputChange} 
                            />
                        </form>,
                        I WILL
                        <form className={classes.userInput} noValidate autoComplete="off">
                            <TextField 
                                id="outlined-basic" 
                                label="Habit I Need" 
                                // variant="outlined" 
                                name="neededHabit"
                                value={newHabit.neededHabit}
                                onChange={handleInputChange} 
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
                        <form className={classes.userInput} noValidate autoComplete="off">
                            <TextField 
                                id="outlined-basic" 
                                label="Habit I Need" 
                                // variant="outlined" 
                                name="neededHabit"
                                value={newHabit.neededHabit}
                                onChange={handleInputChange} 
                            />
                        </form>,
                        I WILL
                        <form className={classes.userInput} noValidate autoComplete="off">
                            <TextField 
                                id="outlined-basic" 
                                label="Habit I Want" 
                                // variant="outlined" 
                                name="wantedHabit"
                                value={newHabit.wantedHabit}
                                onChange={handleInputChange} 
                            />
                        </form>
                    </ListItem>
                </List>
            </Dialog>

            <HabitList allHabits={allHabits} />
            <HabitInfo allHabits={allHabits} />
        </div>
    )

}