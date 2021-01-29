import React from 'react';

export default function getResponse(props) {
    return (
        <>
            <h1>Response: Bronze</h1>
            {props.allHabits.map(habit => habit.responseBronze)}
            <h1>Response: Silver</h1>
            {props.allHabits.map(habit => habit.responseSilver)}
            <h1>Response: Gold</h1>
            {props.allHabits.map(habit => habit.responseGold)}
        </>
    )
}