import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './LoginPage.css';

export default class LoginPage extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        //TODO: implement in an elegant way
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="LoginPage">
                <header className="header-footer">Log In</header>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
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