import React from 'react'

function Call4Button({ handleClick, children }) {

    console.log('Rendering button - ', children)

    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(Call4Button)