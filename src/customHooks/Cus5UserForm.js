import React from 'react'
import useInput from './hooks/useInput'

function Cus5UserForm() {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const handleSubmit = e => {
        e.preventDefault()
        alert(`${firstName} ${lastName}`);
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <h2>Custom Hooks - User Form</h2>
            {/* Convert the inputs into controlled components */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder='Fist Name' {...bindFirstName} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" placeholder='Last Name' {...bindLastName} />
                </div>
                <button>Submit</button>
            </form>

            <hr />
        </div>
    )
}

export default Cus5UserForm