import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Styles/App.scss";
import Navbar from "./Components/Header/navbar";
import Megamenu from "./Components/Header/megamenu";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Megamenu />
      <Menu />
    </div>
  );
}

export default App;
