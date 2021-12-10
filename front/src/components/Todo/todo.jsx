import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";
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
          return (
            <div className="horizonti">
              <li key={item.item.length}>{item.item}</li>
              <button>delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
