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
            <p>Filtrar por valor mínimo</p>
            <input  type="Number"
                    onChange={this.props.onChangeValorMinimo}
                    value={this.props.valorMinimo}/>
            <p>Filtrar por valor máximo</p>
            <input  type="Number"
                    onChange={this.props.onChangeValorMaximo}
                    value={this.props.valorMaximo}/>
            <p>Filtrar por categoria</p>
            <select onChange={this.props.onChangeValorCategoria}>
                <option value="">Categoria</option>
                <option value="collectible">Colecionáveis</option>
                <option value="audio">Audio</option>
                <option value="instruments">Instrumentos</option>
            </select>
        </FiltrosContainer>
    }
}
export default Filtros;