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

const Footer = styled.div`
border: solid pink;
height: 10vh;
`





class Cliente extends React.Component {
  render() {
    return (
    <ClienteContainer>
        <ContainerPrincipal>
            <Filtros />
            <Produtos produtos={this.props.produtos} />
            <Carrinho />
        </ContainerPrincipal>
        <Footer />
    </ClienteContainer>
    )
  }
}
export default Cliente;