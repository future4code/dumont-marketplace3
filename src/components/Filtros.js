import React from 'react';
import styled from 'styled-components';

const FiltrosContainer = styled.div`
border: solid blue;
width: 20vw;
height: 50vw;
margin: 1vw;
`

class Filtros extends React.Component {

render() {
    return <FiltrosContainer>
        <p>Filtros</p>
        <p>Filtrar por valor minimo</p>
        <input type='number' onChange={this.props.onChangeValorMinimo} value={this.props.valorMinimo}></input>
        <p>Filtrar por valor maximo</p>
        <input type='number' onChange={this.props.onChangeValorMaximo} value={this.props.valorMaximo}></input>
        <br/>
        <p>Filtrar por categoria</p>
        <select onChange={this.props.onChangeCategoria}>
            <option></option>
            <option>carro</option>
            <option>Roupas</option>
            <option>outros</option>
        </select>
  
        </FiltrosContainer>

}
}
export default Filtros;