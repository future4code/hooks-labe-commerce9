import React from "react";
import styled from "styled-components";

class CardProduto extends React.Component{
    render(){
        return(
            <Card>
                <img src={this.props.imagem}/>
                <p>{this.props.titulo}</p>
                <p>R$ {this.props.valor},00</p>
                <button onClick={this.props.onClickAddCar}>Adicionar ao carrinho</button>
            </Card>
        )
    }
}
export default CardProduto