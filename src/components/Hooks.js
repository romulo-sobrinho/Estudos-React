import { useState } from "react"

const Hooks = () => {

  const [novaIdade, setNovaIdade] = useState(40)

  const changeAge = () => {
    setNovaIdade(45)
  }

  return (
    <div>
      <p>Idade: {novaIdade}</p>
      <button onClick={changeAge}>Mudar idade</button>
    </div>
  )
}

export default Hooks