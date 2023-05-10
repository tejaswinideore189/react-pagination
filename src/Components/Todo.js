import React, { useState } from 'react'
import "./Todo.css"
import Todolists2 from './Todolists2';

export default function Todo() {
  const [inputList,setinputList]=useState("");
  const[Items,setItems]= useState([])
  const itemEvent =(event)=>{
    setinputList(event.target.value);  
  };
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return[...oldItems,inputList];
    })
    setinputList("")
  };
  const deleteItems=(id)=>{
    console.log("deleted")
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
         return index !==id;
      })
    })
  }


  return (
    <>
    <div className='main_div'>
      <div className='center_div'>
        <br/>
        <h1>to do list</h1>
        <br/>
        <input type={Text} placeholder='Add a Items' 
        value={inputList}
        onChange={itemEvent}/>
        <button onClick={listOfItems}>+</button>
        <ol>
            {/* <li>{inputList}</li> */}
            {
              Items.map((itemval,index)=>{
                return<Todolists2 key={index} id={index} text={itemval} onSelect={deleteItems}/>
                
              })
            }
        </ol>
        

      </div>
    </div>
    </>
  )
}
