import React, { useContext, useState } from 'react';
import HabitContext from '../../context/Habit';
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
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles (theme => ({
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

export default function HabitForm () {
    const { 
        newHabit, 
        handleInputChange, 
        handleHabitSubmit,
        habitFormRef,
        formValid, 
    } = useContext(HabitContext);

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add New Habit
            </Button>

            <FormControl ref={habitFormRef} onSubmit={handleHabitSubmit}>
                <Dialog 
                    fullScreen 
                    open={open} 
                    onClose={handleClose} 
                    TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton 
                                edge="start" 
                                color="inherit" 
                                onClick={handleClose} 
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Add a New Habit
                            </Typography>
                            <Button 
                                color="inherit" 
                                onClick={handleHabitSubmit}
                                disabled={formValid}
                            >
                                Save
                            </Button>
                        </Toolbar>
                    </AppBar>

                    <List>
                        <ListItem>
                            <ListItemText 
                                primary="RESPONSE" 
                                secondary="Make It Easy - Obtain the Reward" 
                            />
                        </ListItem>
                        <ListItem>
                            BRONZE: 
                            <form className={classes.userInput} noValidate autoComplete="off">
                                <TextField 
                                    id="outlined-basic" 
                                    label="Bronze"  
                                    name="responseBronze"
                                    value={newHabit.responseBronze}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                />
                            </form>
                        </ListItem>
                        <ListItem>
                            SILVER: 
                            <form className={classes.userInput} noValidate autoComplete="off">
                                <TextField 
                                    id="outlined-basic" 
                                    label="Silver" 
                                    variant="outlined" 
                                    name="responseSilver"
                                    value={newHabit.responseSilver}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                />
                            </form>
                        </ListItem>
                        <ListItem>
                        GOLD: 
                        <form className={classes.userInput} noValidate autoComplete="off">
                            <TextField 
                                id="outlined-basic" 
                                label="Gold" 
                                variant="outlined" 
                                name="responseGold"
                                value={newHabit.responseGold}
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
                                        required
                                        pattern=".{2,}"
                                    />
                                </form>
                                AT 
                                <form className={classes.userInput} noValidate>
                                <TextField
                                    id="time"
                                    label="Time"
                                    type="time"
                                    // variant="outlined"
                                    name="cueTime"
                                    value={newHabit.cueTime}
                                    onChange={handleInputChange}
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
                            <form className={classes.userInput} noValidate autoComplete="off">
                                <TextField 
                                    id="outlined-basic" 
                                    label="Current Habit" 
                                    // variant="outlined" 
                                    name="currentHabit"
                                    value={newHabit.currentHabit}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                />
                            </form>,
                            I WILL
                            <form className={classes.userInput} noValidate autoComplete="off">
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Habit I Need" 
                                        // variant="outlined" 
                                        name="cueBehavior"
                                        value={newHabit.cueBehavior}
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
                            <form className={classes.userInput} noValidate autoComplete="off">
                                <TextField 
                                    id="outlined-basic" 
                                    label="Habit I Need" 
                                    // variant="outlined" 
                                    name="cueBehavior"
                                    value={newHabit.cueBehavior}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
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
                                    required
                                    pattern=".{2,}"
                                />
                            </form>
                        </ListItem>
                        {/* <button onSubmit={handleHabitSubmit}>ADD HABIT</button> */}
                    </List>
                </Dialog>
            </FormControl>
        </>
    );
}