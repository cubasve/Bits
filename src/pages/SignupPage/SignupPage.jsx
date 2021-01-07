import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

export default class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = { message: '' }
    }
    // state = {
    //     message: '',
    // }

    updateMessage = (msg) => {
        this.setState({ message: msg });
    }

    render() {
        return (
            <div className="SignupPage">
                <SignupForm {...this.props} updateMessage={this.updateMessage} handleSignupOrLogin={this.props.handleSignupOrLogin} />
                <p>{this.state.message}</p>
            </div>
        );
    }
}