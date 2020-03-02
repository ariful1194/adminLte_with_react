import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Wrapper} />
      </Router>
    </>
  );
}

export default App;
