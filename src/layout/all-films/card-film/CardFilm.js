import styled from 'styled-components'

export const CardFilm = styled.div`
    background-image: url(${({imagen})=> imagen && imagen});
    border-radius: 8px;
    background-position: center;
    background-repeat: no-repeat;
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
` 
export const I = styled.i`
    color: var(--primary);
`