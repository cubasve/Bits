import React from 'react';

const HabitContext = React.createContext({
    newHabit: {},
    setNewHabit: () => {},

    allHabits: [],
    setAllHabits: () => {},
});

export default HabitContext;