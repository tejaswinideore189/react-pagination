import React from 'react'

function Foreachloop() {
    const myArray = ['Jack', 'Mary', 'John', 'Krish', 'Navin']; 
  return (
      <div className="container">  <br></br>
        <h1>  React foreach Loop </h1>  
     
        {myArray.map(name => (  
         <h1> <li>  
            {name}  
          </li> </h1> 
        ))} 
    </div>
  )
}

export default Foreachloop
