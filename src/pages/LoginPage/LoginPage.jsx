import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
// import './LoginPage.css';

export default class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
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
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-default">Log In</button>
                            <Link to="/">Cancel</Link>
                            <Link to="/signup">Don't have an account? Sign up!</Link>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}