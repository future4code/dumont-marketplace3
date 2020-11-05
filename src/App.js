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
  pagina: true
 	}
	 
     mudarPagina=()=>{
		 this.setState({pagina:!this.state.pagina})
	 }

	render() {

		const pagina = this.state.pagina ?  <Cliente/> : <Vendedor/>
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
