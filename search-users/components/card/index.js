export default function Users({ users }) {
  return (
    <div className="grid">
      {users.map(({ login, name, dob, picture, gender }) => {
        return (
          <ul className="card" key={login}>
            <li style={{ grindArea: "img" }}>
              <img src={picture} />
            </li>
            <li style={{ grindArea: "name" }}>nome: {name}</li>
            <li style={{ grindArea: "login" }}>login: {login}</li>
            <li style={{ grindArea: "idade" }}>idade: {dob}</li>
            <li style={{ grindArea: "sexo" }}>sexo: {gender}</li>
          </ul>
        );
      })}
    </div>
  );
}
