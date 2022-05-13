import React from 'react';
import styled from 'styled-components'

const ContainerFilter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  width:250px;
  height:400px;
  background-color: #cccccc;

  `


class Filtros extends React.Component {
 
    render() {
     
    return (
        <>          
      <ContainerFilter>
        <h2>Filtros</h2>
        <p> Valor mínimo: </p>
        <input onChange={this.props.onChangeMinimo} value={this.props.valueMinimo} type="number" />
        <p> Valor máximo: </p>
        <input onChange={this.props.onChangeMaximo} value={this.props.valueMaximo} type="number" />
        <p> Buscar por nome: </p>
        <input onChange={this.props.onChangeBusca} value= {this.props.valueBusca} placeholder = "Produto"  />
      </ContainerFilter>

      </>
    )
    }
    }

      export default Filtros;