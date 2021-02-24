import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './utils/userService';
import HabitGeneratorPage from '../src/pages/HabitGeneratorPage/HabitGeneratorPage';
import NavBar from '../src/components/Navbar/Navbar';

export default class App extends Component {
  state = {
    user: userService.getUser(),
    allHabits: [
    //   {
    //     name: 'Storytime',
    //     cue: 'At 10pm, I will read a book on my bed.',
    //     craving: 'After reading my book I will scroll through Fb',
    //     responseBronze: 'Read my book for 5 min',
    //     responseSilver: 'Read my book for 30 min',
    //     responseGold: 'Read my book for 1 hour',
    //     reward: 'Scroll through FB Feed'
    //   },
    //   {
    //     name: 'ABCD',
    //     cue: 'AAAAAA',
    //     craving: 'BBBBB',
    //     responseBronze: 'CCCCCBronze',
    //     responseSilver: 'CCCCSilver',
    //     responseGold: 'CCCCCGold',
    //     reward: 'DDDDDDD'
    //   },
    ],
    newHabit: {
      name: '',

      responseBronze: '',
      responseSilver: '',
      responseGold: '',

      cueBehavior: '',
      cueTime: '',
      cueLocation: '',

      currentHabit: '',
      neededHabit: '',
      wantedHabit: '',
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleInputChange = (e) => {
    const newHabit = { ...this.state.newHabit, [e.target.name]: e.target.value };
    this.setState({ newHabit: newHabit });
  }

  handleHabitSubmit = (e) => {
    e.preventDefault();
    console.log('e: ', e)
    this.setState(state => ({
      allHabits: [...state.allHabits, state.newHabit],
      newHabit: {
        name: '',

        responseBronze: '',
        responseSilver: '',
        responseGold: '',

        cueBehavior: '',
        cueTime: '',
        cueLocation: '',

        currentHabit: '',
        neededHabit: '',
        wantedHabit: '',
      }
    }));
  }

  render() {

    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />

        <Switch>
          <Route exact path="/" render={() => <HomePage user={this.state.user} handleLogout={this.handleLogout} />}></Route>

          {/* <Route exact path="/habitgenerator" 
            render={() => (
              userService.getUser() ?
              <main>
                <HabitGeneratorPage 
                  user={this.state.user} 
                  allHabits={this.state.allHabits} 
                  newHabit={this.state.newHabit}
                  handleInputChange={this.handleInputChange}
                  handleHabitSubmit={this.handleHabitSubmit}
                />
              </main>
              :
              <Redirect to="/login" />
            )}>
          </Route> */}

          <Route exact path="/habitgenerator" 
            render={() => 
                <HabitGeneratorPage 
                  user={this.state.user} 
                  allHabits={this.state.allHabits} 
                  newHabit={this.state.newHabit}
                  handleInputChange={this.handleInputChange}
                  handleHabitSubmit={this.handleHabitSubmit}
                />}>
          </Route>

          <Route exact path='/signup' render={({ history }) => <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />}></Route>

          <Route exact path='/login' render={({ history }) => <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />}></Route>
        </Switch >
      </div >
    )
  }
}