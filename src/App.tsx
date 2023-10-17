import { useState, useEffect } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Drawers from "./components/Drawer";

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 769;
  return (
    <div className="app">
      {!isMobile ? (
        <SideBar />
      ) : (
        <Drawers>
          <SideBar />
        </Drawers>
      )}
      <Main />
    </div>
  );
}

export default App;
