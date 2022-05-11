import React from 'react';
import Filtros from './components/Filtros';
import Carrinho from './components/Carrinho';
import styled from 'styled-components'


const Body = styled.div`
width: 100vw;
display:flex;
justify-content: space-between;
height:auto;

`


class App extends React.Component {

  state = {
    produtos: [],
    valorInputMin: "",
    valorInputMax: "",
    valorInputBusca: "",

  }

  onChangeMinimo = (event) => {
    this.setState ({valorInputMin : event.target.value })
  }

  onChangeMaximo = (event) => {

    this.setState ({valorInputMax: event.target.value })
  }

  onChangeBusca = (event) => {

    this.setState ({valorInputBusca : event.target.value})


  }


  render () {
    console.log (this.state.valorInputMin)
    console.log (this.state.valorInputMax)
    console.log (this.state.valorInputBusca)
    return (  
    <Body>


     <Filtros
     onChangeMinimo = {this.onChangeMinimo}
     valueMinimo = {this.state.valorInputMin}
     onChangeMaximo = {this.onChangeMaximo}
     valueMaximo = {this.state.valueMaximo}
     onChangeBusca = {this.onChangeBusca}
     valueBusca = {this.state.valorInputBusca}
     />
     <Carrinho/>


    </Body>
  );
    }
}

export default App;
