import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

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
    
    state={
        pagina:true,
        produtos:[]
    }

    componentDidMount=()=>{
		this.pegarProdutos()
	  }
  
	  pegarProdutos = () =>{
		 axios.get('https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products').then((resposta) =>{
		   this.setState({produtos:resposta.data.products})
		   console.log(this.state.produtos)
		 })
	  } 
    

    render() { 
         
         const produtosRenderizados = this.state.produtos.map((produto) =>{
          return<CartaoProduto>
                 <p>{produto.name}</p>
                 <Imagem src={produto.photos}></Imagem>
                 <p>preço: R${produto.price}</p>
                 <p>{produto.paymentMethod}</p>
                  <Botao>Comprar</Botao>
                 </CartaoProduto>
         })

    return <ProdutosContainer>
           {produtosRenderizados}
           </ProdutosContainer>

    }}


export default Produtos;