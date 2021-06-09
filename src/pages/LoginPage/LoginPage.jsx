import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';
import UserContext from '../../context/User';
import { Button, FormControl, InputAdornment, TextField } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';

export default function LoginPage({ history }) {

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
            history.push('/');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="LoginPage">
            <header className="header-footer">LOG IN</header>
            <br />
            <FormControl className="form-horizontal" onSubmit={handleSubmit}>
                {/* <div className="form-group">
                    <div className="col-sm-12"> */}
                        <TextField
                            //className={classes.margin}
                            //id="input-with-icon-textfield"
                            label="Email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            value={credentials.email}
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
                            //className={classes.margin}
                            //id="input-with-icon-textfield"
                            label="Password"
                            type="password"
                            name="password"
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
                    <div className="col-sm-12 text-center"> */}
                        <Button variant='contained' color='primary'>Log In</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Link to="/">Cancel</Link>
                    {/* </div>
                </div> */}
            </FormControl>
        </div>
    );
}