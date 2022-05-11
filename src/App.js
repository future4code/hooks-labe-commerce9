import React from 'react';
import Filtros from './components/Filtros';
import Carrinho from './components/Carrinho';
import styled from 'styled-components'
import produto1 from "./Img/produto1.jpg"
import produto2 from "./Img/produto2.jpg"
import produto3 from "./Img/produto3.jpg"
import produto4 from "./Img/produto4.jpg"
import produto5 from "./Img/produto5.jpg"

const Body = styled.div`
width: 100vw;
display:flex;
justify-content: space-between;
height:auto;

`


class App extends React.Component {

  state = {
    listaDeProdutos: [
      {id: 1, nome: "Objeto1", valor: 130 , img: produto1 },
      {id: 2, nome: "Objeto2", valor: 250 , img: produto2 },
      {id: 3, nome: "Objeto3", valor: 122 , img: produto3 },
      {id: 4, nome: "Objeto4", valor: 45 , img: produto4 },
      {id: 5, nome: "Objeto5", valor: 89 , img: produto5 }

    ],

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
