import React, { useEffect, useState } from 'react'

export default function Calculation() {
    const[Add,setAdd]= useState(0)
    const[calculation ,setcalculation]= useState(0)


    useEffect(()=>{
        setcalculation(()=> Add*2)
    },[Add])

  return (
    <div>
     <center>
     <p>Add{Add}</p>
      <button onClick={()=>setAdd ((c) => c + 1)}>+</button>
      <p>calculation{calculation}</p>
      </center>
     </div>
  )
}
