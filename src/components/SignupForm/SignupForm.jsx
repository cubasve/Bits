import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService.js';
import UserContext from '../../context/User';

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
            <header className="header-footer">Sign Up</header>

            <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={credentials.name}
                            name="name"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={credentials.email}
                            name="email"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={credentials.password}
                            name="password"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={credentials.passwordConfirmation}
                            name="passwordConfirmation"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12 text-center">
                        <button className="btn btn-default" disabled={isFormInvalid()}>
                            Sign Up
                        </button>
                        &nbsp;&nbsp;
                        <Link to="/">Cancel</Link>
                    </div>
                </div>
            </form>
        </>
    );
}