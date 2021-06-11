import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Button } from '@material-ui/core';
import './HomePage.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        width: 300,
    }

}))

export default function HomePage() {
    const classes = useStyles();
    return (
        <>
            <h1>BITS</h1>
            <h2>Habits are the compound interest of self-improvement.</h2>
            <Button 
                component={Link}
                to='/habitgenerator'
                variant='contained' 
                style={{ backgroundColor: 'maroon', color: 'white' }}>
                Get Started
            </Button>
            <div className="cards">
                <Card className={classes.card}>
                    <CardContent>
                        <h1 className="steps">1</h1>
                        <h1>CUE</h1>
                        <h3>Make It Obvious</h3>
                        <p>Notice the Reward</p>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <h1 className="steps">2</h1>
                        <h1>CRAVING</h1>
                        <h3>Make It Attractive</h3>
                        <p>Want the Reward</p>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <h1 className="steps">3</h1>
                        <h1>RESPONSE</h1>
                        <h3>Make It Easy</h3>
                        <p>Obtain the Reward</p>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <h1 className="steps">4</h1>
                        <h1>REWARD</h1>
                        <h3>Make It Satisfying</h3>
                        <p>Repeat the Habit Loop</p>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}