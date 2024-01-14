import { useState, useEffect } from "react";
function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Bünyamin");
  useEffect(() => {
    console.log("State güncellendi!");
  });

  useEffect(() => {
    console.log("Component mount edildi !");
  }, []);

  useEffect(() => {
    console.log("number state güncellendi !");
  }, [number]);

  useEffect(() => {
    console.log("name state güncellendi !");
  }, [name]);

  return (
    <div className="App">
      <h1> {number} </h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />
      <h1> {name} </h1>
      <button onClick={() => setName("Mehmet")}>Click</button>
    </div>
  );
}

export default App;
