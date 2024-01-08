import User from "./components/User";

const friends = [
  {
    id: 1,
    name: "Ahmet",
  },
  {
    id: 2,
    name: "Tayfun",
  },
  {
    id: 3,
    name: "Gökhan",
  },
  {
    id: 4,
    name: "Volkan",
  },
];

function App() {
  return (
    <>
      <User
        name="Bünyamin Abiç"
        surname="Abiç"
        isLoggedIn={true}
        age={20}
        friends={friends}
        address={{
          title: "Beyoğlu/İstanbul",
          zip: 34755,
        }}
      />
    </>
  );
}

export default App;
