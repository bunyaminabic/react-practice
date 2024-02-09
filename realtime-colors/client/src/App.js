import "./App.css";
import { useEffect, useState } from "react";
import { init, subscribe } from "./socketApi";
import Palet from "./components/Palet";

function App() {
  const [activeColor, setActiveColor] = useState("#282c34");

  useEffect(() => {
    init();

    subscribe((color) => {
      setActiveColor(color);
    });
  }, []);
  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <h1>{activeColor}</h1>
      <Palet activeColor={activeColor} />
    </div>
  );
}

export default App;
