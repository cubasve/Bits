import React, { useContext, useState } from 'react';
import { HabitContext } from '../../context/HabitContext';
import { Link } from 'react-router-dom';
import { 
    Button, 
    Popover, 
    TextField, 
    Typography 
} from '@material-ui/core';
import { Card } from '@material-ui/core';
import { 
    Battery20, 
    Battery50, 
    BatteryFull, 
    EmojiEvents,
    EmojiObjects, 
    WatchLater,
    InfoSharp,
}  from '@material-ui/icons';
import './HabitForm.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '18ch',
        },
    },
    button: {
        margin: theme.spacing(2),
    },
    typography: {
        padding: theme.spacing(2),
        width: '300px',
    },
}));

export default function HabitForm () {
    const { 
        newHabit, 
        handleInputChange, 
        handleHabitSubmit,
        habitFormRef,
        formValid, 
    } = useContext(HabitContext);
    //console.log('habitFormRef: ', habitFormRef.current);

    const classes = useStyles();
    const [cuePopoverEl, setCuePopoverEl] = useState(null);
    const [cravingPopoverEl, setCravingPopoverEl] = useState(null);
    const [responseBronzePopoverEl, setResponseBronzePopoverEl] = useState(null);
    const [responseSilverPopoverEl, setResponseSilverPopoverEl] = useState(null);
    const [responseGoldPopoverEl, setResponseGoldPopoverEl] = useState(null);
    const [rewardPopoverEl, setRewardPopoverEl] = useState(null);

    // CUE
    const handleCuePopoverClick = e => {
        setCuePopoverEl(e.currentTarget);
    }

    const handleCuePopoverClose = () => {
        setCuePopoverEl(null);
    }

    const cueOpen = Boolean(cuePopoverEl);
    const cueId = cueOpen ? 'simple-popover' : undefined;

    //CRAVING
    const handleCravingPopoverClick = e => {
        setCravingPopoverEl(e.currentTarget);
    }

    const handleCravingPopoverClose = () => {
        setCravingPopoverEl(null);
    }

    const cravingOpen = Boolean(cravingPopoverEl);
    const cravingId = cravingOpen ? 'simple-popover' : undefined;

    //RESPONSE BRONZE
    const handleResponseBronzePopoverClick = e => {
        setResponseBronzePopoverEl(e.currentTarget);
    }

    const handleResponseBronzePopoverClose = () => {
        setResponseBronzePopoverEl(null);
    }

    const responseBronzeOpen = Boolean(responseBronzePopoverEl);
    const bronzeId = responseBronzeOpen ? 'simple-popover' : undefined;

    //RESPONSE SILVER
    const handleResponseSilverPopoverClick = e => {
        setResponseSilverPopoverEl(e.currentTarget);
    }

    const handleResponseSilverPopoverClose = () => {
        setResponseSilverPopoverEl(null);
    }

    const responseSilverOpen = Boolean(responseSilverPopoverEl);
    const silverId = responseSilverOpen ? 'simple-popover' : undefined;

    //RESPONSE GOLD
    const handleResponseGoldPopoverClick = e => {
        setResponseGoldPopoverEl(e.currentTarget);
    }

    const handleResponseGoldPopoverClose = () => {
        setResponseGoldPopoverEl(null);
    }

    const responseGoldOpen = Boolean(responseGoldPopoverEl);
    const goldId = responseGoldOpen ? 'simple-popover' : undefined;

    //REWARD
    const handleRewardPopoverClick = e => {
        setRewardPopoverEl(e.currentTarget);
    }

    const handleRewardPopoverClose = () => {
        setRewardPopoverEl(null);
    }

    const rewardOpen = Boolean(rewardPopoverEl);
    const rewardId = rewardOpen  ? 'simple-popover' : undefined;

    return (
        <>
            <Typography variant='h5'>ADD A NEW HABIT</Typography>
            <form className={classes.root} ref={habitFormRef} onSubmit={handleHabitSubmit}>
                <div className="EditHabitInfo">
                    {/* CUE */}
                    <div className='create-infoBorder'>
                        <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                            <span className='habit-create-icons'>
                                <p className='habit-create-steps'>
                                    <Button disabled>
                                        <WatchLater 
                                            style={{ 
                                                fontSize: 25, 
                                                color: 'maroon', 
                                            }} 
                                        />
                                    </Button>
                                    1. Cue
                                    <Button 
                                        aria-describedby={cueId} 
                                        onClick={handleCuePopoverClick}
                                    >
                                        <InfoSharp />
                                    </Button>
                                    <Popover
                                        id={cueId}
                                        open={cueOpen}
                                        anchorEl={cuePopoverEl}
                                        onClose={handleCuePopoverClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <Typography className={classes.typography}>
                                            <strong>Notice the reward: </strong>
                                            The 2 most common cues are time and location.
                                            People who make a specific plan for when and where 
                                            they will perform a new habit are more likely to follow 
                                            through. Don't leave it up to chance and hope we will 
                                            just remember to do it or feel motivated at the right time.
                                        </Typography>
                                    </Popover>
                                </p>
                            </span>
                            <div className='habit-example'>
                                Ex: I will 
                                <span className='habit-inputs'> exercise </span> at 
                                <span className='habit-inputs'> 7.00pm </span> in 
                                <span className='habit-inputs'> my house (living room)</span>.
                            </div>
                            <p className='habit-create-description'>
                                <span className='create-text'>I WILL </span>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Behavior" 
                                    variant="outlined" 
                                    name="cueBehavior"
                                    value={newHabit.cueBehavior}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                                <span className='create-text'> AT </span>
                                <TextField
                                    id="time"
                                    label="Time"
                                    type="time"
                                    variant="outlined"
                                    name="cueTime"
                                    value={newHabit.cueTime}
                                    onChange={handleInputChange}
                                    required
                                    pattern=".{2,}"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                    size='small'
                                /> 
                                <span className='create-text'> IN </span>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Location" 
                                    variant="outlined" 
                                    name="cueLocation"
                                    value={newHabit.cueLocation}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                            </p>
                        </Card>
                    </div>

                    {/* CRAVING */}
                    <div className='create-infoBorder'>
                        <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                            <span className='habit-create-icons'>
                                <p className='habit-create-steps'>
                                    <Button disabled>
                                        <EmojiObjects 
                                            style={{ 
                                                fontSize: 28, 
                                                color: 'maroon' 
                                            }} 
                                        />
                                    </Button>
                                    2. Craving
                                    <Button 
                                        aria-describedby={cravingId} 
                                        onClick={handleCravingPopoverClick}
                                    >
                                        <InfoSharp />
                                    </Button>
                                    <Popover
                                        id={cravingId}
                                        open={cravingOpen}
                                        anchorEl={cravingPopoverEl}
                                        onClose={handleCravingPopoverClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <Typography className={classes.typography}>
                                            <strong>Want the reward: </strong>
                                            Pair an action you WANT to do with an action you NEED to do.
                                            We often decide what to do next based on what we have just finished doing.
                                            No behavior happens in isolation.
                                            Each action becomes a cue that triggers the next behavior.
                                            Idenify a current habit you already do each day and then stack your new behavior on top.
                                        </Typography>
                                    </Popover>
                                </p>
                            </span>
                            <div className='habit-example'>
                                Ex: After I 
                                <span className='habit-inputs'> watch my tv show </span> , I will
                                <span className='habit-inputs'> exercise </span>.
                            </div>
                            <p className='habit-create-description'>
                                <span className='create-text'>AFTER </span>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Current Habit" 
                                    variant="outlined" 
                                    name="currentHabit"
                                    value={newHabit.currentHabit}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                                <span className='create-text'> ,</span>
                                <br />
                                <span className='create-text'> I WILL </span>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Habit I Need" 
                                    variant="outlined" 
                                    name="cueBehavior"
                                    value={newHabit.cueBehavior}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                            </p>
                        </Card>
                    </div>

                    {/* REWARD BRONZE */}
                    <div className='create-infoBorder'>
                        <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                            <span className='habit-create-icons'>
                                <p className='habit-create-steps'>
                                    <Button disabled>
                                        <Battery20 
                                            style={{ 
                                                fontSize: 25, 
                                                color: 'maroon' 
                                            }} 
                                        />
                                    </Button>
                                    3A. Response - Bronze
                                    <Button 
                                        aria-describedby={bronzeId} 
                                        onClick={handleResponseBronzePopoverClick}
                                    >
                                        <InfoSharp />
                                    </Button>
                                    <Popover
                                        id={bronzeId}
                                        open={responseBronzeOpen}
                                        anchorEl={responseBronzePopoverEl}
                                        onClose={handleResponseBronzePopoverClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <Typography className={classes.typography}>
                                            <strong>Use the 2-Minute Rule:  </strong>
                                            When starting a new habit or on unmotivating days, complete your habit in less than 2 minutes.
                                            Your goal might be to run a marathon, but your gateway habit is to put on your running shoes.
                                            It's better to do less than you hoped than to do nothing at all.
                                            Ex. Write 1 sentence, open your study notes, etc.
                                        </Typography>
                                    </Popover>
                                </p>
                            </span>

                            <div className='habit-example'>
                                Ex:  
                                <span className='habit-inputs'> 30 Jumping Jacks </span> 
                            </div>

                            <p className='habit-create-description'>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Bronze" 
                                    variant="outlined" 
                                    name="responseBronze"
                                    value={newHabit.responseBronze}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                            </p>
                        </Card>
                    </div>

                    {/* REWARD SILVER */}
                    <div className='create-infoBorder'>
                        <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                            <span className='habit-create-icons'>
                                <p className='habit-create-steps'>
                                    <Button disabled>
                                        <Battery50 
                                            style={{ 
                                                fontSize: 25, 
                                                color: 'maroon' 
                                            }} 
                                        />
                                    </Button>
                                    3B. Response - Silver
                                    <Button 
                                        aria-describedby={silverId} 
                                        onClick={handleResponseSilverPopoverClick}
                                    >
                                        <InfoSharp />
                                    </Button>
                                    <Popover
                                        id={silverId}
                                        open={responseSilverOpen}
                                        anchorEl={responseSilverPopoverEl}
                                        onClose={handleResponseSilverPopoverClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <Typography className={classes.typography}>
                                            <strong>Advance to intermediate steps: </strong>
                                            Always stay below the point where the habit feels like work.
                                            Stop before it seems like a hassle. 
                                            Master the habit of showing up: 
                                            A habit must be established before it can be improved.
                                            Ex. Write 1 paragraph, study for 15 min, etc.
                                        </Typography>
                                    </Popover>
                                </p>
                            </span>

                            <div className='habit-example'>
                                Ex:  
                                <span className='habit-inputs'> 15 minute workout </span> 
                            </div>

                            <p className='habit-create-description'>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Silver" 
                                    variant="outlined" 
                                    name="responseSilver"
                                    value={newHabit.responseSilver}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                            </p>
                        </Card>
                    </div>

                    {/* REWARD GOLD */}
                    <div className='create-infoBorder'>
                        <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                            <span className='habit-create-icons'>
                                <p className='habit-create-steps'>
                                    <Button disabled>
                                        <BatteryFull 
                                            style={{ 
                                                fontSize: 25, 
                                                color: 'maroon' 
                                            }} 
                                        />
                                    </Button>
                                    3C. Response - Gold
                                    <Button 
                                        aria-describedby={goldId} 
                                        onClick={handleResponseGoldPopoverClick}
                                    >
                                        <InfoSharp />
                                    </Button>
                                    <Popover
                                        id={goldId}
                                        open={responseGoldOpen}
                                        anchorEl={responseGoldPopoverEl}
                                        onClose={handleResponseGoldPopoverClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <Typography className={classes.typography}>
                                            <strong>Keep advancing: </strong>
                                            Once we've established the habit and showing up each day,
                                            combine the 2-minute rule with habit shaping to scale the habit back up 
                                            toward your ultimate goal.
                                            Nearly any larger life goal can be transformed into a 2-minute behavior.
                                            Ex. Write 1,000 words, study for 3 hours, etc.
                                        </Typography>
                                    </Popover>
                                </p>
                            </span>

                            <div className='habit-example'>
                                Ex: 
                                <span className='habit-inputs'> 30 minute workout</span> 
                            </div>

                            <p className='habit-create-description'>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Gold" 
                                    variant="outlined" 
                                    name="responseGold"
                                    value={newHabit.responseGold}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                            </p>
                        </Card>
                    </div>

                    {/* REWARD */}
                    <div className='create-infoBorder'>
                        <Card variant='outlined' style={{ backgroundColor: 'beige'}}>
                            <span className='habit-create-icons'>
                                <p className='habit-create-steps'>
                                    <Button disabled>
                                        <EmojiEvents 
                                            style={{ 
                                                fontSize: 25, 
                                                color: 'maroon' 
                                            }} 
                                        />
                                    </Button>
                                    4. Reward
                                    <Button 
                                        aria-describedby={rewardId} 
                                        onClick={handleRewardPopoverClick}
                                    >
                                        <InfoSharp />
                                    </Button>
                                    <Popover
                                        id={rewardId}
                                        open={rewardOpen}
                                        anchorEl={rewardPopoverEl}
                                        onClose={handleRewardPopoverClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <Typography className={classes.typography}>
                                            <strong>Repeat the habit: </strong>
                                            We're more likely to repeat a behavior when the experience is satisfying.
                                            Give yourself an immediate reward when you complete your habit.
                                            Pleasure teaches your brain that a behavior is worth remembering and repeating.
                                            When is reward is repeated. What is punished is avoided.
                                        </Typography>
                                    </Popover>
                                </p>
                            </span>

                            <div className='habit-example'>
                                Ex: After I 
                                <span className='habit-inputs'> exercise </span> , I will 
                                <span className='habit-inputs'> shower </span>.
                            </div>

                            <p className='habit-create-description'>
                                <span className='create-text'>AFTER </span>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Habit I Need" 
                                    variant="outlined" 
                                    name="cueBehavior"
                                    value={newHabit.cueBehavior}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                                <span className='create-text'> ,</span>
                                <br />
                                <span className='create-text'> I WILL </span>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Habit I Want" 
                                    variant="outlined" 
                                    name="wantedHabit"
                                    value={newHabit.wantedHabit}
                                    onChange={handleInputChange} 
                                    required
                                    pattern=".{2,}"
                                    size='small'
                                />
                            </p>
                        </Card>
                    </div>
                </div>

                <Button 
                    onClick={handleHabitSubmit} 
                    variant='contained' 
                    style={{ backgroundColor: 'maroon', color: 'white' }}
                    className={classes.button}
                >
                    Add New Habit
                </Button>
                <Button 
                    component={Link} 
                    to='/' 
                    variant='contained'
                    className={classes.button}
                >
                    Cancel
                </Button>
            </form>
        </>
    );
}