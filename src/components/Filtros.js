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
        <input></input>
        <p>Filtrar por valor maximo</p>
        <input></input>
        <br/>
        <select>
            <option>Categoria</option>
            <option>carro</option>
            <option>Roupas</option>
            <option>outros</option>
        </select>
  
        </FiltrosContainer>

}
}
export default Filtros;