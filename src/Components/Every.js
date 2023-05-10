import React from 'react'

function Every() {
  function everyfunction(){
    const ages = [32, 33, 25, 40];
 document.getElementById("de").innerHTML = ages.every(checkAge);

function checkAge(age) {
  return age > 18;
}
  }
  function formfunction(){
      const myArr = Array.from("ABCDEFG");
     document.getElementById("up").innerHTML = myArr;
  
}
function kayfunction(){
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}

document.getElementById("dn").innerHTML = text;
}
function findfunction(){
  const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

document.getElementById("end").innerHTML = "First number over 18 is " + first;

function myFunction(value) {
  return value > 18;
}
} 

  return (
    <div>
       <h1>every</h1>
      <button onClick={everyfunction}>click</button>
      <p id="de"></p>

      <h1>Array.from</h1>
      <button onClick={formfunction}>click</button>
      <p id="up"></p>

      <h1>Array.key</h1>
      <button onClick={kayfunction}>kay</button>
      <p id="dn"></p>
       
       <h1>Array.find</h1>
       <button onClick={findfunction}>find</button>
       <p id="end"></p>

    </div>
  )
}

export default Every
