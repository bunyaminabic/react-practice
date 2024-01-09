import { useState } from "react";

function App() {
  const [name, setName] = useState("Bünyamin");
  const [age, setAge] = useState(20);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  return (
    <div className="App">
      <h1>Merhaba {name} </h1>
      <h2> {age} </h2>
      <button onClick={() => setName("Mehmet")}>Change Name</button>
      <button onClick={() => setAge(29)}>Change age</button>

      <hr />
      <br></br>

      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}> {friend} </div>
      ))}

      <br></br>

      <button onClick={() => setFriends([...friends, "salih"])}>
        Add New friend
      </button>
    </div>
  );
}

export default App;
