import React from 'react';
import { CardCarrinho, ContainerCar } from './StyleComponents';


class Carrinho extends React.Component {

render() {
  
  return (
    <ContainerCar>
      <span>Carrinho de Compras </span>
      <CardCarrinho >
      {this.props.renderiza}
      </CardCarrinho>
      <span> valor total: R${this.props.totalcarrinho},00 </span>
    </ContainerCar>
);
}
}
 
export default Carrinho;