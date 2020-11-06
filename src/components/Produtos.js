import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
border: solid yellow;
width: 60vw;
margin:1vw;
`
const CartaoProduto = styled.div`
border: solid red;
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
`

class Produtos extends React.Component {
     state = {
              sort:"",
              carrinho:[]
    }

    adicionarLista=(produto)=>{
    this.setState({carrinho:produto})
    }

       pegarProdutosFiltrados = () => {
              return this.props.produtos
                     .filter((produto) => produto.price < (this.props.valorMaximo || Infinity))
                     .filter((produto) => produto.price > this.props.valorMinimo)
                     .filter((produto) => (produto.name.toLowerCase().includes(this.props.valorPesquisa.toLowerCase()) || (produto.description.toLowerCase().includes(this.props.valorPesquisa.toLowerCase()))))
                     .filter((produto) => produto.category.includes(this.props.categoria))
                     .sort((a, b) => {
                            switch(this.state.sort){
                                   case "crescente": 
                                          return (a.price - b.price)
                                   case "decrescente":
                                          return(b.price - a.price)
                                   case "nome":
                                          if (a.name.toLowerCase() > b.name.toLowerCase()) {
                                                 return 1
                                               }
                                               if (a.name.toLowerCase() < b.name.toLowerCase()) {
                                                 return -1
                                               }
                                                 return 0
                            }
                     })
       }

       onChangeOrdenacao = (event) => {
              this.setState({sort: event.target.value})
       }

    render() { 
           console.log(this.state.sort)
         const produtosRenderizados = this.pegarProdutosFiltrados().map((produto) =>{
          return<CartaoProduto key={produto.id}>
                 <p>{produto.name}</p>
                 <Imagem src={produto.photos}></Imagem>
                 <p>preço: R${produto.price}</p>
                 <p>{produto.paymentMethod}</p>
                  <Botao 
                  onClick={()=>this.adicionarLista(produto)}
                  >Comprar</Botao>
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