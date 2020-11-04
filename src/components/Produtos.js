import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
border: solid yellow;
width: 60vw;
height: 50vw;
margin:1vw;
`
const CartaoProduto = styled.div`
border: solid red;
width: 15vw;
text-align: center;
margin:1vw; 
`


class Produtos extends React.Component {
    render() { 
    return <ProdutosContainer>
           <CartaoProduto>
           <p>titulo</p>
           <img src='https://picsum.photos/150/150'></img>
           <p>preço</p>
           </CartaoProduto>
           </ProdutosContainer>

    }}


export default Produtos;