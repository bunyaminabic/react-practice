import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [isVisible, setVisible] = useState(true);

  return (
    <div className="App">
      {isVisible && <Counter />}

      <br />

      <button onClick={() => setVisible(!isVisible)}>Toggle Counter</button>
    </div>
  );
}

export default App;
