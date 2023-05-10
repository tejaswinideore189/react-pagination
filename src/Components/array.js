import React from 'react'

function Array() {

    // const myArray = ['apple', 'banana', 'orange'];
    const myArray = ['apple',21 , 'orange'];
    
  

    

  return (
    <div>
        {myArray.map((age) => <h1>{age}</h1>)}
       
    </div>
  )
}

export default Array
