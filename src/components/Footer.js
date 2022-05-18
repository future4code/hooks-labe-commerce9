import React from "react";
import styled from "styled-components";

const Container = styled.footer`
    *{
        color: #dddddd;
        margin: 1px 0px;
        padding: 0px;
        text-decoration: none;
    }

    width: 100vw;
    height: 120px;
    background-color: #444444;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a{
        font-weight: bold;
        margin: 0px 5px;
    }

    a:hover{
        text-decoration: underline;
    }
    
`
class Footer extends React.Component{
    render(){
        return(
            <Container>
                <h3>Porjeto LabeCommerce</h3>
                <p>Turma Hooks</p>
                <p>Desenvolvido por:</p>
                <p><a href="https://www.linkedin.com/in/camila-barros-santos-356745134" target="_blank">Camila,</a>  
                <a href="https://www.linkedin.com/in/jonas-levy-892b84230" target="_blank">Jonas,</a>  
                <a href="https://www.linkedin.com/in/pedrocesarpinto" target="_blank">Pedro</a></p>
            </Container>
        )
    }

}

export default Footer
