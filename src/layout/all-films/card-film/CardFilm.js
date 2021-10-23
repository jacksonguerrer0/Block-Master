import styled from 'styled-components'

export const CardFilm = styled.div`
    background-image: url(${({imagen})=> imagen && imagen});
    cursor: pointer;
    background-size: cover;
`
export const Pegatin = styled.div`
    display: -webkit-box;
    align-items: center;
    background-color: rgb(45 44 53 / 78%);;
    border: 2px solid var(--primary);
    width: 6rem;
    height: 2.9rem;
    margin-top: 24px;
    padding: 5px;
    border-radius: 0 30px 30px 0;
    border-left: none;
    h4{
        font-size: 1.5rem;
    }
` 
export const I = styled.i`
    color: var(--primary);
`