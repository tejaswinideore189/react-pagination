import React from 'react'

function Indexof() {
    function myfunction(){
      let test = "apple , kiwi";
      let x = test.indexOf("k");
      document.getElementById("demo").innerHTML=x;

    }
    
  return (
    <div>
      <h1>indexOf</h1>
      <button onClick={myfunction}>on click</button>
      <p id="demo"></p>
      
    </div>
  )
}

export default Indexof
