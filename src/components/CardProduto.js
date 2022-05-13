import React from "react";
import styled from "styled-components";

<<<<<<< HEAD
class CardProduto extends React.Component{
    render(){
        return(
            <Card>
=======
const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 300px;
    padding-bottom: 10px;
    border: 1px solid black;
    
    p{
        margin:2px;
    }
    
`

class CardProduto extends React.Component{
    render(){
        return(
            <Card >
>>>>>>> jonas-brigandoComGit
                <img src={this.props.imagem}/>
                <p>{this.props.titulo}</p>
                <p>R$ {this.props.valor},00</p>
                <button onClick={this.props.onClickAddCar}>Adicionar ao carrinho</button>
            </Card>
        )
    }
}
export default CardProduto