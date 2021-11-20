import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header/header";
import Todos from "./components/Todo/todo";

function App() {
  return (
    <Fragment>
      <Header />
      <Todos />
    </Fragment>
  );
}

export default App;
