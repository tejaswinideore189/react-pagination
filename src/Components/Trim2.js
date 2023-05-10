import React from 'react'

function Trim2() {
    
    
    // eslint-disable-next-line no-multi-str
    const fruit = 'Hello \
    World';
    // eslint-disable-next-line no-multi-str
    const city = "Hello \
    Dolly"
    const text = "    Hello React      "
    const text1 = text.trim()
  return (
    <div>
        <h1>{city}</h1>
       <h1> {fruit} </h1>
       <h1>{text1}</h1>
    </div>
  )
}

export default Trim2
