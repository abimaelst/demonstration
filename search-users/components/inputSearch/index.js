
export default function InputSearch( { enabled, placeholder}) {
  const handleChange = (e) => {
    console.log(e.key)
    console.log(e.target.value)
  }

  return (
    <div className="switch">
      <label>
        Buscar Usuários </label>
        <input placeholder={placeholder} type="text" onKeyUp={handleChange} />
        <span className="lever"></span>

    </div>
  )
}
