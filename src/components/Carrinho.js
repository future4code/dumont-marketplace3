import React from 'react';
import styled from 'styled-components';

const CarrinhoContainer = styled.div`
border: solid green;
width: 20vw;
height: 50vw;
margin: 1vw;
`

class Carrinho extends React.Component {
    render() {
        return <CarrinhoContainer>
            Carrinho
        </CarrinhoContainer>
    }
}

export default Carrinho;