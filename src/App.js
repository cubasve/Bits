import React, { useState } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './utils/userService';
import HabitList from './components/HabitList/HabitList';
import HabitInfo from './components/HabitInfo/HabitInfo';
import EditHabit from './components/EditHabit/EditHabit';
import NavBar from './components/Navbar/Navbar';

import habitGeneratorService from './utils/habitGeneratorService';
import HabitContext from './context/Habit';
import UserContext from './context/User';

export default function App({ history }) {
    const initialUserValue = userService.getUser();
    const [ user, setUser ] = useState(initialUserValue);

    // const { user, setUser } = useContext(UserContext);
    // const { 
    //     newHabit, setNewHabit, allHabits, setAllHabits 
    // } = useContext(HabitContext);

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

    const handleLogout = () => {
        userService.logout();
        setUser(null);
    }

    const handleSignupOrLogin = () => {
        setUser(userService.getUser());
    }

    //CREATE
    const handleInputChange = (e) => {
        const habit = {...newHabit, [e.target.name]: e.target.value };
        setNewHabit(habit);
    }

    const handleHabitSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = await habitGeneratorService.createHabit({
                responseBronze: newHabit.responseBronze,
                responseSilver: newHabit.responseSilver,
                responseGold: newHabit.responseGold,

                cueBehavior: newHabit.cueBehavior,
                cueTime: newHabit.cueTime,
                cueLocation: newHabit.cueLocation,

                currentHabit: newHabit.currentHabit,
                wantedHabit: newHabit.wantedHabit,
            });

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
        } catch (err) {
            console.error(err);
        }
    }

    //DELETE
    const handleHabitDelete = async (event) => {
        try {
            const data = await habitGeneratorService.removeHabit({ id: event });
            setAllHabits(data.user.userHabitGenerator);
        } catch (err) {
            console.error(err);
        }
    }

    //UPDATE
    const handleHabitUpdate = async (updatedHabitData) => {
        try {
            const updatedHabit = await habitGeneratorService.updateHabit(updatedHabitData);
            //Use map to replace just the habit that was updated
            const newHabitArray = allHabits.map(habit => habit._id === updatedHabit._id ? updatedHabit : habit);
            setAllHabits(newHabitArray);
            history.push('/habitgenerator');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="App">
            <UserContext.Provider 
                value={{ user, setUser, handleLogout, handleSignupOrLogin }}
            >
                <NavBar /*handleLogout={handleLogout}*/ />

                <HabitContext.Provider 
                    value={{ 
                        newHabit, setNewHabit, 
                        allHabits, setAllHabits,
                        handleInputChange,
                        handleHabitSubmit,
                        handleHabitDelete,
                        handleHabitUpdate,
                    }}
                >
                    <Switch>
                        <Route 
                            exact path="/"
                            render={() => (
                                <HomePage /*user={user} handleLogout={handleLogout}*/ />
                            )}
                        />

                        <Route 
                            exact path="/habitgenerator"
                            render={({ location }) => (
                                userService.getUser() ?
                                <main>
                                    <HabitList 
                                        // user={user}
                                        // allHabits={allHabits}
                                        // setAllHabits={setAllHabits}
                                        // newHabit={newHabit}
                                        // handleInputChange={handleInputChange}
                                        // handleHabitSubmit={handleHabitSubmit}
                                        // handleHabitDelete={handleHabitDelete}
                                        // handleHabitUpdate={handleHabitUpdate}
                                        location={location}
                                    />
                                </main>
                                :
                                <Redirect to="/login" />
                            )}
                        />

                        <Route 
                            exact path="/habitgenerator/:id"
                            render={({ location }) => (
                                <HabitInfo location={location} />
                            )}
                        />

                        <Route 
                            exact path="/habitgenerator/:id/edit"
                            render={(props) => (
                                <EditHabit {...props} /*handleHabitUpdate={handleHabitUpdate}*/ />
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
                </HabitContext.Provider>
            </UserContext.Provider>
        </div>
    );
}