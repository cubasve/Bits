import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './HabitName.css';



export default function getHabitName({ 
    allHabits ,
    handleShowHabit,
}) {
    return (
        <>
            <h2>Habit Names:</h2>
            {allHabits.map(habit => (
                <div key={habit._id} className="individualHabit">
                    {/* <Switch>
                        <Route>
                             <Link to={`habitgenerator/${id}`}>{allHabits}</Link>
                        </Route>
                    </Switch> */}
                    <Button /*onClick={handleShowHabit}*/>
                        {habit.cueBehavior}
                    </Button>
                    <button><EditIcon /></button>
                    <button><DeleteIcon /></button>
                </div>
            ))}
        </>
    )
}