import React, { useState } from 'react'
import useDocumentTitle from './hooks/useDocumentTitle'
// Custom Hooks. Reuse the same logic instead of duplicate the code. 
function Cus1DocTitle1() {

    const [count, setCount] = useState(0)

    useDocumentTitle(count);

    return (
        <div>
            <h2>Custom Hooks - Doc Title 1</h2>

            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <hr />
        </div>
    )
}

export default Cus1DocTitle1