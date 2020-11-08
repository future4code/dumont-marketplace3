import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
width: 60vw;
margin:1vw;
`
const CartaoProduto = styled.div`
border: solid lightgray;
width: 15vw;
text-align: center;
margin:1vw; 
`
const Imagem = styled.img`
width:100px;
height:100px;
`
const Botao = styled.button`
margin-bottom:3px;
cursor: pointer;
`

class Produtos extends React.Component {
  state = {
    sort: ""
  }

  pegarProdutosFiltrados = () => {
    return this.props.produtos
      .filter((produto) => Number(produto.price) < (this.props.valorMaximo || Infinity))
      .filter((produto) => Number(produto.price) > this.props.valorMinimo)
      .filter((produto) => (produto.name.toLowerCase().includes(this.props.valorPesquisa.toLowerCase()) || (produto.description.toLowerCase().includes(this.props.valorPesquisa.toLowerCase()))))
      .filter((produto) => produto.category.includes(this.props.categoria))
      .sort((a, b) => {
        switch (this.state.sort) {
          case "crescente":
            return (Number(a.price) - Number(b.price))
          case "decrescente":
            return (Number(b.price) - Number(a.price))
          case "nome":
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1
            } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1
            } else {
              return 0
            }
        }
      })
  }

  onChangeOrdenacao = (event) => {
        this.setState({ sort: event.target.value })
  }

  render() {
    const produtosRenderizados = this.pegarProdutosFiltrados().map((produto) => {
      return <CartaoProduto key={produto.id}>
        <p>{produto.name}</p>
        <Imagem src={produto.photos}></Imagem>
        <p>preço: {Number(produto.price).toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</p>
        <p>{produto.paymentMethod}</p>
        <Botao onClick={() => this.props.adicionarAoCarrinho(produto.id)}>
          Comprar
        </Botao>
      </CartaoProduto>
    })

    return <div>
      <select onChange={this.onChangeOrdenacao}>
        <option value="">Ordene Por:</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
        <option value="nome">Nome</option>
      </select>
      <ProdutosContainer>
        {produtosRenderizados}
      </ProdutosContainer>
    </div>
  }
}

export default Produtos;