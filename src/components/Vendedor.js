import React from 'react'
import styled from 'styled-components'

 
const Pag = styled.div`

`

const Inputs = styled.div`
width:20vw;
margin:auto;
margin-top:3vh;
`

class Vendedor extends React.Component {



  render() {
    return (
      <Pag>
      <Inputs>
       <p>Nome</p>
        <input></input>
      </Inputs>
      <Inputs>
      <p>Descrição</p>
        <input></input>
      </Inputs>
      <Inputs>
      <p>Preço</p>
        <input></input>
      </Inputs>
      <Inputs>
      <p>Categoria</p>
        <input></input>
      </Inputs>
      <Inputs>
      <p>Forma de pagamento </p>
        <input></input>
      </Inputs>
      <Inputs>
      <p>Foto</p>
        <input></input>
      </Inputs>
      <Inputs>
      <p>Parcelamento</p>
        <input></input>
      </Inputs>
        
       </Pag>  
    )
  }
}
export default Vendedor;
