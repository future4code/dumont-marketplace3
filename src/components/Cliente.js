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
const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0 50px 0 50px;
border:solid;
`
const Footer = styled.div`
border: solid pink;
height: 10vh;
`

const Input = styled.input`
width:500px;
height:10px;
margin:auto;
`

class Cliente extends React.Component {
  render() {
    return (
    <ClienteContainer>
        <Header> 
        <p>Logo</p>

        <div>
        <Input></Input>
        <button>Pesquisar</button>
        </div>


        <button> 4Used Vendas</button>
        </Header>

     

        <ContainerPrincipal>
            <Filtros />
            <Produtos />
            <Carrinho />
         
        </ContainerPrincipal>
        <Footer />
    </ClienteContainer>
    )
  }
}
export default Cliente;