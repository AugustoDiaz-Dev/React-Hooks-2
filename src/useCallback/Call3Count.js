import React from 'react'

function Call3Count({ text, count }) {

    console.log(`Rendering ${text}`)

    return <div>{text} - {count}</div>
}

export default React.memo(Call3Count)