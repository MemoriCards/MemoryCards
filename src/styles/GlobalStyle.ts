import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --color-primary-1: #0E387A;
    --color-primary-2: #052A88;
    --red: #FF4B4B;
    --green: #5ACC05;
    --yellow: #FFC800;
    --grey-2: #BFBFBF;
    --grey-1 : #EBEBEB; 
    --grey-0 : #F4F4F4; 
}

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: "Inter", sans-serif;
    text-decoration:none;  
}

ul, ol, li{
    list-style:none;
}

a{
    text-decoration:none;
}

a:visited {
    color: inherit;
}

button{
    cursor: pointer;
    background-color:transparent;
    border:none;
    text-decoration:none;
}

textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    background: transparent;
    border: 0;
} 



`;