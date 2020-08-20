import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Styles/App.scss";
import Menu from "./Components/Header/Menu";
import Navbar from "./Components/Header/Navbar";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Main />
    </div>
  );
}

export default App;
