import { useState } from "react";
import { send } from "../socketApi";

function Palet({ activeColor }) {
  const [color, setColor] = useState("#000");
  return (
    <div className="palet">
      <input
        type="color"
        value={activeColor}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>Click</button>
    </div>
  );
}

export default Palet;
