//Método utilizado para criar estilo global no styled-components
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --blue: #5429CC;
    --red: #E52E4C;
    --green: #33CC95;

    --blue-light: #6933FF;
    
    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF; 
}
//Utilizando o font-size padrão para desktop 16px
*{
    margin: 0;
    padding: 0;
    box-sizing : border-box;
}
//Definindo tamanho de fonte menor quando usário for mobile
html{
    @media (max-width: 1080px) {
        font-size: 93.75%;  
    }
    @media (max-width: 720px) {
        font-size: 87.5%;  
    }
}
body{
    //definindo a cor vinda da variavel global
   background: var(--background);
   -webkit-font-smoothing: antialiased ;
}
body, input,textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}
h1, h2,h3,h4,h5, h6, strong{
    font-weight: 600;
}


button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

`