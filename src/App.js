import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Styles/App.scss";
import Menu from "./Components/Header/Menu";
import Navbar from "./Components/Header/Navbar";
import Main from "./Components/Main";
import { Provider } from "react-redux";
import configureStore from "./Store";

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Menu />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
