import React from 'react';
import styled from 'styled-components';
import adicionar from '../assets/images/add-icon.svg'
import remover from '../assets/images/remove-icon.svg'

const CarrinhoContainer = styled.div`
border: solid green;
width: 20vw;
height: 50vw;
margin: 1vw;
`

class Carrinho extends React.Component {
  render() {
    const carrinhoRenderizado = this.props.carrinho.map((produto) => {
      return <div>
        <p>{produto.quantity}</p>
        <p>{produto.name}</p>
        <button onClick={() => this.props.removerDoCarrinho(produto.id)}>remover</button>
      </div>
    })
    return <CarrinhoContainer>
        <p>Carrinho</p>
        {carrinhoRenderizado}
    </CarrinhoContainer>
  }
}

export default Carrinho;