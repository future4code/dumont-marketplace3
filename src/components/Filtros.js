import React from 'react';
import styled from 'styled-components';

const FiltrosContainer = styled.div`
border: solid blue;
width: 12vw;
height: 50vw;
margin: 1vw;
`
const InputFiltros = styled.input`
width: 80%;
`

class Filtros extends React.Component {
  render() {
    return <FiltrosContainer>
      <p>Filtros</p>
      <p>Valor mínimo</p>
      <InputFiltros type="Number"
                    onChange={this.props.onChangeValorMinimo}
                    value={this.props.valorMinimo}/>
      <p>Valor máximo</p>
      <InputFiltros type="Number"
                    onChange={this.props.onChangeValorMaximo}
                    value={this.props.valorMaximo}/>
      <p>Filtrar por categoria</p>
      <select onChange={this.props.onChangeValorCategoria}>
        <option value="">Categoria</option>
        <option value="audio"> Áudio </option>
        <option value="collectible"> Colecionáveis </option>
        <option value="instruments"> Instrumentos </option>
        <option value="media"> Mídias </option>
        <option value="sound-system"> Sistemas de som </option>
      </select>
    </FiltrosContainer>
    }
}
export default Filtros;