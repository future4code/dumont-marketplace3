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
            <Filtros 
            onChangeValorMaximo={this.props.onChangeValorMaximo}
		        onChangeValorMinimo={this.props.onChangeValorMinimo}
		        onChangeCategoria={this.props.onChangeCategoria}
		        valorMaximo={this.props.valorMaximo}
		        valorMinimo={this.props.valorMinimo}/>
            <Produtos produtos={this.props.produtos} />
            <Carrinho />
        </ContainerPrincipal>
        <Footer />
    </ClienteContainer>
    )
  }
}
export default Cliente;