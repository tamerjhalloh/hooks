import React from 'react'
import useCounter from '../Hooks/useCounter';

function CounterTwo() 
{
    const [count, increment, decrement, reset] = useCounter(10, 10);

    return (
        <div>
            <h2>Count : {count}</h2>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button> 
            </div>
        </div>
    )
}

export default CounterTwo

