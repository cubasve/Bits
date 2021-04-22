import React from 'react';

export default function getResponse
({ habit: { responseBronze, responseSilver, responseGold } }) 
{
    return (
        <div className="infoBorder">
            <h1>Response: Bronze</h1>
            {responseBronze}
            <h1>Response: Silver</h1>
            {responseSilver}
            <h1>Response: Gold</h1>
            {responseGold}
        </div>
    )
}