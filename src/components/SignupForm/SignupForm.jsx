import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService.js';
import UserContext from '../../context/User';
import { Button, FormControl, InputAdornment, TextField } from '@material-ui/core';
import { AccountCircle, Email, Lock } from '@material-ui/icons';

export default function SignupForm({ history, updateMessage }) {
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
            history.push('/');
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
            <header className="header-footer">SIGN UP</header>

            <FormControl className="form-horizontal" onSubmit={handleSubmit}>
                {/* <div className="form-group">
                    <div className="col-sm-12"> */}
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
                    {/* </div>
                </div> */}
                <br />
                {/* <div className="form-group">
                    <div className="col-sm-12"> */}
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
                    {/* </div>
                </div> */}
                <br />
                {/* <div className="form-group">
                    <div className="col-sm-12"> */}
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
                    {/* </div>
                </div> */}
                <br />
                {/* <div className="form-group">
                    <div className="col-sm-12"> */}
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
                    {/* </div>
                </div> */}
                <br />
                {/* <div className="form-group">
                    <div className="col-sm-12 text-center"> */}
                        <Button 
                            variant='contained' 
                            color='primary' 
                            disabled={isFormInvalid()}
                        >
                            Sign Up
                        </Button>
                        <Link to="/">Cancel</Link>
                    {/* </div>
                </div> */}
            </FormControl>
        </>
    );
}