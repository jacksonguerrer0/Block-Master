import React from 'react'
import styled from 'styled-components'
import Grid from '../components/Grid'

const ContainerFilm = styled.div`
    h2{
        font-size: 3rem;
        margin-top: 5rem;
    }
    @media screen and (max-width: 700px){
        h2{
            font-size: 2.4rem;
        }
    }
`
const AllFilms = () => {


    return (
        <ContainerFilm>
            <h2 >Todas las peliculas</h2>
            <Grid />
        </ContainerFilm>
    )
}

export default AllFilms
