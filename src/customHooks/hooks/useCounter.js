import { useState } from 'react'

function useCounter(initialCount = 0, value) {

    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }
    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }
    const reset = () => {
        setCount(initialCount) // Or also can reset it to count value
    }
    return [count, increment, decrement, reset]
}

export default useCounter