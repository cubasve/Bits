import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';
//import { Button, InputAdornment, TextField } from '@material-ui/core';
//import { AccountCircle } from '@material-ui/icons';

// export default function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     useEffect(() => {

//     }, [email, password]);


//     handleChange = (e) => {
//         setEmail()
//     }
// }

export default class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //Update to call login instead of signup
            await userService.login(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div className="LoginPage">
                <header className="header-footer">Log In</header>
                <br />
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="col-sm-12">
                            {/* <TextField 
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={this.state.email}
                                name="email"
                                onChange={this.handleChange}
                                // InputProps={{
                                //     startAdornoment: (
                                //         <InputAdornment position="start">
                                //             <AccountCircle />
                                //         </InputAdornment>
                                //     ),
                                // }}
                                // id="input-with-icon-textfield"
                                label="Email"
                                variant="outlined"
                            /> */}
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={this.state.email}
                                name="email"
                                onChange={this.handleChange}
                            /> 
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <div className="col-sm-12">
                            {/* <TextField 
                                type="password"
                                className="form-control"
                                //placeholder="Password"
                                value={this.state.password}
                                name="password"
                                onChange={this.handleChange}
                                variant="outlined"
                                label="Password"
                            /> */}
                             <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={this.state.password}
                                name="password"
                                onChange={this.handleChange}
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
}