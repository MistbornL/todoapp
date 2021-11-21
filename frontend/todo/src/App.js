import React, { Fragment } from "react";
import "./App.css";
import Addition from "./components/addition/addition";
import Header from "./components/Header/header";
import Todos from "./components/Todo/todo";

function App() {
  return (
    <Fragment>
      <Header />
      <Addition />
      <Todos />
    </Fragment>
  );
}

export default App;
