import propTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends }) {
  return (
    <>
      <h1>
        {isLoggedIn ? `${name} ${surname} (${age})` : "Giriş Yapmadınız."}
      </h1>
      {address.title} {address.zip}
      {friends &&
        friends.map((friend) => <div key={friend.id}> {friend.name} </div>)}
    </>
  );
}

User.propTypes = {
  name: propTypes.string.isRequired,
  surname: propTypes.string.isRequired,
  isLoggedIn: propTypes.bool.isRequired,
  age: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  friends: propTypes.array,
  address: propTypes.shape({
    title: propTypes.string,
    zip: propTypes.number,
  }),
};

export default User;
