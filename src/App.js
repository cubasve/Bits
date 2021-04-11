import React, { Component, useEffect, useState } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './utils/userService';
import HabitGeneratorPage from '../src/pages/HabitGeneratorPage/HabitGeneratorPage';
import NavBar from '../src/components/Navbar/Navbar';

import habitGeneratorService from './utils/habitGeneratorService';

export default class App extends Component {
  // const initialUserValue = userService.getUser();
  // const [user, setUser] = useState(initialUserValue);
  // const [allHabits, setAllHabits] = useState([]);
  // const [newHabit, setNewHabit] = useState({
  //   responseBronze: '',
  //     responseSilver: '',
  //     responseGold: '',

  //     cueBehavior: '',
  //     cueTime: '',
  //     cueLocation: '',

  //     currentHabit: '',
  //     wantedHabit: '',
  // });

  state = {
    user: userService.getUser(),
    allHabits: [
    ],
    newHabit: {
      //name: '',

      responseBronze: '',
      responseSilver: '',
      responseGold: '',

      cueBehavior: '',
      cueTime: '',
      cueLocation: '',

      currentHabit: '',
      //neededHabit: '',
      wantedHabit: '',
    }
  }

  async componentDidMount() {
    try {
      await habitGeneratorService.showHabit()
      .then(data => {
        console.log('data/componentDidMount: ', data);
        this.setState({
          allHabits: data.user.userHabitGenerator,
        });
      });
    } catch (err) {
      console.error(err);
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = async () => {
    this.setState({ user: userService.getUser() });
  }

  handleInputChange = (e) => {
    const newHabit = { ...this.state.newHabit, [e.target.name]: e.target.value };
    this.setState({ newHabit: newHabit });
  }

  handleHabitSubmit = async (e) => {
    try {
      console.log('handleHabitSubmit')
      e.preventDefault();
      //console.log('e: ', e)
      await habitGeneratorService.createHabit({
        responseBronze: this.state.newHabit.responseBronze,
        responseSilver: this.state.newHabit.responseSilver,
        responseGold: this.state.newHabit.responseGold,
        cueBehavior: this.state.newHabit.cueBehavior,
        cueTime: this.state.newHabit.cueTime,
        cueLocation: this.state.newHabit.cueLocation,
        currentHabit: this.state.newHabit.currentHabit,
        wantedHabit: this.state.newHabit.wantedHabit,
      }).then(
        data => {
          console.log('data/habitSubmit: ', data);
          this.setState({
            allHabits: data.user.userHabitGenerator,
            newHabit: {
              responseBronze: '',
              responseSilver: '',
              responseGold: '',
        
              cueBehavior: '',
              cueTime: '',
              cueLocation: '',
        
              currentHabit: '',
              wantedHabit: '',
            }
          });
        }
      )
    } catch (err) {
      console.error(err);
    }
  }

  handleHabitDelete = async (e) => {
    try {
      console.log('e.target.value: ', e.target.value);
      await habitGeneratorService.removeHabit({ id: e.target.value })
        .then(data => {
          console.log('data/DELETE: ', data);
          this.setState({
            allHabits: data.user.userHabitGenerator,
          })
        })
    } catch (err) {
      console.error(err);
    }
  }

  render() {

    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />

        <Switch>
          <Route 
            exact path="/" 
            render={() => 
              <HomePage 
                user={this.state.user} 
                handleLogout={this.handleLogout} 
              />}>
          </Route>

          <Route exact path="/habitgenerator" 
            render={() => (
              userService.getUser() ?
              <main>
                <HabitGeneratorPage 
                  user={this.state.user} 
                  allHabits={this.state.allHabits} 
                  newHabit={this.state.newHabit}
                  handleInputChange={this.handleInputChange}
                  handleHabitSubmit={this.handleHabitSubmit}
                  handleHabitDelete={this.handleHabitDelete}
                />
              </main>
              :
              <Redirect to="/login" />
            )}>
          </Route>

          {/* <Route exact path="/habitgenerator" render={() => (
            userService.getUser() ?
              <main>
                <FinancialStatementPage />
              </main>
              :
              <Redirect to='/login' />
          )}>
          </Route> */}

          {/* <Route exact path="/habitgenerator" 
            render={() => 
                <HabitGeneratorPage 
                  user={this.state.user} 
                  allHabits={this.state.allHabits} 
                  newHabit={this.state.newHabit}
                  handleInputChange={this.handleInputChange}
                  handleHabitSubmit={this.handleHabitSubmit}
                />}>
          </Route> */}

          <Route 
            exact path="/signup" 
            render={({ history }) => 
              <SignupPage 
                history={history} 
                handleSignupOrLogin={this.handleSignupOrLogin} 
              />}>
          </Route>

          <Route 
            exact path="/login" 
            render={({ history }) => 
              <LoginPage 
                history={history} 
                handleSignupOrLogin={this.handleSignupOrLogin} 
              />}>
          </Route>

        </Switch >
      </div >
    )
  }
}