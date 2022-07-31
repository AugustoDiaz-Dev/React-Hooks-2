import React, { useEffect, useRef } from 'react'
// useRef() allows you to access the DOM element that is rendered by a component.
function Ref1FocusInput() {

    const inputRef = useRef(null);

    useEffect(() => {
        // Focus the input element on load
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <h2>useRef()</h2>

            <input ref={inputRef} type="text" />

            <hr />
        </div>
    )
}

export default Ref1FocusInput