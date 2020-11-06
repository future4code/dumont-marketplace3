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
                      />
            <Carrinho />
        </ContainerPrincipal>
        <Footer />
    </ClienteContainer>
    )
  }
}
export default Cliente;