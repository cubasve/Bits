import React from 'react';
//import HabitName from '../HabitName/HabitName';
import HabitForm from '../../components/HabitForm/HabitForm';
import './HabitList.css';

import { Link } from 'react-router-dom';

// export default function getHabitList({ 
//     allHabits,
//     handleShowHabit,
// }) {
//     return (
//         <div className="habitlist">
//             <HabitName 
//                 allHabits={allHabits} 
//             />
//         </div>
//     );
// }

export default function getHabitList ({
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
                {/* <Switch>
                    <Route 
                        path="/habitgenerator/:i"
                    > */}
                        {allHabits.map((habit) => (
                            <button onClick={handleShowHabit} key={habit._id}>
                                <Link to={`/habitgenerator/${habit._id}`}>
                                        {habit.cueBehavior}
                                </Link>
                            </button>
                            
                        ))}
                    {/* </Route>
                </Switch> */}
                {/* <div className="habitSteps">
                    <Cue allHabits={allHabits} />
                    <Craving allHabits={allHabits} />
                    <Response allHabits={allHabits} />
                    <Reward allHabits={allHabits} />
                </div> */}
            </div>
        </>
    )
}