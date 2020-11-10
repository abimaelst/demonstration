
export default function Users( { users }) {
  console.log(users)
  return (
    <div>
     {users.map(({login, name, dob, picture, gender}) => {
        return (
          <ul key={login}>
            <li>login: {login}</li>
            <li>nome: {name}</li>
            <li>idade: {dob}</li>
            <li><img src={picture}/></li>
            <li>sexo: {gender}</li>
          </ul>
        )
      })
     }

    </div>
  )
}
