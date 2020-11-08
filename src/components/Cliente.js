import React from 'react';
import styled from 'styled-components';
import Filtros from './Filtros';
import Produtos from './Produtos';
import Carrinho from './Carrinho';

const ClienteContainer = styled.div`

`

const ContainerPrincipal = styled.div`
display: flex;
flex-direction: row;
`

class Cliente extends React.Component {
  state = {
    carrinho: []
  }

  adicionarAoCarrinho =  ((idProduto) =>{
    const produtoNoCarrinho = this.state.carrinho.find((produto) => idProduto === produto.id)

    if (produtoNoCarrinho) {
      const novoCarrinho  = this.state.carrinho.map((produto) => {
        if (idProduto === produto.id){
          return {
            ...produto,
            quantity: produto.quantity + 1
          }
        } else  {
          return produto
        }
      })
      this.setState({carrinho: novoCarrinho})
    } else  {
      const produtoAAdicionar = this.props.produtos.find((produto) => idProduto === produto.id)
      const novoCarrinho = [...this.state.carrinho, {...produtoAAdicionar, quantity: 1}]
      this.setState({carrinho: novoCarrinho})
    }
  })

  removerDoCarrinho = ((idProduto)=>{
    const novoCarrinho = this.state.carrinho.map((produto)=>{
      if (idProduto === produto.id) {
        const novoProduto = {
          ...produto,
          quantity: produto.quantity - 1
        }
        return novoProduto
      }
    }).filter((produto) => produto.quantity > 0)
    this.setState({carrinho: novoCarrinho})
  })
  render() {
    return (
    <ClienteContainer>
      <ContainerPrincipal>
        <Filtros  onChangeValorMaximo={this.props.onChangeValorMaximo}
                  onChangeValorMinimo={this.props.onChangeValorMinimo}
                  onChangeValorCategoria={this.props.onChangeValorCategoria}
                  valorMaximo={this.props.valorMaximo}
                  valorMinimo={this.props.valorMinimo}
                  produtos={this.props.produtos}/>
        <Produtos produtos={this.props.produtos}
                  valorMaximo={this.props.valorMaximo}
                  valorMinimo={this.props.valorMinimo}
                  categoria={this.props.categoria}
                  valorPesquisa={this.props.valorPesquisa}
                  adicionarAoCarrinho={this.adicionarAoCarrinho}/>
        <Carrinho carrinho={this.state.carrinho}
                  removerDoCarrinho={this.removerDoCarrinho}/>
      </ContainerPrincipal>
    </ClienteContainer>
    )
  }
}
export default Cliente;