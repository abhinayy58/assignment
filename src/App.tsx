import React from "react";
import "./App.css";

import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
