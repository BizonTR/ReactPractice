import React, { useState } from 'react'

export default function Counter() {
    let startingNumber = 0
    const [changedNumber,setNumber]=useState(startingNumber)
    const handleIncrease = () => {
        if (changedNumber >= 10) {
            setNumber(0)
        }
        else {
            setNumber(changedNumber + 1);
        }
    }
    const handleDecrease = () => {
        if (changedNumber <= 0) {
            setNumber(changedNumber=0)
        }
        else{
            setNumber(changedNumber - 1);
        }
    }
    return (
        <div>
            <p id='number'>
            {changedNumber}
            </p>
            <button id='IncDecButton' onClick={handleIncrease}>Increase</button>
            <button id='IncDecButton' onClick={handleDecrease}>Decrease</button>
        </div>
    )
}