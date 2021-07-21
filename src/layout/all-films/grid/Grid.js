import styled from 'styled-components'


export const ContainerCard = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 20rem;
    gap: 4rem 2rem ;
    @media (max-width: 1800px){
        grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width: 1300px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 950px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 700px){
        grid-template-columns: repeat(2, 1fr);
    }
`

