import React, { useState, useCallback } from 'react'
import Count from './Call3Count'
import Button from './Call4Button'
import Title from './Call2Title'

function Call1Parent() {
    const [age, setAge] = useState(39)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
            <hr />
        </div>
    )
}
export default Call1Parent