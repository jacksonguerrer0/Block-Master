import variables from '../../../styles/variables'
import styled from 'styled-components'

export const ContentNav = styled.header`
    position: sticky;
    top: 0;
    padding: 0 0  0.5rem 0;
    z-index: 20;
    .activeLink {
    border-bottom: 2px solid var(--primary);
    text-decoration: none;
    z-index: 70;
}
.contentImg{
    position: relative;
    z-index: 45;
}
.box{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${variables.background};
    z-index:40;
}
.a{
    color: var(--primary) !important;

}
a:hover{
    color: white;
}
.buttonNavbar{
    background-color: var(--primary);
}
.containerSearch{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-content: center;
}
.barraBusqueda{
    display: flex;
    width: auto;
    padding: 0.5rem;
}
.inputBusqueda{
    background-color: var(--white);
    border-color: var(--primary);
    border-radius:8px 0px 0px 8px;
}
.inputBusqueda:focus{
    border-color: var(--primary);
    border-radius:8px 0px 0px 8px;
}

.buttonSearch{
    background-color: var(--primary);
    border-color: var(--primary);
    border-radius: 0px 4px 4px 0px;
    border: none;
    width: 74px;
    height: 44px;
}

.fa-sign-out-alt{
    color: var(--primary);
    padding-left: 1rem;
    font-size: 3rem;
    justify-self: end;
    align-self: center;
    cursor: pointer;
}
.contentItems{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.navbar-nav{
    width: 90%;
    justify-content: flex-end;
    display: flex;
    position: fixed;
    transform: translateY(-200%);
    transition: transform 2s ease;
    z-index: 30;
    background-color: ${variables.background};
}
.itemNav{
    margin: 2%  2%;
    font-family: var(--fontPrimary);
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: var(--white);
    text-decoration: none;
}
.hamburger{
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: ${variables.primary};
    font-size:3rem;
    margin: 0;
    z-index: 45;
}
input[type = checkbox]{
    width: 42px;
    height: 48px;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    opacity: 0;
    z-index: 50;
    cursor: pointer;
}
input[type = checkbox]:checked + .navbar-nav{
    transform: translateY(0);
}
@media screen and (min-width: 1000px){
    display: flex;
    justify-content: space-between;
    background-color: ${variables.background};
    input[type = checkbox]{
        display: none;
    }
    .hamburger{
        display: none;
    }
    .box{
        display: none;
    }
    .contentImg{
        position: static;
    }
    .navbar-nav{
        flex-flow: row wrap;
        position: static;
        transform: none;
        transition: none;
        justify-content: flex-end;
        align-items: center;
    }
    .itemNav{
        margin: 0.2rem 0.5rem;
        height: auto;
    }
    .containerSearch{
        flex-flow: row wrap;
        justify-content: center;
        width: auto;
    }
}
`