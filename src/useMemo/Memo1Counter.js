import React, { useState, useMemo } from 'react'
// useMemo() Hook is use for performance optimization.
function Memo1Counter() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    // With useMemo() React is using the cache value of the function to avoid re-rendering the component. React will use the cache value from the previous.  render. 
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 200000000) i++
        return counterOne % 2 === 0;
    }, [counterOne]);

    return (
        <div>
            <h2>useMemo()</h2>

            <button onClick={incrementOne}>Count One = {counterOne}</button>
            <span>{isEven ? ' Even' : ' Odd'}</span>
            <button onClick={incrementTwo}>Count Two = {counterTwo}</button>

            <hr />
        </div>
    )
}

export default Memo1Counter