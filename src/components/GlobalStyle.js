import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #2a2e35;        
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: transparent;
        padding: 1rem 2rem;
        border: 3px solid #ffe45c;
        color: #fff;
        transition: all 0.25s linear;
        &:hover{
            background-color:#ffe45c;
            color: #2a2e35;
        }
    }

    h2{
        font-weight: lighter;
        font-size: 4rem;
    }

    h3{
        color: #fff;        
    }

    h4{
        font-weight: bold;
    }

    span{        
        color: #ffe45c;
        font-weight: bold;
    }

    a{
        font-size: 1.1rem;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

    `;

export default GlobalStyle;