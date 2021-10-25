import styled from 'styled-components'

export const ContainerCarousel = styled.div`
    img{
        min-height: 200px;
        height: 50vw;
        max-height: 400px;
        object-fit: cover;
        object-position: 70% 40%;
        cursor: pointer;
        border-radius: 0.6rem;
    }
`
export const ButtonIndicator = styled.div`
    position: absolute;
    bottom: -3rem;
`