import styled from 'styled-components'
import variables from '../../styles/variables'
export const ContainerForm = styled.div`
    margin: auto;
    width: 50%;
    box-shadow: 0 0 10px #444444;
    border-radius: 1rem;
    border: 3px solid ${variables.primary};
    padding: 2rem; 
    text-align: center;
    p{
        color: ${variables.primary};
    }
    label, h1{
        color: white;
    }div{
        border-top: 2px solid ${variables.primary};
        padding-top: 10px;
    }
`

export const FormLogin = styled.form`
    display: grid;
    grid-template-columns: 1fr;
`
export const FormRegister = styled.form`
    display: grid;
    grid-template-columns: 1fr;
`
export const Input = styled.input`
    padding: 0.5rem;
    border-radius: 10px;
    border: 2px solid ${variables.primary};
`
export const Button = styled.button`
    width: 30%;
    margin: auto;
    background-color: ${variables.primary};
    border-radius: 10px;
    margin-top: 1rem;
    padding: 0.3rem;
`