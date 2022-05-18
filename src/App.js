import React from "react";
import produto1 from "./Img/produto1.jpg";
import produto2 from "./Img/produto2.jpg";
import produto3 from "./Img/produto3.jpg";
import produto4 from "./Img/produto4.jpg";
import produto5 from "./Img/produto5.jpg";
import CardProduto from './components/CardProduto';
import Header from './components/Header';
import { Body, Section, Main, ContainerProdutos} from './components/StyleComponents';
import Carrinho from './components/Carrinho';
import Footer from './components/Footer';
import Filtros from "./components/Filtros";


class App extends React.Component {

  state = {
    listaDeProdutos: [
      {id: 1, nome: "Produto Legal", valor: 130 , img: produto1 },
      {id: 2, nome: "Fuguete da NASA", valor: 250 , img: produto2 },
      {id: 3, nome: "Camisa", valor: 122 , img: produto3 },
      {id: 4, nome: "Meteoro", valor: 45 , img: produto4 },
      {id: 5, nome: "Objeto5", valor: 89 , img: produto5 }
    ],
    carrinho:[],
    valorInputMin: "",
    valorInputMax: "",
    valorInputBusca: "",
    select:"crescente"
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

  onChangeSelect = (event) =>{
    this.setState ({select : event.target.value})
  
  }

  crescente = (a,b) => (a.valor > b.valor ? 1 : -1)

  decrescente = (a,b) => (a.valor < b.valor? 1 : -1)

  //==================ADD PRODUTO=====================

<<<<<<< HEAD
     <Main> 
       <div>
         <p>Quantidade de produtos: {this.state.listaDeProdutos.length()}</p>
         <div>
           <p>Ordenação: </p> 
           <select onChange={this.onChangeSelect}>
             <option value="crescente"> Crescente </option>
             <option value="decrescente"> Decrescente</option>
           </select>
         </div>
       </div>
       <CardProduto
       imagem={this.state.listaDeProdutos}
       />
     </Main>
     <Carrinho/>
=======
  onClickAddCar = (id) => {
    const index = this.state.carrinho.findIndex(produto=>{
      return produto.id === id
    })
>>>>>>> 29fb8d83e53520cc5709ef6d0d4b9de5cde9b352

    const listCar = this.state.carrinho
    const listProduto = this.state.listaDeProdutos

    if(index<0){

      const Objeto = {...listProduto.find(produto => produto.id ===id), quantidade:1}
      
      const array = [...listCar, Objeto]

      this.setState({carrinho: array})
    }else{
        
      const array = listCar.map(produto =>{
        if(produto.id === id){
          return{
            ...produto,
            quantidade: produto.quantidade + 1
          }
          }return produto
        }
      )
      this.setState({carrinho: array})
    }
  }

  //==================REMOVER PRODUTO=====================

  removerProduto = (id) =>{

    const array = this.state.carrinho.map(produto =>{
      if(produto.id === id){
        return{
          ...produto,
          quantidade: produto.quantidade - 1
        }
        }return produto
      }
    )
    this.setState({carrinho: array})
  
  }

  //======================== RENDER =================================
  render () {

    const vmin = parseInt(this.state.valorInputMin ? this.state.valorInputMin : 0)
    const vmax = parseInt(this.state.valorInputMax ? this.state.valorInputMax: 0)

    const listaRenderizada = this.state.listaDeProdutos.filter(produto=>{ 
      return vmin === 0 ||produto.valor >= vmin
    }).filter(produto =>{
      return vmax === 0 || produto.valor <= vmax
    }).filter(produto =>{ //filtro por busca de nome
    return produto.nome.toUpperCase().includes(this.state.valorInputBusca.toUpperCase())
  })
  
  listaRenderizada.sort(this.state.select==="crescente" ? this.crescente : this.decrescente)

  let quantidadeDeProdutos = listaRenderizada.length

  const listaCarrinho = this.state.carrinho.filter(produto =>{
    return produto.quantidade > 0
  })

  let totalCarrinho = 0

  for(let i of this.state.carrinho){
    totalCarrinho += i.valor * i.quantidade 
  }

//=============================== return components=============================
    return (  
  
    <Body>
    
      <Header/>

        <Section>
          <Filtros
            onChangeMinimo = {this.onChangeMinimo}
            valueMinimo = {this.state.valorInputMin}
            onChangeMaximo = {this.onChangeMaximo}
            valueMaximo = {this.state.valueMaximo}
            onChangeBusca = {this.onChangeBusca}
            valueBusca = {this.state.valorInputBusca}
          />

          <Main> 
            <div>
              <p>Quantidade de produtos: {quantidadeDeProdutos} </p>
              <div>
                <p>Ordenação: </p> 
                <select onChange={this.onChangeSelect}>
                  <option value="crescente"> Crescente </option>
                  <option value="decrescente"> Decrescente</option>
                </select>
              </div>
            </div>

            <ContainerProdutos>
                {listaRenderizada.map(produto =>{
                  return(
                    <CardProduto
                    imagem={produto.img}
                    titulo={produto.nome}
                    valor={produto.valor}
                    onClickAddCar={() =>this.onClickAddCar(produto.id)}
                    />
                    )
                  })
                }
              </ContainerProdutos>
       
          </Main> 

          <Carrinho totalcarrinho={totalCarrinho} 
            renderiza ={listaCarrinho.map(produto =>{
              return (
                <li>
                <span>{produto.quantidade}x</span>  <span>{produto.nome}</span> 
                <button onClick={()=>this.removerProduto(produto.id)}> remover</button>
                </li>)
            })}>
          </Carrinho>
        </Section> 
        <Footer />
      </Body>
    );
  }
}

export default App;
