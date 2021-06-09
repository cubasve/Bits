import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService.js';
import UserContext from '../../context/User';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, FormControl, InputAdornment, TextField } from '@material-ui/core';
import { AccountCircle, Email, Lock } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
}));

export default function SignupForm({ history, updateMessage }) {
    const classes = useStyles();

    const [ credentials, setCredentials ] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    });

    const { handleSignupOrLogin } = useContext(UserContext);

    const handleChange = (e) => {
        updateMessage('');
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.signup(credentials);
            handleSignupOrLogin();
            history.push('/habitgenerator');
        } catch (err) {
            //Invalid user data (probably duplicate email)
            updateMessage(err.message);
        }
    }
    
    function isFormInvalid() {
        return !(
            credentials.name &&
            credentials.email &&
            credentials.password === credentials.passwordConfirmation
        );
    }

    return (
        <>
            <header className="auth-header">SIGN UP</header>

            <FormControl onSubmit={handleSubmit}>
                <div className={classes.margin}>
                    <TextField
                        label="Name"
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={credentials.name}
                        onChange={handleChange}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                    />
                </div>
                <div className={classes.margin}>
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={handleChange}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Email />
                            </InputAdornment>
                        ),
                        }}
                    />
                </div>
                <div className={classes.margin}>
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        ),
                        }}
                    />
                </div>
                <div className={classes.margin}>
                    <TextField
                        label="Password Confirmation"
                        name="passwordConfirmation"
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={credentials.passwordConfirmation}
                        onChange={handleChange}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        ),
                        }}
                    />
                </div>
                <Button 
                    type='submit'
                    variant='contained' 
                    style={{ backgroundColor: '#F4A460'}}
                    disabled={isFormInvalid()}
                    onClick={handleSubmit}
                    className={classes.margin}
                >
                    Sign Up
                </Button>

                <Link to='/' className='cancel'>Cancel</Link>
                <Divider />
                <Link to='/login' className='cancel'>Login</Link>
            </FormControl>
        </>
    );
}