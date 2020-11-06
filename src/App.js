import React from 'react';
import Vendedor from './components/Vendedor';
import Cliente from './components/Cliente';
import Carrinho from './components/Carrinho';
import Produtos from './components/Produtos';
import axios from 'axios'
import styled from 'styled-components'

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0 50px 0 50px;
border:solid;
`
const Input = styled.input`
width:500px;
height:10px;
margin:auto;
`

class App extends React.Component {
	state = {
  pagina: true,
  produtos:[],
  valorMaximo: "",
  valorMinimo: "",
  categoria: ""
	}
	 
    componentDidMount=()=>{
		this.pegarProdutos()
	  }
  
	  pegarProdutos = () =>{
		 axios.get('https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products').then((resposta) =>{
		   this.setState({produtos:resposta.data.products})
	
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
	   onChangeCategoria = (event) => {
        this.setState({categoria: event.target.value})
    }

	render() {
		const pagina = this.state.pagina ?  <Cliente 
		produtos={this.state.produtos}
		onChangeValorMaximo={this.onChangeValorMaximo}
		onChangeValorMinimo={this.onChangeValorMinimo}
		onChangeCategoria={this.onChangeCategoria}
		valorMaximo={this.state.valorMaximo}
		valorMinimo={this.state.valorMinimo}
		/> : <Vendedor/>
		return (
			<div>
				 <Header> 
        <p>Logo</p>
        <div>
        <Input></Input>
        <button>Pesquisar</button>
		<button onClick={this.mudarPagina}> 4Used Vendas</button>
        </div>

        </Header>
				
				{pagina}
			
			</div>
		)
	}
}

export default App;
