import React, { useState, useEffect, useRef } from 'react'
// In this example we see that useRef can also be used to store any mutable value. It also remembers the stored data even after other state variables cause re-rendering of this component. 
function Ref3HookTimer() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => clearInterval(intervalRef.current)
    }, [])

    return (
        <div>
            <h2>Hook timer using useRef()</h2>

            <p>Hook Timer: {timer}</p>
            <button onClick={() => clearInterval(intervalRef.current)}>Stop Hook Timer</button>

            <hr />
        </div>
    )
}

export default Ref3HookTimer