export default function InputSearch({ enabled, placeholder, searchUsers }) {
  let textSearch = "";

  const handleChange = (e) => {
    textSearch = e.target.value;
  };

  const inputSubmit = () => {
    console.log(textSearch);
    searchUsers(textSearch);
  };

  return (
    <div className="switch">
      <label>Buscar Usuários </label>
      <input placeholder={placeholder} type="text" onKeyUp={handleChange} />

      <button type="submit" name="action" onClick={inputSubmit}>
        Submit
      </button>
    </div>
  );
}
