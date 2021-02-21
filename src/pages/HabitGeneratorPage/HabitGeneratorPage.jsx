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

export default function HabitGeneratorPage(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleInputChange = (e) => {
        console.log('e.target.value: ', e.target.value);
        console.log('e.target.name: ', e.target.name)
        // const newEarnedIncome = { ...this.state.newEarnedIncome, [e.target.name]: e.target.value }
        setInput(e.target.value);
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
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Save
                        </Button>
                    </Toolbar>
                </AppBar>

                <List>
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
                                name="Bronze"
                                value={input} 
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
                                value={input} 
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
                                value={input} 
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
                                    value={input} 
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
                                value={input} 
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
                                    value={input} 
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
                                value={input} 
                                onChange={handleInputChange} 
                            />
                        </form>,
                        I WILL
                        <form className={classes.userInput} noValidate autoComplete="off">
                            <TextField 
                                id="outlined-basic" 
                                label="Habit I Need" 
                                // variant="outlined" 
                                value={input} 
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
                                value={input} 
                                onChange={handleInputChange} 
                            />
                        </form>,
                        I WILL
                        <form className={classes.userInput} noValidate autoComplete="off">
                            <TextField 
                                id="outlined-basic" 
                                label="Habit I Want" 
                                // variant="outlined" 
                                value={input} 
                                onChange={handleInputChange} 
                            />
                        </form>
                    </ListItem>
                </List>
            </Dialog>

            <HabitList allHabits={props.allHabits} />
            <HabitInfo allHabits={props.allHabits} />
        </div>
    )

}