import React, { useEffect, useState } from "react";

const TodosContext = React.createContext({
  todos: [],
  fetchTodos: () => {},
});

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8000/api/get/all/post");
    const todos = await response.json();
    setTodos(todos.data);
  };
  console.log(todos);
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <TodosContext.Provider value={{ todos, fetchTodos }}>
      {todos.map((todo) => (
        <ul>
          <li>{todo.item}</li>
        </ul>
      ))}
    </TodosContext.Provider>
  );
};

export default Todos;
