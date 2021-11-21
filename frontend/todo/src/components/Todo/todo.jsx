import React, { useEffect, useState } from "react";
const Todos = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/get/all/post")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  console.log(items);
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todos;
