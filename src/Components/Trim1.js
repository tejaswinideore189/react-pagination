import React from 'react'

function Trim1() {
    const numbers = [45, 4, 9, 16, 25];
  return (
    <div>
        <ul>
            {numbers.filter(age => age>4).map(fd => (
                <li>{fd}</li>
            ))
            }
        </ul>
    </div>
  )
}

export default Trim1

