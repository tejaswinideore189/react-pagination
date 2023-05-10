import React, { useEffect, useState } from "react";

function FetchAPI() { 
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <main>
      <h1>User List</h1>
      <ul>
         {user && user.length > 0 && user.map((userObj, index) => (
            <li>{userObj.name}</li>
          ))} 
          <br/>
          {user && user.length > 0 && user.map((userObj, index) => (
            <li>{userObj.username}</li>
          ))}
      </ul>
    </main>
  );
}

export default FetchAPI;