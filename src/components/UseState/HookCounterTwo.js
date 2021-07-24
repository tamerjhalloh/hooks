import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const  [count, setCount] = useState(initialCount);
   
    const incrementFive = () => 
    {
        for (let index = 0; index < 5; index++) {
           setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <div>
            Count : {count}
            <button onClick={()=> setCount(initialCount)}> Reset </button>
            <button onClick={()=> setCount(prevCount => prevCount + 1)}> Increment </button>
            <button onClick={()=> setCount(prevCount => prevCount  - 1)}> Decrement </button>
            <button onClick={incrementFive}> Increment 5</button>
       
        </div>
    )
}

export default HookCounterTwo
