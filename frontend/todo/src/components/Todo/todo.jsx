import React, { useEffect, useState } from "react";
const Todos = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchAllItems = async () => {
      const response = await fetch("http://localhost:8000/api/get/all/post");
      const fetchedItems = await response.json();
      setItems(fetchedItems);
      console.log(items);
    };
    const interval = setInterval(fetchAllItems, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          <li>{item.item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todos;
