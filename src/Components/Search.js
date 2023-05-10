import React, { useEffect, useState } from "react";
import "./List.css";

export default function Search() {
  const [data, setData] = useState([]);
  const [searchApiData, setsearchApiData] = useState("");
  const [filterVal, setFilterVal] = useState("");
  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setsearchApiData(json);
        });
    };
    fetchData();
  }, []);
  const handleFilter = (e) => {
    if (e.target.value === "") {
      setData(searchApiData);
    } else {
      const filterResult = searchApiData.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.username.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.phone.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (filterResult.length > 0) {
        setData(filterResult);
      } else {
        setData([{ name: "No Data" }]);
      }
    }
    setFilterVal(e.target.value);
  };
  return (
    <div style={{ margin: "20px 20%" }}>
      <div className="p-input-icon-right">
        <input
          type="search"
          placeholder="Search"
          value={filterVal}
          onInput={(e) => handleFilter(e)}
        />
      </div>
      <table>
        <th>name</th>
        <th>User name</th>
        <th>Email</th>
        <th>Phone</th>
        {data.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

