import React from 'react';
import styled from 'styled-components';
import adicionar from '../assets/images/add-icon.svg'
import remover from '../assets/images/remove-icon.svg'

const CarrinhoContainer = styled.div`
border: solid grey;
width: 20vw;
height: 50vw;
margin: 1vw;
text-align: center;
`
const ProdutoCarrinho = styled.div`
display: flex;
justify-content: space-between;
margin: 5px;
align-items: center;
`
const Botao = styled.button`
background: none;
border: solid 1px lightgray;
margin-left: 10px;
cursor: pointer;
`
const DetalheCompra = styled.div`
display: flex;
align-items: center;
`



class Carrinho extends React.Component {
  calcularTotal = () => {
    let valorTotal = 0
    for (let produto of this.props.carrinho) {
      valorTotal += produto.price * produto.quantity
    }
    return valorTotal
  }

  render() {
    const carrinhoRenderizado = this.props.carrinho.map((produto) => {
      return <ProdutoCarrinho>
        <p>{produto.name}</p>
        
        <DetalheCompra>
        <p>{produto.quantity}x</p>
    <Botao onClick={() => this.props.removerDoCarrinho(produto.id)}><img src={remover}></img></Botao>
    </DetalheCompra>
      </ProdutoCarrinho>
    })
    return <CarrinhoContainer>
        <p>Carrinho</p>
        {carrinhoRenderizado}
        <p>Total: {this.calcularTotal().toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}</p>
    </CarrinhoContainer>
  }
}

export default Carrinho;