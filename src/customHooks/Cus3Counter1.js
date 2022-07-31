import React, { useState } from 'react'
import useCounter from './hooks/useCounter'

function Cus3Counter1() {

    const [count, increment, decrement, reset] = useCounter(0, 1)

    return (

        <div>
            <h2>Custom Hooks - Counter 1</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <hr />
        </div>
    )
}

export default Cus3Counter1