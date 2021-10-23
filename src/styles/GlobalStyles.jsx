import { createGlobalStyle } from 'styled-components'



export const GlobalStyles = createGlobalStyle`
:root {
--black: #000000;
--background: #0F0E17;
--primary: #FED941;
--grey: #A7A9BE;
--white: #FFFFFE;
--fontPrimary: "Montserrat", sans-serif;
--fontSecondary: 'Inter', sans-serif;
--blue: #5574B8;
}
*,
*::after,
*::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
    body{ 
        background-color: var(--background);
        padding: 0 5%;
    }
    //va en los titulos de cada componente
    h2{
    font-family: var(--fontPrimary);
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 58px;
    letter-spacing: -0.005em;
    color: var(--white);
    padding: 0.5rem;
    }
    //Va en la targeta calificación, cuando no hay resultados en la busqueda
    h4{
    font-family: var(--fontPrimary);
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.01em;
    color: var(--white);
    }
    //Detalle y fecha de pelicula en gray
    p{
    font-family: var(--fontPrimary);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: var(--white);
    ;}
`