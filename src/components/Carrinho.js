import React from 'react';
import styled from 'styled-components'


const ContainerCar = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  width:250px;
  height:400px;
  `

  class Carrinho extends React.Component {
  
 render() {
  
 return (

<ContainerCar>
 
 <h2>Carrinho:</h2>
 <button> Remover </button>
 <button> Remover </button>
 <p> Valor total:  </p>

</ContainerCar>

);
}
}
 
export default Carrinho;