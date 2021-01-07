import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './utils/userService';
import HabitGeneratorPage from '../src/pages/HabitGeneratorPage/HabitGeneratorPage';

export default class App extends Component {
  state = {
    user: userService.getUser(),
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/signup' render={({ history }) => <SignupPage history={history} />} />
          <Route exact path='/login' render={({ history }) => <LoginPage history={history} />} />
        </Switch>
      </div>
    )
  }
}