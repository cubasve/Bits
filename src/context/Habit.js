import React from 'react';

const HabitContext = React.createContext({
    newHabit: {
        responseBronze: '',
        responseSilver: '',
        responseGold: '',

        cueBehavior: '',
        cueTime: '',
        cueLocation: '',

        currentHabit: '',
        wantedHabit: '',
    },
    setNewHabit: () => {},
    
    allHabits: [],
    setAllHabits: () => {},
});

export default HabitContext;