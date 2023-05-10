import React, { useEffect, useState } from "react";

function Functioncomponent(props) {
  const [name, setName] = useState("hello");
  const handle = () => {
    setName("Hello! Tejaswini Here");
  };
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <div className="text-center">
      <center>
        <p>{name}</p>
        <button onClick={handle}>click</button>
      </center>
      <h1>I've rendered {count} times!</h1>
      {/* <h1>{props.title}</h1>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1> */}
      <h1>i am {props.name}</h1>
    </div>
  );
}

export default Functioncomponent;
