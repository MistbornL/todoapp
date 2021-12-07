import React, { Fragment } from "react";
import "./App.css";
import Addition from "./components/addition/addition";
import Header from "./components/Header/header";

function App() {
  return (
    <Fragment>
      <Header />
      <Addition />
    </Fragment>
  );
}

export default App;
