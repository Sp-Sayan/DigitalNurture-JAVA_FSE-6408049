import React from 'react'

const EvenPlayers = ([, second, , fourth, , sixth]) => {
    return (
        <div>
            <li>second: {second}</li>
            <li>fourth: {fourth}</li>
            <li>Sixth: {sixth}</li>
        </div>
    )
}

export default EvenPlayers
