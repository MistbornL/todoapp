import axios from "axios";
import { useState } from "react";
import Todos from "../Todo/todo";
import "./index.scss";

const Addition = () => {
  const [target, setTarget] = useState("");

  const handleChange = (e) => {
    setTarget(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/create/post", {
        item: target,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="centered">
      <div className="group">
        <input
          onChange={handleChange}
          id="name"
          type="text"
          placeholder="Item ..."
        />
        <label htmlFor="name">ToDo Item</label>
        <div className="bar"></div>
        <button onClick={submitHandle}>submit</button>
      </div>
      <Todos />
    </div>
  );
};
export default Addition;
