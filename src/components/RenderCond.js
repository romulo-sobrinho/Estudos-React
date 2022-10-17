const RenderCond = ({x}) => {


  return (
    <div>
      {x > 5 && <p> X é maior que 10</p>}
      {x > 5 ? <p>X é um número maior que 5</p> : <p>X é um número menor que 5</p>}
    </div>
  )
}

export default RenderCond;