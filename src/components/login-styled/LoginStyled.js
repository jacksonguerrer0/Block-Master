import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .containerForm{
        margin: auto;
        width: 100%;
        max-width: 500px;
        box-shadow: 0 0 10px #444444;
        border-radius: 1rem;
        border: 3px solid ${variables.primary};
        padding: 2rem; 
        text-align: center;
        p{
            color: ${variables.primary};
            text-decoration: underline;
            cursor: pointer;
        }
        label, h1{
            color: white;
        }div{
            border-top: 2px solid ${variables.primary};
            padding-top: 10px;
        }   
        img{
            cursor: pointer;
        }
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
    min-width: 100px;
    margin: auto;
    background-color: ${variables.primary};
    color: ${variables.white};
    border-radius: 10px;
    margin-top: 1rem;
    padding: 0.3rem;
    cursor: pointer;
`