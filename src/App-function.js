import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './utils/userService';
import HabitList from '../src/components/HabitList/HabitList';
import HabitInfo from '../src/components/HabitInfo/HabitInfo';
import NavBar from '../src/components/Navbar/Navbar';

import habitGeneratorService from './utils/habitGeneratorService';

export default function App() {
    const initialUserValue = userService.getUser();
    const [ user, setUser ] = useState(initialUserValue);

    const [allHabits, setAllHabits] = useState([]);
    const [newHabit, setNewHabit] = useState({
        responseBronze: '',
        responseSilver: '',
        responseGold: '',

        cueBehavior: '',
        cueTime: '',
        cueLocation: '',

        currentHabit: '',
        wantedHabit: '',
    });    

    useEffect(async () => {
        try {
            await habitGeneratorService.showHabit()
            .then(data => {
                console.log('data/componentDidMount: ', data);
                setAllHabits(data.user.userHabitGenerator);
            });
        } catch (err) {
            console.error(err);
        }
    }, [ allHabits ]);

    const handleLogout = () => {
        userService.logout();
        setUser(null);
    }

    const handleSignupOrLogin = () => {
        setUser(userService.getUser());
    }

    const handleInputChange = (e) => {
        const newHabit = {...newHabit, [e.target.name]: e.target.value };
        setNewHabit(newHabit);
    }

    const handleHabitSubmit = async (e) => {
        try {
            e.preventDefault();
            await habitGeneratorService.createHabit({
                responseBronze: newHabit.responseBronze,
                responseSilver: newHabit.responseSilver,
                responseGold: newHabit.responseGold,

                cueBehavior: newHabit.cueBehavior,
                cueTime: newHabit.cueTime,
                cueLocation: newHabit.cueLocation,

                currentHabit: newHabit.currentHabit,
                wantedHabit: newHabit.wantedHabit,
            }).then(data => {
                setAllHabits(data.user.userHabitGenerator);
                setNewHabit({
                    responseBronze: '',
                    responseSilver: '',
                    responseGold: '',
                
                    cueBehavior: '',
                    cueTime: '',
                    cueLocation: '',
                
                    currentHabit: '',
                    wantedHabit: '',
                });
            });
        } catch (err) {
            console.error(err);
        }
    }

    const handleHabitDelete = async (event) => {
        try {
            await habitGeneratorService.removeHabit({ id: event })
            .then(data => {
                setAllHabits(data.user.userHabitGenerator);
            })
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="App">
            <NavBar user={user} handleLogout={handleLogout} />

            <Switch>
                <Route 
                    exact path="/"
                    render={() => (
                        <HomePage user={user} handleLogout={handleLogout} />
                    )}
                />

                <Route 
                    exact path="/habitgenerator"
                    render={() => (
                        userService.getUser() ?
                        <main>
                            <HabitList 
                                user={user}
                                allHabits={allHabits}
                                newHabit={newHabit}
                                handleInputChange={handleInputChange}
                                handleHabitSubmit={handleHabitSubmit}
                                handleHabitDelete={handleHabitDelete}
                            />
                        </main>
                        :
                        <Redirect to="/login" />
                    )}
                />

                <Route 
                    path="/habitgenerator/:id"
                    render={props => (
                        <HabitInfo {...props} allHabit={allHabits} />
                    )}
                />

                <Route 
                    exact path="/signup"
                    render={({ history }) => (
                        <SignupPage 
                            history={history} 
                            handleSignupOrLogin={handleSignupOrLogin} 
                        />
                    )}
                />

                <Route 
                    exact path="/login"
                    render={({ history }) => (
                        <LoginPage 
                            history={history} 
                            handleSignupOrLogin={handleSignupOrLogin} 
                        />
                    )}
                />
            </Switch>
        </div>
    );
}