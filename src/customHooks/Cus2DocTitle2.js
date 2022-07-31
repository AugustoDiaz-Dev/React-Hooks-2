import React, { useState } from 'react'
import useDocumentTitle from './hooks/useDocumentTitle'
// When you have different components that need to do the same is when you can create your custom hooks.
function Cus2DocTitle2() {

    const [count, setCount] = useState(0)

    useDocumentTitle(count);

    return (
        <div>
            <h2>Custom Hooks - Doc Title 2</h2>

            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <hr />
        </div>
    )
}

export default Cus2DocTitle2