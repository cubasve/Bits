import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
// import SignupForm from '../../components/SignupForm/SignupForm';
// import './SignupPage.css';

export default class SignupPage extends Component {
    state = {
        message: '',
    }

    updateMessage = (msg) => {
        this.setState({ message: msg });
    }

    render() {
        return (
            <div classname="SignupPage">
                <SignupForm {...this.props} updateMessage={this.updateMessage} />
                <p>{this.state.message}</p>
            </div>
        )
    }
}