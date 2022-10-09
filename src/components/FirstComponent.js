function FirstComponent() {

  const name = 'Rômulo'

  return (
    <div className="firstcomponent">
      <p>Primeiro Componente</p>
      {2 + 2}
      <p>Nome: {name}</p>
    </div>
  )
}

export default FirstComponent;