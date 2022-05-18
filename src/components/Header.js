import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    background-color: #55aaff;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    div{

        h2{
            margin:0px;
            color: #444444;
            font-weight: 1000;
            font-size: 2em;

            span{
                color: #ffaa00;
            }
        }
    }

`

class Header extends React.Component{
    render(){
        return(
            <Container>
                <div>
                    <h2><span>Labe</span>Commerce</h2>
            
                </div>

            </Container>
        )
    }
}

export default Header