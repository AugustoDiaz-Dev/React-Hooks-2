import React, { useState } from 'react'
import useCounter from './hooks/useCounter'

function Cus4Counter2() {

    const [count, increment, decrement, reset] = useCounter(10, 10)

    return (

        <div>
            <h2>Custom Hooks - Counter 2</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <hr />
        </div>
    )
}

export default Cus4Counter2