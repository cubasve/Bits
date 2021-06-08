import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';
import UserContext from '../../context/User';
//import { Button, InputAdornment, TextField } from '@material-ui/core';
//import { AccountCircle } from '@material-ui/icons';

export default function LoginPage({ /*handleSignupOrLogin,*/ history }) {

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
            history.push("/");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="LoginPage">
            <header className="header-footer">Log In</header>
            <br />
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input 
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            value={credentials.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <div className="col-sm-12">
                        <input 
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <div className="col-sm-12 text-center">
                        <button>Log In</button>
                        &nbsp;&nbsp;&nbsp;
                        <button><Link to="/">Cancel</Link></button>
                    </div>
                </div>
            </form>
        </div>
    );
}