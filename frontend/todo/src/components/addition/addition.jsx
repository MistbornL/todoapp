import Todos from "../Todo/todo";
import "./index.scss";

const Addition = () => {
  return (
    <div className="centered">
      <div className="group">
        <input id="name" type="text" placeholder="Item ..." />
        <label htmlFor="name">ToDo Item</label>
        <div className="bar"></div>
      </div>
      <Todos />
    </div>
  );
};
export default Addition;
