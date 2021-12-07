import axios from "axios";
import React, { useEffect, useState } from "react";
const Todos = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/get/all/post")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        return error;
      });
  }, []);
  console.log("items", items);
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return <li key={item.item.length}>{item.item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todos;
