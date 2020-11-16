import React from 'react';
import Vendedor from './components/Vendedor';
import Cliente from './components/Cliente';
import Carrinho from './components/Carrinho';
import Produtos from './components/Produtos';
import axios from 'axios'
import styled from 'styled-components'
import Logo from './assets/images/4used-logo.svg'
import Lupa from './assets/images/LUPA.svg'
import RedesSociais from './assets/images/RedesSociais.svg'
import DownloadApp from './assets/images/DownloadApp.svg'

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px 50px;
background-color: #43ADA5;
`
const ContainerPesquisar = styled.div`
display: flex;
border: solid 1px lightgray;
border-radius: 5px;
align-items: center;
background-color: white;
`
const Input = styled.input`
width:500px;
height:10px;
margin: auto;
border: lightgray;
`
const Procurar = styled.button`
border: none;
padding: 3px 20px;
cursor: pointer;
`
const Footer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 50px;
background-color: #43434F;
color: white;
`
const Lema = styled.h1`
font-size: 40px;
text-align: center;
`
const Descricao = styled.p`
text-align: justify;
max-width: 500px;
`
const Botao = styled.button`
cursor: pointer;
`

let inputPesquisa = ""
class App extends React.Component {
	state = {
		pagina: true,
		produtos:[],
		valorMaximo: "",
		valorMinimo: "",
		categoria: "",
		valorPesquisa: "",
	}
	 
    componentDidMount=()=>{
		this.pegarProdutos()
	}
  
	pegarProdutos = () =>{
		axios.get('https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products').then((resposta) =>{
		this.setState({produtos:resposta.data.products})
		{/*console.log(this.state.produtos)*/}
		})
	} 

	mudarPagina=()=>{
		this.setState({pagina:!this.state.pagina})
	}

	onChangeValorMaximo = (event) => {
		this.setState({valorMaximo: event.target.value})
	}

	onChangeValorMinimo = (event) => {
		this.setState({valorMinimo: event.target.value})
	}

	onChangeValorCategoria = (event) => {
		this.setState({categoria: event.target.value})
	}

	onChangeValorPesquisa = (event) => {
		inputPesquisa = event.target.value
	}

	onClickPesquisar = () => {
		this.setState({valorPesquisa: inputPesquisa})
	}

	render() {
		const pagina = this.state.pagina ?  <Cliente 
                                            produtos={this.state.produtos}
                                            onChangeValorMaximo={this.onChangeValorMaximo}
                                            onChangeValorMinimo={this.onChangeValorMinimo}
                                            onChangeValorCategoria={this.onChangeValorCategoria}
                                            valorMaximo={this.state.valorMaximo}
                                            valorMinimo={this.state.valorMinimo}
                                            categoria={this.state.categoria}
                                            valorPesquisa={this.state.valorPesquisa}
                                            /> 
                                            : <Vendedor/>

		return (
			<div>
			<Header> 
				<img src={Logo}/>
        {this.state.pagina && <ContainerPesquisar>
					<Input 	onChange={this.onChangeValorPesquisa}
							value={this.state.pesquisa}/>
					<Procurar onClick={this.onClickPesquisar}>
            <img src={Lupa}/>
          </Procurar>
				</ContainerPesquisar>}
        {this.state.pagina ? 
        <Botao onClick={this.mudarPagina}> 4Used Vendas</Botao> :
        <Botao onClick={this.mudarPagina}> 4Used Clientes</Botao>}
			</Header>
			{pagina}
      <Footer>
        <div>
          <h3>Quem Somos</h3>
          <Descricao>4USED é uma plataforma para venda de produtos usados,
          em que podem ser colocados artigos de decoração, calçados, 
          eletrônicos e imóveis. A idéoa é se diferenciar pela sua
          praticidade, e jeito fácil de descomplicar tudo em um site
          de marketplace!</Descricao>
        </div>
        <Lema><i>OLD <br/>IS<br/> COOL</i></Lema>
        <div>
          <h3>Nossas Redes Sociais</h3>
          <img src={RedesSociais}/>
          <h3>Baixe o App</h3>
          <img src={DownloadApp}/>
        </div>
      </Footer>
			</div>
		)
	}
}

export default App;
