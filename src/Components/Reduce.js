import React from 'react'

function Reduce() {
    const numbers = [45, 4, 9, 16, 25];
  return (
    <div>
       {numbers.reduce((total, value) => {
        return total + value
      })}
    </div>
  )
}

export default Reduce
