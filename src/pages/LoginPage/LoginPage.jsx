import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';
import UserContext from '../../context/User';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, FormControl, Grid, TextField } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
}));

export default function LoginPage({ history }) {
    const classes = useStyles();

    const [credentials, setCredentials ] = useState({
        email: '',
        password: '',
    });
    const { handleSignupOrLogin } = useContext(UserContext);

    const handleChange = (e) => {
        const loginValues = {...credentials, [e.target.name]: e.target.value };
        setCredentials(loginValues);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(credentials);
            handleSignupOrLogin();
            history.push('/habitgenerator');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="LoginPage">
            <header className="auth-header">LOG IN</header>
            <FormControl onSubmit={handleSubmit}>
                <div className={classes.margin}>
                    <Grid container spacing={1} alignItems='flex-end'>
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField 
                                label='Email'
                                type='email'
                                name='email'
                                value={credentials.email}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.margin}>
                    <Grid container spacing={1} alignItems='flex-end'>
                        <Grid item>
                            <Lock />
                        </Grid>
                        <Grid item>
                            <TextField 
                                label='Password'
                                type='password'
                                name='password'
                                value={credentials.password}
                                onChange={handleChange}
                                size='medium'
                            />
                        </Grid>
                    </Grid>
                </div>
        
                <Button 
                    type='submit'
                    variant='contained' 
                    color='primary'
                    onClick={handleSubmit}
                    className={classes.margin}
                >
                    Log In
                </Button>
                <Link to='/' className='cancel'>Cancel</Link>
                <Divider />
                <Link to='/signup' className='cancel'>Sign Up</Link>
            </FormControl>
        </div>
    );
}