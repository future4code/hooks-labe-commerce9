import styled from "styled-components";

export const Body = styled.div`
width: 100vw;
justify-content:center;
height:auto;
box-sizing: border-box;

`
export const Section = styled.section`
  width: 100%;
  display:flex;
  justify-content: space-between;
  height:auto;
  box-sizing: border-box;
`


export const ContainerCar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  width:250px;
  height:400px;
  box-sizing: border-box;
  text-align: center;
  background-color: #cccccc;
  

  span{
    font-weight: 500;
    width: 100%;
    background-color: #aaaaaa;
    box-sizing: border-box;
    padding: 3px 0px;
    

  }
  `

export const CardCarrinho = styled.ul`
  list-style: none;
  width: 250px;
  margin: 0px;
  padding: 20px 10px;
  box-sizing: border-box;
  height: 85%;
  

  li{
    width: 100%;
    display: flex;
    justify-content: space-evenly;  
  }
`

export const Main = styled.main`
  width: calc(100vw - 500px);
  height: auto;

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
  }

`
export const ContainerProdutos = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px ;
  justify-items: center;
  align-items: center;
  padding: 10px 0px;
  height: auto;
`
