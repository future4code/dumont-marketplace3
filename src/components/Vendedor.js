import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Pag = styled.div`
`

const Inputs = styled.div`
  width:20vw;
  margin:auto;
  margin-top:3vh;
`
const Botao = styled.button`
margin: 10px;
cursor: pointer;
`

class Vendedor extends React.Component {
  state = {
    inputNome: "",
    inputDescricao: "",
    inputPreco: 0,
    selectFormaDePagamento: "billet",
    selectCategoria: "audio",
    inputFoto: [],
    selectParcelamento: 1 
  }

  cadastrarProduto = () => {
    const body = {
      name: this.state.inputNome,
      description: this.state.inputDescricao,
      price: this.state.inputPreco,
      paymentMethod: this.state.selectFormaDePagamento,
      category: this.state.selectCategoria,
      photos: this.state.inputFoto,
      installments: this.state.selectParcelamento
    }
    
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products', body
    ).then((response) => {

      alert("Anúncio cadastrado.")
    }).catch((error) => {
      console.log(error.message)
      console.log(body)
    })
  }

  onChangeInputNome = (event) => {
    this.setState({inputNome: event.target.value})
  }

  onChangeInputDescricao = (event) => {
    this.setState({inputDescricao: event.target.value})
  }

  onChangeInputPreco = (event) => {
    this.setState({inputPreco: event.target.value})
  }

  onChangeSelectCategoria = (event) => {
    this.setState({selectCategoria: event.target.value})
  }

  onChangeSelectFormaDePagamento = (event) => {
    this.setState({selectFormaDePagamento: event.target.value})
  }

  onChangeInputFoto = (event) => {
    this.setState({inputFoto: [event.target.value]})
  }

  onChangeSelectParcelamento = (event) => {
    this.setState({selectParcelamento: event.target.value})
  }

  render() {
    return (
      <Pag>
      <Inputs>
        <p>Nome</p>
        <input value={this.state.inputNome} onChange={this.onChangeInputNome}></input>
      </Inputs>
      <Inputs>
        <p>Descrição</p>
        <input value={this.state.inputDescricao} onChange={this.onChangeInputDescricao}></input>
      </Inputs>
      <Inputs>
      <p>Preço</p>
        <input value={this.state.inputPreco} onChange={this.onChangeInputPreco}></input>
      </Inputs>
      <Inputs>
        <p>Categoria</p>
        <select value={this.state.selectCategoria} onChange={this.onChangeSelectCategoria}>
          <option value="audio"> Áudio </option>
          <option value="collectible"> Colecionáveis </option>
          <option value="instruments"> Instrumentos </option>
          <option value="media"> Mídias </option>
          <option value="sound-system"> Sistemas de som </option>
        </select>    
      </Inputs>
      <Inputs>
      <p>Forma de pagamento </p>
      <select value={this.state.selectFormaDePagamento} onChange={this.onChangeSelectFormaDePagamento}>
        <option value="billet"> Boleto </option>
        <option value="card"> Cartão de crédito </option>
        <option value="transfer"> Transferência </option>
      </select>      
      </Inputs>
      <Inputs>
      <p>Foto</p>
        <input value={this.state.inputFoto} onChange={this.onChangeInputFoto}></input>
      </Inputs>
      <Inputs>
      <p>Parcelamento</p>
      <select value={this.state.selectParcelamento} onChange={this.onChangeSelectParcelamento}>
        <option value="1"> À vista </option>
        <option value="2"> 2 </option>
        <option value="3"> 3 </option>
        <option value="4"> 4 </option>
        <option value="5"> 5 </option>
        <option value="6"> 6 </option>
        <option value="7"> 7 </option>
        <option value="8"> 8 </option>
        <option value="9"> 9 </option>
        <option value="10"> 10 </option>
        <option value="11"> 11 </option>
        <option value="12"> 12 </option>
      </select>
      <br/>
      <Botao onClick={this.cadastrarProduto}> Cadastrar </Botao>
      </Inputs>
     
        
       </Pag>  
    )
  }
}

export default Vendedor;
