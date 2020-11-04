import React from 'react';
import Vendedor from './components/Vendedor';
import Cliente from './components/Cliente';
import Carrinho from './components/Carrinho';
import Produtos from './components/Produtos';

class App extends React.Component {
	state = {
  pagina: true
 	}
	
     
	render() {
		const pagina = this.state.pagina ?  <Cliente/> : <Vendedor/>
		return (
			<div>
				{pagina}
			</div>
		)
	}
}

export default App;
