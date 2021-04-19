import React from 'react';
import HabitList from '../../components/HabitList/HabitList';
import HabitForm from '../../components/HabitForm/HabitForm';
import './HabitGenerator.css';

import { Link, Route, Switch, Redirect } from 'react-router-dom';

import Cue from '../../components/Cue/Cue';
import Craving from '../../components/Craving/Craving';
import Response from '../../components/Response/Response';
import Reward from '../../components/Reward/Reward';

import { Button } from '@material-ui/core';

export default function HabitGeneratorPage({
    newHabit, 
    allHabits, 
    handleInputChange, 
    handleHabitSubmit,
    handleHabitDelete,
    handleShowHabit,
}) {
    return (
        <>
            <HabitForm 
                newHabit={newHabit} 
                allHabits={allHabits} 
                handleInputChange={handleInputChange} 
                handleHabitSubmit={handleHabitSubmit}
                handleShowHabit={handleShowHabit}
            />

            <div className="HabitGeneratorPage">
                <Switch>
                    <Route 
                        path="/habitgenerator"
                    >
                        {allHabits.map((habit) => (
                            <button onClick={handleShowHabit}>
                                <Link to={`/habitgenerator/${habit._id}`}>
                                        {habit.cueBehavior}
                                </Link>
                            </button>
                            
                        ))}
                    </Route>
                </Switch>
                <div className="habitSteps">
                    <Cue allHabits={allHabits} />
                    <Craving allHabits={allHabits} />
                    <Response allHabits={allHabits} />
                    <Reward allHabits={allHabits} />
                </div>
            </div>
        </>
    )
}